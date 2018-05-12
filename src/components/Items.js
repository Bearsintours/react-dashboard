import React from 'react';
import data from '../data';

const items = data.items;

const Items = (props) => (
    <div>
        {
            items.map((item) => {
                return (
                    <div key={item.name}>
                        <p><span></span>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                )
            })
        }
    </div>
)

export default Items;