const users = require('./usersModel');
const db = require('../data/dbConfig');

describe('users model', () => {
  describe('get', () => {
    it('should return an array', () => {
      return users.getUsers().then(res => {
        expect(res).toHaveLength(3);
      });
    });
  });
  describe('getById', () => {
    it('should return single resource', () => {
      return users.findById(2).then(res => {
        expect(res.name).toBe('banana');
      });
    });
  });

  describe('post', () => {
    afterEach(() => {
      return db('users').truncate();
    });
    it('should insert new user and recieve that users name', () => {
      return users
        .addUsers({ name: 'cj' })
        .then(res => {
          expect(res.name).toBe('cj');
        })
        .catch();
    });
  });
  describe('delete', () => {
    it('should check if one user is deleted', () => {
      return users.deleteUser(1).then(res => {
        expect(res).toBe(0);
      });
    });
  });
});
