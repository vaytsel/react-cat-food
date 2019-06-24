import React from 'react';

function BuyLink({ selected, disabled, onSelected }) {
    if (!disabled && !selected) {
        return (
            <React.Fragment>
                <span className="buy-link" onClick={onSelected}>
                    купи
                </span>
                <span>.</span>
            </React.Fragment>
        );
    }
    return false;
}

export default BuyLink;
