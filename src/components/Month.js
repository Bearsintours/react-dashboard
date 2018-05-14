import React from 'react';
import { connect } from 'react-redux';
import { monthPage } from '../actions/changePage';
import Orders from './Orders';
import Sales from './Sales';
import Items from './Items';
import data from '../data';

const Month = (props) => {
    props.dispatch(monthPage());
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
    
export default connect(mapStateToProps)(Month);


// const orders = data.month.orders;
// const ordersCompleted = data.month.completed;
// const ratio = ordersCompleted / orders;
// const totalSales = data.month.total;
// const sales = data.month.breakdown;
// const itemSales = data.month.sales;

// class Month extends React.Component {
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
    

// export default Month;