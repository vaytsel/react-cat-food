import React from 'react';
import './food-list-item.scss';

function FoodListItem() {
    return (
        <div className="food-list-item">
            <div className="food-list-item__bevel"></div>
            <div className="food-list-item__main">                
                <div className="food-list-item__head">Сказочное заморское яство</div>
                <div className="food-list-item__title">Нямушка</div>
                <div className="food-list-item__with">с фуа-гра</div>
                <div className="food-list-item__sum">
                    <div className="food-list-item__portion"><b>10</b> порций</div>
                    <div className="food-list-item__gift">мышь в подарок</div>
                </div>
                <div className="food-list-item__weight">0,5 <span>кг</span></div>
            </div>
        </div>        
    )
}

export default FoodListItem;