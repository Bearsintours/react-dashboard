import { dayPage } from '../actions/changePage';
import { weekPage } from '../actions/changePage';
import { monthPage } from '../actions/changePage';
import { createStore } from 'redux';
import data from '../data';


const reducerDefaultState = {
    orders: data.week.orders,
    ordersCompleted: data.week.completed,
    totalSales: data.week.total,
    sales: data.week.breakdown,
    itemSales: data.week.sales
};

const reducer = function (state = reducerDefaultState, action) {
  switch(action.type) {
    case 'DAY_PAGE':
        return {
            orders: data.day.orders,
            ordersCompleted: data.day.completed,
            totalSales: data.day.total,
            sales: data.day.breakdown,
            itemSales: data.day.sales
        }
    case 'WEEK_PAGE':
        return {
            orders: data.week.orders,
            ordersCompleted: data.week.completed,
            totalSales: data.week.total,
            sales: data.week.breakdown,
            itemSales: data.week.sales
        }   
    case 'MONTH_PAGE':
    return {
            orders: data.month.orders,
            ordersCompleted: data.month.completed,
            totalSales: data.month.total,
            sales: data.month.breakdown,
            itemSales: data.month.sales
    }   
    default:
        return state       
  }
}

export const store = createStore(reducer);
