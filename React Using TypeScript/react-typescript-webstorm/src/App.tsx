import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    // tuples are arrays that can take multiple types.
    let myTuple: [string, number] = ['Ranelle', 56];
    // enums: maps attribute names to numbers.
    enum Codes {first, second, third};
    // any. Use when you're not sure what type will be.
    let firstName: any = 'Ranelle';
    // void. use, for example, when you need to void the return type of function.
    const warning = (): void => {
        console.log("Warning")
    }

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
