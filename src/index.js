import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )     
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();