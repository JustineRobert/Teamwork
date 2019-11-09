import chai from 'chai';
import chaiHttp from 'chai-http';
import chaiThings from 'chai-things';
import { describe } from 'mocha';
import server from '../../index';


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