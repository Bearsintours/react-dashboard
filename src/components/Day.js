import React from 'react';
import Orders from './Orders';
import Sales from './Sales';
import Items from './Items';
import data from '../data';


const orders = data.day.orders;
const ordersCompleted = data.day.completed;
const ratio = ordersCompleted / orders;
const totalSales = data.day.total;
const sales = data.day.breakdown;
const itemSales = data.day.sales;

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders,
            ordersCompleted,
            ratio,
            totalSales,
            sales,
            itemSales
        }
    }
    render() {
        return (
            <div>
                <Orders 
                    orders={this.state.orders}
                    ordersCompleted={this.state.oredersCompleted}
                    ratio={this.state.ratio}
                />
                <Sales 
                    totalSales={this.state.totalSales}
                    sales={this.state.sales}
                    itemSales={this.state.itemSales}
                />
                <Items />
            </div>
        )
    }
}

export default Day;