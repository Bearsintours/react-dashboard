import React from 'react';
import Orders from './Orders';

class Month extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders : .5,
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
    

export default Month;