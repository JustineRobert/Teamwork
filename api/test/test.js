const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiThings = require('chai-things');
const { describe } = require('mocha');
const server = require('../../index');


chai.should();
chai.use(chaiThings);
chai.use(chaiHttp);

describe('Endpoint prefix', () => {
  it('should return 400 http status', (done) => {
    chai.request(server)
      .get('/api/v2/')
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(400);
      });
    done();
  });
});