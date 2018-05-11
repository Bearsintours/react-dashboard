import React from 'react';
import Orders from './Orders';

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders : .3,
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
    

export default Day;