import React from 'react';


class Orders extends React.Component {    
    render() {
        const ratio = this.props.ordersCompleted / this.props.orders;
        return (
            <div>
                <div className="gauge">
                    <Gauge percent={ratio} animate={true}/>
                </div>
            </div>
        )
    }
}

const Gauge = (props) => {
    let {
      percent = 0,         // a number between 0 and 1, inclusive
      width = 100,         // the overall width
      height = 10,         // the overall height
      rounded = true,      // if true, use rounded corners
      color = "#0078bc",   // the fill color
      animate = false,     // if true, animate when the percent changes
      label = null         // a label to describe the contents 
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