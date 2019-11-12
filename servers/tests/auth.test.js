const chai = require('chai');
const sinon = require('sinon');
const jwt = require('jsonwebtoken');
const Auth = require('../middlewares/auth');

const { expect } = chai;

describe('Test Auth Middleware', () => {
  let request;
  let response;
  let next;

  beforeEach(() => {
    request = { headers: { token: null } };
    response = {
      status: sinon.spy(() => response),
      send: sinon.spy(),
      sendStatus: sinon.spy(),
      message: sinon.spy(),
    };
    next = sinon.spy();
  });

  it('next should not be called if no token is provided', (done) => {
    Auth.verifyToken(request, response, next);
    expect(next.called).to.equal(false);
    done();
  });

  it('should return 401 status code if no token is provided', (done) => {
    Auth.verifyToken(request, response, next);
    expect(response.status.getCall(0).args[0]).to.equal(401);
    done();
  });

  it('next should not be called if bad token is provided', (done) => {
    request.headers.token = 'some authorization header';
    Auth.verifyToken(request, response, next);
    expect(next.called).to.equal(false);
    done();
  });

  it('should return 401 status code if bad token is provided', (done) => {
    request.headers.token = null;
    Auth.verifyToken(request, response, next);
    expect(response.status.getCall(0).args[0]).to.equal(401);
    done();
  });
});