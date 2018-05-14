import React from 'react';
import data from '../data';
import '../styles/components/Items.scss';

const items = data.items;

const Items = (props) => (
    <div className="items">    
        {
            items.map((item, idx) => {
                return (
                    <div key={item.name} className="item">
                        <div className="item__name">
                            <div id={"circle"+idx}className="items__circle"></div>
                            <p>{item.name}</p>
                        </div>
                        <div className="item__price">
                            <p>${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
)

export default Items;