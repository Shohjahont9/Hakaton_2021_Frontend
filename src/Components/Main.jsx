import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./Common/ProtectedRoute";
import Dashboard from "./Dashboard/Dashboard";

const Content = styled.div`
  display: flex;
`;

const BodyDiv = styled.div`
  width: calc(100% - ${(props) => props.width + "px"});
  transition: all 1s ease-in;
  overflow-y: hidden;
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
          {/* <ProtectedRoute path={`${match.url}/users`} component={Users} exact />
          <ProtectedRoute
            path={`${match.url}/fuqarolar`}
            component={Fuqarolar}
            exact
          /> */}
          )
          <Redirect from={match.url} to={`${match.url}/dashboard`} />
        </Switch>
      </BodyDiv>
    </Content>
  );
};

export default Main;
