import React from 'react';
import FoodListItem from './../food-list-item/food-list-item';
import './food-list.scss';

function FoodList() {
    return (
        <div className="food-list">
            <FoodListItem />
            <FoodListItem />
            <FoodListItem />
        </div>
    )
}

export default FoodList;