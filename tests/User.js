var assert = require('assert');
var mocha = require('mocha');
var User = require(__dirname + '/../models').User;

describe('User', function() {
  it('should create a user', function(done) {
    User.create({name: 'bob'}).then(function(user) {
      console.log('user', user);
      assert.strictEqual(user.name, 'bob');
      done();
    });
  });
});

