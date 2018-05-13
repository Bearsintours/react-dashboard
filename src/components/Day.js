import React from 'react';
import { connect } from 'react-redux';
import { dayPage } from '../actions/changePage';
import Orders from './Orders';
import Sales from './Sales';
import Items from './Items';
import data from '../data';

const Day = (props) => {
    props.dispatch(dayPage());
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
            />
            <Items />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders,
        ordersCompleted: state.completed,
        totalSales: state.totalSales,
        sales: state.sales,
        itemSales: state.itemSales
    }
}
    
export default connect(mapStateToProps)(Day);

// const orders = data.day.orders;
// const ordersCompleted = data.day.completed;
// const ratio = ordersCompleted / orders;
// const totalSales = data.day.total;
// const sales = data.day.breakdown;
// const itemSales = data.day.sales;

// class Day extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             orders,
//             ordersCompleted,
//             totalSales,
//             sales,
//             itemSales
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <Orders 
//                     orders={this.state.orders}
//                     ordersCompleted={this.state.ordersCompleted}            
//                 />
//                 <Sales 
//                     totalSales={this.state.totalSales}
//                     sales={this.state.sales}
//                     itemSales={this.state.itemSales}
//                 />
//                 <Items />
//             </div>
//         )
//     }
// }

// export default Day;