import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';
import token from './mocks/token';

chai.use(chaiHttp);
const id = '2fdd8fbb-9de2-4ed7-8531-4263c57107f2';

describe('UPDATE PRODUCT', () => {
  it('It should update product successfully', (done) => {
    chai
      .request(app)
      .patch(`/api/v1/product/update?id=${id}`)
      .set('x-access-token', token)
      .send({
        name: 'nSanDisk 128GB',
        price: 30,
        description: 'Nintendo-licensed to provide dependable, '
      })
      .end((err, res) => {
        expect(res.body).to.have.keys('status', 'message');
        expect(res.body.status).to.be.equal(200);
        expect(res.body.message).to.be.equal('Product was update successfully');
        expect(res);
        done();
      });
  });
});
