import chai from 'chai';
import chaiHttp from 'chai-http';
import chaiThings from 'chai-things';
import { describe } from 'mocha';
import joi from '@hapi/joi';
import server from '../../index';
import users from '../mock/user';

chai.should();
chai.use(chaiThings);
chai.use(chaiHttp);

describe('Create user account endpoint', () => {
  it('should return 422 http status', (done) => {
    const data = {};
    chai.request(server)
      .post('/api/v2/auth/signup')
      .send(data)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(422);
      });
    done();
  });

  it('should return 201 http status', (done) => {
    const data = { ...users[1] };
    chai.request(server)
      .post('/api/v2/auth/signup')
      .send(data)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(201);
        response.body.should.have.property('message')
          .equal('User created successfully');
        response.body.should.have.property('data');
        response.body.data.should.be.an('Object');
        response.body.data.should.have.property('token');
      });
    done();
  });

  it('should return 409 http status', (done) => {
    const data = { ...users[0] };
    chai.request(server)
      .post('/api/v2/auth/signup')
      .send(data)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(409);
        response.body.should.have.property('message')
          .equal('Email already exists !');
      });
    done();
  });
});