import { dayPage, weekPage, monthPage } from '../src/actions/changePage';
import data from '../src/data';

var assert = require('assert');
var expect = require('expect.js');

describe('dayPage', function() {
  it('should expose a function', function () {
    expect(dayPage).to.be.a('function');
  });
  it('should have action type = DAY_PAGE', function() {
    const action = dayPage();
    assert.equal(action.type, 'DAY_PAGE' );
  }); 
});

describe('weekPage', function() {
  it('should expose a function', function () {
    expect(weekPage).to.be.a('function');
  });
  it('should have action type = WEEK_PAGE', function() {
    const action = weekPage();
    assert.equal(action.type, 'WEEK_PAGE' );
  }); 
});

describe('monthPage', function() {
  it('should expose a function', function () {
    expect(monthPage).to.be.a('function');
  });
  it('should have action type = MONTH_PAGE', function() {
    const action = monthPage();
    assert.equal(action.type, 'MONTH_PAGE' );
  }); 
});
