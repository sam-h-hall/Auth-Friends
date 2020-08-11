import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { FriendsList } from "./components/FriendsList";
import { PrivateRoute } from "./components/PrivateRoute";
import { AppBar } from "@material-ui/core";
import { navBarStyles } from "./styles/navBarStyles";

function App() {
  const classes = navBarStyles();

  return (
    <Router>
      <div className="App">
        <AppBar className={classes.root}>
          <div>
            <h1 className={classes.font}>Friends List</h1>
          </div>
          <div>
            <ul className={classes.links}>
              <li style={{ marginRight: "10px" }}>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/friends">Friends</Link>
              </li>
            </ul>
          </div>
        </AppBar>
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
