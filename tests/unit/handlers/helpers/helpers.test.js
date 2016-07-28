'use strict';
const chai = require('chai');
const should = chai.should();
const helpers = require('../../../../handlers/helpers');

describe('handler/helpers', function desc() {
  it('exists', function it() {
    should.exist(helpers);
  });
  it('has a jsonAPIHelper', function it() {
    should.exist(helpers.jsonAPIHelper);
  });
});
