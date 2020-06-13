import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';

chai.use(chaiHttp);

describe('LOGIN', () => {
  it('It should login successfuly', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'admin@admin.com',
        password: 'password'
      })
      .end((err, res) => {
        expect(res.body).to.have.keys('status', 'message', 'token');
        expect(res.body.status).to.be.equal(200);
        expect(res.body.message).to.be.equal('You have been logged in successfully');
        expect(res);
        done();
      });
  });
});
