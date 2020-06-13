import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';
import token from './mocks/token';

chai.use(chaiHttp);
const id = '2fdd8fbb-9de9-4ed7-8531-4263c57107f8';

describe('DELETE PRODUCT', () => {
  it('It should delete product successfully', (done) => {
    chai
      .request(app)
      .delete(`/api/v1/product/delete?id=${id}`)
      .set('x-access-token', token)
      .end((err, res) => {
        expect(res.body).to.have.keys('status', 'message');
        expect(res.body.status).to.be.equal(200);
        expect(res.body.message).to.be.equal('product have been deleted');
        expect(res);
        done();
      });
  });
});
