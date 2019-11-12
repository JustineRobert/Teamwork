const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiThings = require('chai-things');
const { describe } = require('mocha');
const server = require('../../index');
const { users, auth, articles } = require('../mock');

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

describe('Articles endpoint tests', () => {
  it('Should fail to create an article ', (done) => {
    const data = {};
    chai.request(server)
      .post('/api/v2/articles')
      .send(data)
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(422);
      });
    done();
  });
  it('Should fail to create an article due database issues ', (done) => {
    const data = { ...articles[1] };
    chai.request(server)
      .post('/api/v2/articles')
      .send(data)
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(501);
      });
    done();
  });
  it('should create an article', (done) => {
    const data = {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
      image: 'https://www.bing.com/images/search?view=detailV2&ccid=cqz%2F%2F5Wk&id=BAC739AEE0CA90D9FF16A3B2D98491478E400D55&thid=OIP.cqz__5WkVsR_NlbwOyl9CgHaFj&mediaurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F72%2Fac%2Fff%2F72acffff95a456c47f3656f03b297d0a.jpg&exph=2736&expw=3648&q=Jamaica+Scenery&simid=608048260347202531&selectedindex=34&ajaxhist=0&vt=0&sim=11',
      article: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.',
    };
    chai.request(server)
      .post('/api/v2/articles')
      .send(data)
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(201);
        response.body.should.have.property('message')
          .equal('Article successfully created');
        response.body.should.have.property('data');
        response.body.data.should.be.an('Object');
        response.body.data.should.have.property('createdOn');
        response.body.data.should.have.property('title')
          .equal(data.title);
        response.body.data.should.have.property('image')
          .equal(data.image);
        response.body.data.should.have.property('article')
          .equal(data.article);
      });
    done();
  });

  it('should not find article', (done) => {
    const articleID = -1;
    chai.request(server)
      .get(`/api/v2/articles/${articleID}`)
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(404);
        response.body.should.have.property('message')
          .equal('Article not found !');
      });
    done();
  });

  it('should find article', (done) => {
    const articleID = 1;
    chai.request(server)
      .get(`/api/v2/articles/${articleID}`)
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(200);
        response.body.should.have.property('message')
          .equal('Article found !');
        response.body.should.have.property('data');
        response.body.data.should.be.an('Object');
      });
    done();
  });

  it('should get feeds', (done) => {
    chai.request(server)
      .get('/api/v2/feeds')
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(200);
        response.body.should.have.property('message')
          .equal('Success');
        response.body.should.have.property('data');
      });
    done();
  });

  it('should delete article', (done) => {
    const articleID = 1;
    chai.request(server)
      .delete(`/api/v2/articles/${articleID}`)
      .set('token', token)
      .end((request, response) => {
        response.status.should.equal(204);
      });
    done();
  });

  it('should fail to delete article', (done) => {
    const articleID = 9;
    chai.request(server)
      .delete(`/api/v2/articles/${articleID}`)
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(404);
        response.body.should.have.property('message')
          .equal('Article Not Found !!');
      });
    done();
  });

  it('should fail to add comment', (done) => {
    const comment = '';
    const articleId = 4;
    chai.request(server)
      .post(`/api/v2/articles/${articleId}/comments`)
      .set('token', token)
      .send({ comment })
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(422);
      });
    done();
  });

  it('should add a comment', (done) => {
    const comment = 'This is what i used to say to people and they didn\'t believe me !!';
    const articleId = 1;
    chai.request(server)
      .post(`/api/v2/articles/${articleId}/comments`)
      .set('token', token)
      .send({ comment })
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(201);
        response.body.should.have.property('message').equal('Comment successfully added.');
        response.body.data.should.have.property('comment').equal(comment);
      });
    done();
  });

  it('should fail to edit article due to unavailability of articleId', (done) => {
    const articleId = 800;
    const data = {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
      image: 'https://www.bing.com/images/search?view=detailV2&ccid=jU9tpIOV&id=53BBE3B00447D2E3748DB006A92EB4D733857E9A&thid=OIP.jU9tpIOVQJsx6Z2x8XAHOgHaE8&mediaurl=http%3A%2F%2Ftravelfeatured.com%2Fwp-content%2Fuploads%2F2014%2F01%2Fnegril-jamaica-5.jpg&exph=683&expw=1024&q=Jamaica+Scenery&simid=608044004021043282&selectedindex=36&ajaxhist=0&vt=0&sim=11',
      article: 'Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.',
    };
    chai.request(server)
      .patch(`/api/v2/articles/${articleId}`)
      .set('token', token)
      .send(data)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(404);
        response.body.should.have.property('message').equal('Article not found !');
      });
    done();
  });

  it('should fail to edit article due to validation', (done) => {
    const articleId = 1;
    chai.request(server)
      .patch(`/api/v2/articles/${articleId}`)
      .set('token', token)
      .send({})
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(422);
      });
    done();
  });

  it('should edit article', (done) => {
    const articleId = 1;
    const data = {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
      image: 'https://www.bing.com/images/search?view=detailV2&ccid=3CxcBqOL&id=E75D172EED4E7D04690C42572063F0B40980BB8E&thid=OIP.3CxcBqOL81wq9aNrcfl4qAHaFj&mediaurl=https%3A%2F%2Fi.pinimg.com%2F736x%2Ff8%2Ff7%2F1b%2Ff8f71b15c3a286792d3e64ad643a17c1--jamaica-scenery.jpg&exph=552&expw=736&q=Jamaica+Scenery&simid=608053298324836072&selectedindex=50&ajaxhist=0&vt=0&sim=11',
      article: 'Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.',
    };
    chai.request(server)
      .patch(`/api/v2/articles/${articleId}`)
      .set('token', token)
      .send(data)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(200);
        response.body.should.have.property('message')
          .equal('Article successfully edited');
        response.body.should.have.property('data');
        response.body.data.should.be.an('Object');
        response.body.data.should.have.property('title')
          .equal(data.title);
        response.body.data.should.have.property('image')
          .equal(data.image);
        response.body.data.should.have.property('article')
          .equal(data.article);
      });
    done();
  });

  it('should not find article, wrong tag', () => {
    const tagId = 100;
    chai.request(server)
      .get(`/api/v2/feeds/${tagId}/tags`)
      .set('token', token)
      .set('Accept', 'application/json')
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(404);
        response.body.should.have.property('message')
          .equal('No articles found !');
      });
  });

  it('should find articles by tag', () => {
    const tagId = 1;
    chai.request(server)
      .get(`/api/v2/feeds/${tagId}/tags`)
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(200);
        response.body.should.have.property('message')
          .equal('Success');
        response.body.data.should.be.an('Array');
      });
  });

  it('should not find articles by author', () => {
    const authorId = 0;
    chai.request(server)
      .get(`/api/v2/author/articles/${authorId}`)
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(404);
        response.body.should.have.property('message')
          .equal('No articles found !');
      });
  });

  it('should find articles by author', () => {
    const authorId = 1;
    chai.request(server)
      .get(`/api/v2/author/articles/${authorId}`)
      .set('token', token)
      .end((request, response) => {
        response.body.should.have.property('status')
          .equal(200);
        response.body.should.have.property('message')
          .equal('Success');
        response.body.data.should.be.an('Array');
      });
  });
});