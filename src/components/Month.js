import React from 'react';
import Orders from './Orders';
import Sales from './Sales';
import Items from './Items';
import data from '../data';

const orders = data.month.orders;
const ordersCompleted = data.month.completed;
const ratio = ordersCompleted / orders;
const totalSales = data.month.total;
const sales = data.month.breakdown;
const itemSales = data.month.sales;

class Month extends React.Component {
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
    

export default Month;