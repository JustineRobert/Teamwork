const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const {
  PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT, PGTESTDATABASE,
} = process.env;
const database = process.env.NODE_ENV === 'test' ? PGTESTDATABASE : PGDATABASE;


const pool = new Pool({
  database,
  user: PGUSER,
  host: PGHOST,
  password: PGPASSWORD,
  port: PGPORT,
});

class Database {
  constructor(table) {
    this.table = table;
  }

  async queryBuilder(query, params) {
    try {
      const client = await pool.connect();
      const res = await client.query(query, params);
      client.end();
      const { rows, rowCount } = res;
      return {
        rows,
        count: rowCount,
      };
    } catch (errors) {
      return { errors };
    }
  }

  async create(data) {
    const params = [];
    const chunks = [];
    const values = [];
    const keys = [];
    Object.keys(data)
      .forEach((key) => {
        keys.push(key);
        params.push(data[key]);
        values.push(`$${params.length}`);
      });
    chunks.push(`(${values.join(', ')})`);
    const query = `INSERT INTO ${this.table}(${keys.join(', ')}) values${chunks.join(', ')} RETURNING *`;
    return await this.queryBuilder(query, params);
  }

  async where(column, op = '=', value, orderBy = 'id DESC') {
    if (this.table && column && value) {
      const sql = `SELECT * FROM ${this.table} WHERE ${column}${op}$1 ORDER BY ${orderBy}`;
      const query = await this.queryBuilder(sql, [value]);
      if (query.errors) return query;
      return {
        rows: query.rows,
        count: query.count,
      };
    }
    return {
      error: 'Please provide table name, column & value',
    };
  }

  async first(column, op = '=', value) {
    const query = await this.where(column, op, value);
    if (!query.error) {
      return {
        row: query.rows[0],
        count: query.count,
      };
    }
    return query;
  }

  async all(orderBy = 'id DESC') {
    const sql = `SELECT * FROM ${this.table} ORDER BY ${orderBy}`;
    const query = await this.queryBuilder(sql, []);
    return (!query.error) ? {
      rows: query.rows,
      count: query.count,
    } : query;
  }

  async delete(where) {
    if (where) {
      const conditions = this.prepareObject(where, ' AND ');
      const sql = `DELETE FROM ${this.table} WHERE ${conditions}`;
      return this.queryBuilder(sql);
    }
    return { error: 'provide condition' };
  }

  async update(data, where) {
    if (data && where) {
      const updates = this.prepareObject(data);
      const conditions = this.prepareObject(where, ' AND ');
      const sql = `UPDATE ${this.table} SET ${updates} WHERE ${conditions} RETURNING *`;
      const query = await this.queryBuilder(sql);
      return (!query.error) ? {
        rows: query.rows,
        count: query.count,
      } : query;
    }
    return { error: 'provide data & condition' };
  }

  prepareObject(obj, separator = ', ') {
    const chunks = [];
    Object.keys(obj).forEach((key) => {
      chunks.push(`${key}='${obj[key]}'`);
    });
    return chunks.join(`${separator}`);
  }
}

module.exports = Database;