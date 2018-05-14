import React from 'react';
import { connect } from 'react-redux';
import { weekPage } from '../actions/changePage';
import Orders from './Orders';
import Sales from './Sales';
import Items from './Items';
import data from '../data';

const Week = (props) => {
    props.dispatch(weekPage());
    return (
        <div className="component">
            <Orders 
                orders={props.orders}
                ordersCompleted={props.ordersCompleted}
            />
            <Sales 
                totalSales={props.totalSales}
                sales={props.sales}
                itemSales={props.itemSales}
                orders={props.orders}
            />
            <Items />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders,
        ordersCompleted: state.ordersCompleted,
        totalSales: state.totalSales,
        sales: state.sales,
        itemSales: state.itemSales
    }
}
    
export default connect(mapStateToProps)(Week);
