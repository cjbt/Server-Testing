const request = require('supertest');
const db = require('./data/dbConfig');
const server = require('./server');

describe('routes', () => {
  describe('GET /', () => {
    it('should return 200 OK', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        })
        .catch();
    });
  });
  describe('POST /users', () => {
    it('should recieve 201 on post', () => {
      return request(server)
        .post('/users')
        .send({ name: 'wow' })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });
  describe('DELETE /:id', () => {
    it('should recieve 200 on delete', () => {
      return request(server)
        .delete('/1')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
