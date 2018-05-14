import React from 'react';
import { AreaChart, Area, XAxis, YAxis, RadialBarChart, RadialBar, Legend } from 'recharts';
import '../styles/components/Sales.scss';


const  Sales = (props) => (
    <div className="sales">
        <h1>Total Sales</h1>
        <p>${props.totalSales}</p>
        <div className="sales__graphs">
            <div className="graph">
                <SalesChart sales={props.sales}/>
            </div>
            <div className="graph">
                <RadialChart itemSales={props.itemSales}/>
            </div>
        </div>
        <h1>Sales</h1>
        <p>{props.orders}</p>        
    </div>
)

const SalesChart = (props) => {
    const data = props.sales;
    return (
        <div>
            <AreaChart 
                width={400} 
                height={300} 
                data={data}
                margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
            >
                <XAxis dataKey="name" />
                <Area type="monotone" dataKey="hoodie" stroke="#f45241" fillOpacity={.8} fill="#f45241" />
                <Area type="monotone" dataKey="hat" stroke="#41dcf4" fillOpacity={.8} fill="#41dcf4" />
                <Area type="monotone" dataKey="bracelet" stroke="#f4a742" fillOpacity={.8} fill="#f4a742" />
            </AreaChart>
        </div>
    )
}

const RadialChart = (props) => {
    const data = [
        {name: 'HOODIE', sold: props.itemSales[0].hoodie, fill: '#f45241'},
        {name: 'FITTED CAP', sold: props.itemSales[1].cap, fill: '#f4a742'},
        {name: 'BRACELET', sold: props.itemSales[2].bracelet, fill: '#41dcf4'}   
    ];  
    const style = {
        left: 270,
        top:120,
        lineHeight: '24px'
    };
    return (
        <RadialBarChart 
            width={400} 
            height={400} 
            cx={150} 
            cy={150} 
            innerRadius={30} 
            outerRadius={120} 
            barGap={0} 
            barSize={30} 
            data={data} 
            startAngle={90} 
            endAngle={-270}>
            <RadialBar  
                minAngle={15} 
                background clockWise={true} 
                dataKey='sold'
            />
            <Legend 
                iconSize={10} 
                width={120} 
                height={140} 
                layout='vertical' 
                verticalAlign='middle' 
                wrapperStyle={style}
            />
        </RadialBarChart>
    )
}

export default Sales;
