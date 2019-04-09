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
import Demo from '../src/main/demo'
import Ceil from '../src/main/ceil'
//basename="/main"

export default ()=>(<Router history={browserHistory} >
        <Switch >
            <Route path="/"  exact component={Home}></Route>
            <Route path="/demo"  exact component={Demo}></Route>
            <Route path="/ceil"  exact component={Ceil}></Route>
        </Switch>
    </Router>
)

