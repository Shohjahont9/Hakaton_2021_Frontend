import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Tooltip } from "antd";
import authApi from "../services/authService";
import { withRouter } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";
import "react-pro-sidebar/dist/css/styles.css";
import logo from "../images/logoMini.png";
import machines from "../images/machines.png";
import repair from "../images/repair.png";
import shop from "../images/shop.png";
import homepage from "../images/homepage.png";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";

const Head = styled.div`
  display: flex;
  padding: 12px 24px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14;
  letter-spacing: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #d42427;
`;

const HeadText = styled.div`
  margin-left: 15px;
  margin-top: 5px;
  cursor: pointer;
`;

const FooterText = styled.div`
  margin-left: 15px;
  margin-top: 5px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14;
  letter-spacing: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Footer = styled.div`
  cursor: pointer;
  padding: 12px 24px;
  display: flex;
`;

const Sidebar = ({ collapsed, changeWidth, history }) => {
  return (
    <>
      <ProSidebar
        style={{ height: "100vh" }}
        collapsed={collapsed}
        width="250px"
      >
        <SidebarHeader>
          <Head>
            <img
              src={logo}
              alt=""
              style={{ width: 30 }}
              onClick={() => changeWidth((prev) => !prev)}
            />
            {collapsed ? null : (
              <HeadText onClick={() => history.push("/")}>
                Akfa Dashboard
              </HeadText>
            )}
          </Head>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square" popperArrow>
            <Tooltip title="Главная" placement="right">
              <MenuItem
                icon={<img src={homepage} alt="" style={{ width: 30 }} />}
              >
                <Link to="/app/dashboard" />
                Главная
              </MenuItem>
            </Tooltip>
            <Tooltip title="Oборудования" placement="right">
              <MenuItem
                icon={<img src={machines} alt="" style={{ width: 30 }} />}
              >
                <Link to="/app/machines" />
                Oборудования
              </MenuItem>
            </Tooltip>
            <>
              <Tooltip title="Неисправные" placement="right">
                <MenuItem
                  icon={<img src={repair} alt="" style={{ width: 30 }} />}
                >
                  Неисправные
                  <Link to="/app/repair" />
                </MenuItem>
              </Tooltip>
              <Tooltip title="Магазин" placement="right">
                <MenuItem
                  icon={<img src={shop} alt="" style={{ width: 30 }} />}
                >
                  Магазин
                  <Link to="/app/shop" />
                </MenuItem>
              </Tooltip>
            </>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Footer
            onClick={() => {
              history.push("/login");
              authApi.logout();
            }}
          >
            <RiLogoutBoxLine size="2em" />
            {collapsed ? null : <FooterText>Выйти</FooterText>}
          </Footer>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};
export default withRouter(Sidebar);
