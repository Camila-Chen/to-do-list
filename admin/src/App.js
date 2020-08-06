import React, { Component } from "react";
import { HashRouter, Route, NavLink } from 'react-router-dom'
import SignUp from './components/SignUp'

class App extends Component {
    render() {
        return (
            // <Router >
            //     <Switch>
            //         <Route
            //             path="/signup"
            //             component={SignUp}
            //         />
            //     </Switch>
            // </Router>
            <HashRouter>
                <div>
                    <div className="nav">
                        <NavLink to="/Home" activeClassName="selected" exact>注册</NavLink>&nbsp;
                    </div>
                    <Route path="/Home" component={SignUp} />
                </div>
            </HashRouter>
        );
    }
}

export default App;