import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Switch} from "react-router";
import {LinearProgress} from "@material-ui/core";
import FrotendRoute from './components/common/FrontendRoute'; 

const Routes = (props) => {
    return (
        <Suspense fallback={<LinearProgress/>}>
            <Router>
                <Switch>
                    <FrotendRoute {...props} > 
                        <Route exact path={["/", "/person"]} component={lazy(() => import("./components/Frontend/PersonManagement/list"))}/>
                        <Route exact path="/person/add" component={lazy(() => import("./components/Frontend/PersonManagement/add"))}/>
                    </FrotendRoute>
                </Switch>
            </Router>
        </Suspense>
    )
}

export default Routes;