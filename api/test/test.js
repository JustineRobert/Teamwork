import { should, use, request as _request } from 'chai';
import chaiHttp from 'chai-http';
import chaiThings from 'chai-things';
import { describe } from 'mocha';
import server from '../../index';


should();
use(chaiThings);
use(chaiHttp);

describe('Endpoint prefix', () => {
  it('should return 400 http status', (done) => {
    _request(server)
      .get('/api/v2/')
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(400);
      });
    done();
  });
});
