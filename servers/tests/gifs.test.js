import chai from 'chai';
import chaiHttp from 'chai-http';
import chaiThings from 'chai-things';
import { describe } from 'mocha';
import server from '../../index';
import { users, auth, gifs } from '../mock';

chai.should();
chai.use(chaiThings);
chai.use(chaiHttp);

let { token } = auth;
before((done) => {
  const login = {
    email: users[0].email,
    password: users[0].textPassword,
  };

  chai.request(server)
    .post('/api/v2/auth/signin/')
    .send(login)
    .end((error, response) => {
      token = response.body.data.token;
    });
  done();
});

describe('gifs endpoint tests', () => {
  it('Should fail to create an gif ', (done) => {
    const data = {};
    chai.request(server)
      .post('/api/v2/gifs')
      .send(data)
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal('error');
        response.body.should.have.property('status')
          .equal('Field is empty');
      });
    done();
  });
  it('Should fail to create an gif due to database issues ', (done) => {
    const data = { ...gifs[1] };
    chai.request(server)
      .post('/api/v2/gifs')
      .send(data)
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal('error');
        response.body.should.have.property('error')
          .equal('Failed due to internal error'); 
      });
    done();
  });
  it('should create a gif', (done) => {
    const data = {
      title: 'Eget duis at tellus at urna condimentum mattis pellentesque id',
      //todo - Image should be gif
      image: 'https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop'
    };
    chai.request(server)
      .post('/api/v2/gifs')
      .send(data)
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal('success');
        response.body.should.have.property('data');
        response.body.data.should.be.an('Object');
        response.body.data.should.have.property('message')
          .equal('GIF image successfully posted');
        response.body.data.should.have.property('gifId');
        response.body.data.should.have.property('createdOn');
        response.body.data.should.have.property('title')
          .equal(data.title);
        response.body.data.should.have.property('imageUrl')
          .equal(data.image);
      });
    done();
  });

  it('Should not find gif', (done) => {
    const gifID = -1;
    chai.request(server)
      .get(`/api/v2/gifs/${gifID}`)
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal('error');
        response.body.should.have.property('error')
          .equal('GIF not found !');
      });
    done();
  });

  it('Should find gif', (done) => {
    const gifID = 1;
    chai.request(server)
      .get(`/api/v2/gifs/${gifID}`)
      .set('token', token)
      .end((request, response) => {
         response.body.should.have.property('status')
          .equal('success');
        response.body.should.have.property('data');
        response.body.data.should.be.an('Object');
        response.body.data.should.have.property('id');
        response.body.data.should.have.property('createdOn');
        response.body.data.should.have.property('title');
        response.body.data.should.have.property('url');
        response.body.data.comments.should.be.an('Array');
      });
    done();
  });


   it('Should delete gif', (done) => {
    const gifID = 1;
    chai.request(server)
      .delete(`/api/v2/gifs/${gifID}`)
      .set('token', token)
      .end((request, response) => {
         response.body.should.have.property('status')
          .equal('success');
        response.body.data.should.have.property('message')
          .equal('Gif post successfully deleted');
      });
    done();
  });

  it('Should fail to delete gif', (done) => {
    const gifID = 9;
    chai.request(server)
      .delete(`/api/v2/gifs/${gifID}`)
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal('error');
        response.body.should.have.property('error')
          .equal('gif Not Found !!');
      });
    done();
  });

  it('Should fail to add comment', (done) => {
    const comment = '';
    const gifId = 4;
    chai.request(server)
      .post(`/api/v2/gifs/${gifId}/comments`)
      .set('token', token)
      .send({ comment })
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal('error');
        response.body.should.have.property('error')
          .equal('Field is empty');
      });
    done();
  });

  it('should add a comment', (done) => {
    const comment = 'This is what I used to say to people and didn\'t believe me!';
    const gifId = 1;
    chai.request(server)
      .post(`/api/v2/gifs/${gifId}/comments`)
      .set('token', token)
      .send({ comment })
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal('Success');
        response.body.data.should.have.property('message').equal('Comment successfully added.');
        response.body.data.should.have.property('comment').equal(comment);
        response.body.data.should.have.property('gifTitle');
      });
    done();
  });

  it('Should not find gif with wrong tag', () => {
    const tagId = 100;
    chai.request(server)
      .get(`/api/v2/feeds/${tagId}/tags`)
      .set('token', token)
      .set('Accept', 'application/json')
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal('error');
        response.body.should.have.property('error')
          .equal('No gifs found !');
      });
  });

  it('Should find gifs by tag', () => {
    const tagId = 1;
    chai.request(server)
      .get(`/api/v2/feeds/${tagId}/tags`)
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal('success');
        response.body.data.should.have.property('message')
          .equal('Gifs successfully found by tag');
        response.body.data.should.be.an('Array');
      });
  });

  it('Should not find gif by wrong author', () => {
    const authorId = 0;
    chai.request(server)
      .get(`/api/v2/author/gifs/${authorId}`)
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal('error');
        response.body.should.have.property('error')
          .equal('No gifs found !');
      });
  });

  it('Should find gifs by author', () => {
    const authorId = 1;
    chai.request(server)
      .get(`/api/v2/author/gifs/${authorId}`)
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal('Success');
        response.body.data.should.have.property('message')
          .equal('Gifs successfully found by author');
        response.body.data.should.be.an('Array');
      });
  });
});

