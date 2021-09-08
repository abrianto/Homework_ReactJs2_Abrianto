import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "../components/Admin/Admin";
import DataDiri from "../components/DataDiri/DataDiri";
import FormDataDiri from "../components/FormData/FormData";
import Login from "../components/Login/Login";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/sign-in' component={Login} />
                <Route exact path='/sign-up' component={Login} />
                <Route exact path='/form-pengajuan' component={FormDataDiri} />
                <Route exact path='/data-diri' component={DataDiri} />
                <Route exact path='/admin' component={Admin} />
            </Switch>
        </Router>
    );
};

export default Routes;