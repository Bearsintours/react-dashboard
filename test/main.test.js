var assert = require('assert');
import { dayPage, weekPage, monthPage } from '../src/actions/changePage';
import { reducer } from '../src/reducers/reducerActivePage';
import data from '../src/data';

describe('dayPage', function() {
  it('should have action type = DAY_PAGE', function() {
    const action = dayPage();
    assert.equal(action.type, 'DAY_PAGE' );
  }); 
});

describe('weekPage', function() {
  it('should have action type = WEEK_PAGE', function() {
    const action = weekPage();
    assert.equal(action.type, 'WEEK_PAGE' );
  }); 
});

describe('monthPage', function() {
  it('should have action type = MONTH_PAGE', function() {
    const action = monthPage();
    assert.equal(action.type, 'MONTH_PAGE' );
  }); 
});

describe('reducer', function() {
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
