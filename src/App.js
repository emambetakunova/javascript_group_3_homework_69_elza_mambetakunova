import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import FastFoodBuilder from "./containers/FastFoodBuilder/FastFoodBuilder";


class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={FastFoodBuilder}/>
                        </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
