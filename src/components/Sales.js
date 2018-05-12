import React from 'react';
import { AreaChart, Area, XAxis, YAxis, RadialBarChart, RadialBar, Legend } from 'recharts';


class Sales extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Total Sales</h2>
                <p>${this.props.totalSales}</p>
                <SalesChart sales={this.props.sales}/>
                <RadialChart itemSales={this.props.itemSales}/>
            </div>
        )
    }
}

const SalesChart = (props) => {
    const data = props.sales;
    return (
        <div>
            <AreaChart width={360} height={120} data={data}
        margin={{ top: 10, right: 30, left: 30, bottom: 0 }}>
            <XAxis dataKey="name" />
            <Area type="monotone" dataKey="hoodie" stroke="#f4a742" fillOpacity={.8} fill="#f4a742" />
            <Area type="monotone" dataKey="hat" stroke="#41dcf4" fillOpacity={.8} fill="#41dcf4" />
            <Area type="monotone" dataKey="bracelet" stroke="#f45241" fillOpacity={.8} fill="#f45241" />
            </AreaChart>
        </div>
    )
}



const RadialChart = (props) => {
    const sold = [props.itemSales.hoodie, props.itemSales.hat, props.itemSales.bracelet];
    const data = [
        {name: 'bracelet', sold: sold[0], fill: '#f4a742'},
        {name: 'cap', sold: sold[1], fill: '#41dcf4'},
        {name: 'hoodie', sold: sold[2], fill: '#f45241'},
      ];
    //   const data = [
    //     {name: 'bracelet', sold: props.itemSales.hoodie, fill: '#f4a742'},
    //     {name: 'cap', sold: props.itemSales, fill: '#41dcf4'},
    //     {name: 'hoodie', sold: props.itemSales, fill: '#f45241'},
    //   ];
      
    const style = {
        left: 250,
        lineHeight: '24px'
    };
    return (
        <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={30} outerRadius={100} barGap={0} barSize={20} data={data} startAngle={90} endAngle={-270}>
            <RadialBar  minAngle={15} background clockWise={true} dataKey='sold'/>
            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
        </RadialBarChart>
    )
}

export default Sales;