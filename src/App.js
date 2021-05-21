import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import ProtectedRoute from "./Components/Common/ProtectedRoute";
import { ToastContainer } from "react-toastify";

import Main from "./Components/Main";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ToastContainer />
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/app" component={Main} />
        <Redirect from="/" to="/app" />
      </Switch>
    </div>
  );
}

export default App;
