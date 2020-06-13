import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../index';
import token from './mocks/token';

chai.use(chaiHttp);

describe('UPDATE PRODUCT', () => {
  it('It should add product successfully', (done) => {
    chai
      .request(app)
      .post('/api/v1/product/add')
      .set('x-access-token', token)
      .send({
        name: 'nSanDisk 128GB',
        price: 30,
        description: 'Nintendo-licensed to provide dependable, '
      })
      .end((err, res) => {
        expect(res.body).to.have.keys('status', 'message');
        expect(res.body.status).to.be.equal(201);
        expect(res.body.message).to.be.equal('A new product have been added');
        expect(res);
        done();
      });
  });
});
