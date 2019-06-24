import React from 'react';
import isMobile from './is-mobile';

function Head({ mouseLeave, selected }) {
    if (selected && mouseLeave && !isMobile) {
        return <div className="food-list-item__head pink">Котэ не одобряет?</div>;
    }
    return <div className="food-list-item__head">Сказочное заморское яство</div>;
}

export default Head;
