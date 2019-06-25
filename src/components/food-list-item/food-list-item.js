import React, { useState } from 'react';
import './food-list-item.scss';
import Head from './head';
import BuyLink from './buy-link';

function FoodListItem({
    mouse,
    happy,
    selected,
    disabled,
    desc,
    taste,
    onSelected,
    portion,
    weight
}) {
    const [mouseLeave, setMouseLeave] = useState(false);

    function declOfNum(number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[
            number % 100 > 4 && number % 100 < 20
                ? 2
                : cases[number % 10 < 5 ? number % 10 : 5]
        ];
    }

    const mouseText = `${mouse !== 1 ? mouse : ''} ${declOfNum(mouse, [
        'мышь',
        'мыши',
        'мышей'
    ])} в подарок`;

    const happyText = `${happy ? 'заказчик доволен' : ''}`;

    function setClass() {
        return `food-list-item ${disabled ? 'disabled' : ''} ${
            selected ? 'selected' : ''
        }`;
    }

    let descText = disabled
        ? `Печалька, ${taste} закончился.`
        : `Чего сидишь? Порадуй котэ, `;

    return (
        <li
            className={setClass()}
            onMouseLeave={() => setMouseLeave(true)}
            onMouseEnter={() => setMouseLeave(false)}>
            <div className="food-list-item__bevel"></div>
            <div
                className="food-list-item__main"
                onClick={disabled ? '' : onSelected}>
                <Head mouseLeave={mouseLeave} selected={selected} />
                <div className="food-list-item__title">Нямушка</div>
                <div className="food-list-item__taste">{taste}</div>
                <div className="food-list-item__sum">
                    <div className="food-list-item__portion">
                        <b>{portion}</b> порций
                    </div>
                    <div className="food-list-item__gift">
                        {mouseText} <br />
                        {happyText}
                    </div>
                </div>
                <div className="food-list-item__weight">
                    {weight} <span>кг</span>
                </div>
            </div>
            <div className="food-list-item__desc text-center">
                {selected ? desc : descText}
                <BuyLink
                    disabled={disabled}
                    selected={selected}
                    onSelected={onSelected}
                />
            </div>
        </li>
    );
}

export default FoodListItem;
