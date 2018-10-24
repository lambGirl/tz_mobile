import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    browserHistory,
    hashHistory
} from 'react-router-dom'

import Home from "../src/main"
//basename="/main"

export default ()=>(<Router history={browserHistory} >
        <Switch >
            <Route path="/"  exact component={Home}></Route>
        </Switch>
    </Router>
)

