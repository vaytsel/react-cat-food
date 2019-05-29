import React from 'react';
import './food-list-item.scss';

function FoodListItem(props) {

    function BuyLink() {
        if (!props.disabled && !props.selected) {
            return (
                <React.Fragment>
                    <span className="buy-link" onClick={props.onSelected}>купи</span><span>.</span>
                </React.Fragment >
            )    
        } 
        return false;
    }   

    function declOfNum(number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }      

    const mouseText = `${props.mouse !== 1 ? props.mouse : ''} 
                       ${declOfNum(props.mouse, ['мышь', 'мыши', 'мышей'])} в подарок`,
          happyText = `${props.happy ? 'заказчик доволен' : ''}`,          
          classNames = `food-list-item${props.selected ? ' selected' : ''}${props.disabled ? ' disabled' : ''}`;   

    let descText;
    if (props.selected) {
        descText = `${props.desc}`;
    } else if (props.disabled) {
        descText = `Печалька, ${props.with} закончился.`;
    } else {
        descText = `Чего сидишь? Порадуй котэ, `;
    }

    return (  
        <li className={classNames}>
            <div className="food-list-item__bevel"></div>
            <div className="food-list-item__main" 
                 onClick={props.disabled ? '' : props.onSelected}>                
                <div className="food-list-item__head">Сказочное заморское яство</div>
                <div className="food-list-item__title">Нямушка</div>
                <div className="food-list-item__with">{props.with}</div>
                <div className="food-list-item__sum">
                    <div className="food-list-item__portion"><b>{props.portion}</b> порций</div>
                    <div className = "food-list-item__gift">{mouseText} <br/>{happyText}</div>
                </div>
                <div className="food-list-item__weight">{props.weight} <span>кг</span></div>
            </div>
            <div className="food-list-item__desc text-center">
                {descText}
                <BuyLink/>
            </div>
        </li>        
    )
}

export default FoodListItem;