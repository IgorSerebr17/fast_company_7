// import { divide } from "lodash";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import NavBar from "./components/navBar";
import Login from "./layouts/login";
import Users from "./layouts/users";
import UserPage from "./components/userPage";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/main" component={Main} />
                <Route path="/login" component={Login} />
                <Route
                    path="/users/:userId"
                    render={(props) => <UserPage {...props} />}
                />
                <Route path="/users" component={Users} />
            </Switch>
        </div>
    );
}

export default App;
