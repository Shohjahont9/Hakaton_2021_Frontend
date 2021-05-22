import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./Common/ProtectedRoute";
import Dashboard from "./Dashboard/Dashboard";
import Machines from "./Machines/Machines";
import Repair from "./Repair/Repair";
import Shop from "./Shop/Shop";
import MachineDetails from "./Machines/MachineDetails";

const Content = styled.div`
  display: flex;
  width: 100%;
`;

const BodyDiv = styled.div`
  width: calc(100% - ${(props) => props.width + "px"});
  transition: all 1s ease-in;
`;

const Main = ({ match, history }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [token] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (!token) history.push("/login");
  });

  return (
    <Content>
      <Sidebar
        collapsed={collapsed}
        changeWidth={() => setCollapsed((prev) => !prev)}
      />
      <BodyDiv width={collapsed ? 70 : 250}>
        <Switch>
          <ProtectedRoute
            path={`${match.url}/dashboard`}
            component={Dashboard}
            exact
          />
          <ProtectedRoute
            path={`${match.url}/machines`}
            component={Machines}
            exact
          />
          <ProtectedRoute
            path={`${match.url}/machine/:id`}
            component={MachineDetails}
            exact
          />
          <ProtectedRoute
            path={`${match.url}/repair`}
            component={Repair}
            exact
          />
          <ProtectedRoute path={`${match.url}/shop`} component={Shop} exact />
          )
          <Redirect from={match.url} to={`${match.url}/dashboard`} />
        </Switch>
      </BodyDiv>
    </Content>
  );
};

export default Main;
