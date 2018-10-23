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
        <switch >
            <Route path="/"  exact component={Home}></Route>
        </switch>
    </Router>
)

