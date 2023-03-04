import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let firstValue: string = 'Ranelle';
    let y: number[] = [2, 3, 56];
    let z: Array<string> = ['a', 'b', 'c']

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    The value {firstValue} is of {typeof firstValue} type!
                    The value {y} is of {typeof y} type!
                    The value {z} is of {typeof z} type!
                </p>
            </header>
        </div>
    );
}

export default App;
