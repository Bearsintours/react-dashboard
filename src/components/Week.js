import React from 'react';
import Orders from './Orders';
import Sales from './Sales';
import Items from './Items';
import data from '../data';


const orders = data.week.orders;
const ordersCompleted = data.week.completed;
const ratio = ordersCompleted / orders;
const totalSales = data.week.total;
const sales = data.week.breakdown;
const itemSales = data.week.sales;

class Week extends React.Component {
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
            <div className="component">
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
    

export default Week;