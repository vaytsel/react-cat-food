import React from 'react';
import './food-list-item.scss';

function FoodListItem(props) {

    function declOfNum(number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    const mouseCount = 1;
    const mouseText = `${mouseCount !== 1 ? mouseCount : ''} ${declOfNum(mouseCount, ['мышь', 'мыши', 'мышей'])} в подарок`;

    return (  
        <div className="food-list-item">
            <div className="food-list-item__bevel"></div>
            <div className="food-list-item__main">                
                <div className="food-list-item__head">Сказочное заморское яство</div>
                <div className="food-list-item__title">Нямушка</div>
                <div className="food-list-item__with">с фуа-гра</div>
                <div className="food-list-item__sum">
                    <div className="food-list-item__portion"><b>10</b> порций</div>
                    < div className = "food-list-item__gift">{mouseText}</div>
                </div>
                <div className="food-list-item__weight">0,5 <span>кг</span></div>
            </div>
            <div className="food-list-item__desc text-center">
                Чего сидишь? Порадуй котэ, <span className="buy-link">купи</span><span>.</span>
            </div>
        </div>        
    )
}

export default FoodListItem;