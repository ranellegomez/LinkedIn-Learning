import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    // tuples are arrays that can take multiple types.
    let myTuple: [string, number] = ['Ranelle', 56];

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    The value {myTuple[0]} is of {typeof myTuple[0]} type!
                    The value {myTuple[1]} is of {typeof myTuple[1]} type!
                </p>
            </header>
        </div>
    );
}

export default App;
