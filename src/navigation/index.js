import React from "react";
import Routes from "./routes";
import { Switch, Route, Redirect } from "react-router-dom";

import HomeScreen from "../screens/homeScreen";
import AboutScreen from "../screens/aboutScreen";

const Navigation = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/home" />;
        }}
      />
      <Route path={Routes.HOME}>
        <HomeScreen />
      </Route>
      <Route path={Routes.ABOUT}>
        <AboutScreen />
      </Route>
    </Switch>
  );
};

export default Navigation;
