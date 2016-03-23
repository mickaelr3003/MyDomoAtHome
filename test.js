'use strict';

var apiPort = process.env.API_PORT||3002;
var apiURL = 'http://localhost:' + apiPort + '/system';

var superagent = require('superagent');
var chai = require('chai');
var expect = chai.expect;
var should = require('should');

describe('Index', function () {
  it('Testing Index call to ' + apiURL, function (done) {
    superagent.get(apiURL)
      .end(function (err, res) {
        (err === null).should.equal(true);
        res.statusCode.should.equal(200);
        done();
      });
  });
});