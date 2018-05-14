import React from 'react';
import '../styles/components/Orders.scss';

const Orders = (props) => {    
    const ratio = props.ordersCompleted / props.orders;
    return (
        <div className="orders">
            <div className="gauge">
                <Gauge percent={ratio} animate={true}/>
            </div>
            <div className="label label--orders">
                <p>Orders</p>
                <p className="label__num">{props.orders}</p>
            </div>
            <div className="label label--completed">
                <p>Completed</p>
                <p className="label__num">{props.ordersCompleted}</p>
            </div>
        </div>
    )
}


const Gauge = (props) => {
    let {
        // a number between 0 and 1, inclusive
        percent = 0,         
        width = 300,         
        height = 10, 
        // if true, use rounded corners        
        rounded = true, 
        // the fill color     
        color = "#f45241",  
        // if true, animate when the percent changes 
        animate = false,  
        // a label to describe the contents   
        label = null          
    } = props;
  
    const r = rounded ? Math.ceil(height / 2) : 0;
    const w = percent ? Math.max(height, width * Math.min(percent, 1)) : 0;
    const style = animate ? { "transition": "width 500ms, fill 250ms" } : null;
  
    return (
        <svg width={width} height={height} aria-label={label}>
            <rect width={width} height={height} fill="#ccc" rx={r} ry={r}/>
            <rect width={w} height={height} fill={color} rx={r} ry={r} style={style}/>
        </svg>
    );
  };

  export default Orders;
  