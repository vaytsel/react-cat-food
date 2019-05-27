import React, {useState} from 'react';
import './fonts/fonts.css';
import './app.scss';
import FoodList from './../food-list/food-list';

function App() {

    const [items, setItems] = useState([
        { id: 1, with: 'c фуа-гра', portion: 10, mouse: 1, weight: '0,5', selected: false, disabled: false, happy: false},
        { id: 2, with: 'c рыбой', portion: 40, mouse: 2, weight: '2', selected: false, disabled: false, happy: false},
        { id: 3, with: 'c курой', portion: 100, mouse: 5, weight: '5', selected: false, disabled: true, happy: true}
    ]);

    return (
        <div className="wrapper">
            <div className="container">
                <h1 className="text-center">Ты сегодня покормил кота?</h1>
                <FoodList items={items}/>
            </div>  
        </div>              
    )
}

export default App;