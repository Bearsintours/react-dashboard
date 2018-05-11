import React from 'react';
import Orders from './Orders';

class Week extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders : .7,
        }
    }
    render() {
        return (
            <div>
                <Orders orders={this.state.orders}/>
            </div>
        )
    }
}
    

export default Week;