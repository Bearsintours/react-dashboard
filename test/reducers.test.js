import { reducer } from '../src/reducers/reducerActivePage';
import data from '../src/data';

var assert = require('assert');
var expect = require('expect.js');

describe('reducer', function() {
    it('should expose a function', function(){
        expect(reducer).to.be.a('function');
    })
    it('should setup default value', function() {
      const state = reducer(undefined, { type: '@@INIT' });
      assert.equal(state.orders, data.week.orders);
    })
  })

  // describe('reducer', function() {
//   it('should get day data', function() {
//     const state = reducer(undefined, { type: 'DAY-PAGE' });
//     assert.equal(state.orders, data.day.orders);
//   })
// })

// describe('reducer', function() {
//   it('should get week data', function() {
//     const state = reducer(undefined, { type: 'WEEK-PAGE' });
//     assert.equal(state.orders, data.week.orders);
//   })
// })

// describe('reducer', function() {
//   it('should get month data', function() {
//     const state = reducer(undefined, { type: 'MONTH-PAGE' });
//     assert.equal(state.orders, data.month.orders);
//   })
// })
