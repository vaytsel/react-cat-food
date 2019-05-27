import React from 'react';
import FoodListItem from './../food-list-item/food-list-item';
import './food-list.scss';

function FoodList(props) {   

    const elements = props.items.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <FoodListItem key={id} 
                          { ...itemProps }
            />
        );
    });

    return (
        <ul className="food-list">{elements}</ul>
    )
}

export default FoodList;