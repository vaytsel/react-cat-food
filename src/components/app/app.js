import React, { useState } from 'react';
import './fonts/fonts.css';
import './app.scss';
import data from './data';
import FoodList from './../food-list/food-list';

function App() {
    const [items, setItems] = useState(data);

    const toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((item) => item.id === id);
        const oldItem = arr[idx];
        const value = !oldItem[propName];
        const item = { ...arr[idx], [propName]: value };
        return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
    };

    const onSelected = (id) => {
        const itemsx = toggleProperty(items, id, 'selected');
        setItems(itemsx);
    };

    return (
        <div className="wrapper">
            <div className="container">
                <h1 className="text-center">Ты сегодня покормил кота?</h1>
                <FoodList items={items} onSelected={onSelected} />
            </div>
        </div>
    );
}

export default App;
