import React, { Component } from "react";
import { HashRouter, Route, NavLink } from 'react-router-dom'
import Form from './components/Form'
import './scss/commonStyles.scss'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Route path="/" component={Form} />
            </HashRouter>
        );
    }
}

export default App;