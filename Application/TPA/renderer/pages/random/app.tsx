import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "../homeX";
import Login from "../login"

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path=""></Route>
            </div>
        </Router>
    )
}