import chai from 'chai';
import chaiThings from 'chai-things';
import chaiHttp from 'chai-http';
import server from '../../index';
import users from '../mock/user';

chai.should();
chai.use(chaiThings);
chai.use(chaiHttp);

describe('User Authentication', () => {
  it('should return 422 http status', (done) => {
    const data = {};
    chai.request(server)
      .post('/api/v2/auth/signin/')
      .send(data)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(422);
        response.body.message.should.be.an('Array');
      });
    done();
  });

  it('should return 400 http status', (done) => {
    const data = {
      email: users[0].email,
      password: users[0].password,
    };
    chai.request(server)
      .post('/api/v2/auth/signin/')
      .send(data)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(400);
        response.body.should.have.property('message')
          .equal('Invalid credentials');
      });
    done();
  });

  it('should return 200 http status', (done) => {
    const data = {
      email: users[0].email,
      password: users[0].textPassword,
    };
    chai.request(server)
      .post('/api/v2/auth/signin/')
      .send(data)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(200);
        response.body.should.have.property('message')
          .equal('User is successfully logged in');
        response.body.data.should.be.an('Object');
        response.body.data.should.have.property('token');
      });
    done();
  });
});
