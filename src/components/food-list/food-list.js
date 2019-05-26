import React, {useState} from 'react';
import FoodListItem from './../food-list-item/food-list-item';
import './food-list.scss';

function FoodList() {

    const [items, setItems] = useState([
        { with: 'c фуа-гра', portion: 10, mouse: 1, weight: 0.5},
        { with: 'c рыбой', portion: 40, mouse: 2, weight: 2},
        { with: 'c курой', portion: 100, mouse: 5, weight: 5}
    ])

    return (
        <div className="food-list">
            <FoodListItem />
            <FoodListItem />
            <FoodListItem />
        </div>
    )
}

export default FoodList;