import React from 'react';
import './fonts/fonts.css';
import './app.scss';
import FoodList from './../food-list/food-list';

function App() {
    return (
        <div className="wrapper">
            <div className="container">
                <h1 className="text-center">Ты сегодня покормил кота?</h1>
                <FoodList/>
            </div>  
        </div>              
    )
}

export default App;