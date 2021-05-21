import React, { useState } from "react";
import styled from "styled-components";
import { Form, Input, Button, Typography, Spin } from "antd";
import sideimage from "../../images/background2.jpg";
import logo from "../../images/logo.png";
import authApi from "./../../services/authService";
import { Redirect } from "react-router-dom";

const LoginDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImgDiv = styled.div`
  width: 42%;
  height: 100%;
`;

const FormDiv = styled.div`
  width: 58%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const LogoDiv = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
  margin-right: 70px;
  width: 100px;
  height: 150px;
`;

const Inputs = styled.div`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 100px;
  box-shadow: 0px 0px 5px red;
  border-radius: 5px;
  background-color: white;
`;

const Login = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const doSubmit = async (value) => {
    setLoading(true);
    try {
      await authApi.login(value.username, value.password);
      history.push("/app");
    } catch (err) {}
    setLoading(false);
  };
  if (authApi.getCurrentUser()) return <Redirect to="/" />;

  return (
    <LoginDiv>
      <ImgDiv>
        <img src={sideimage} alt="123" style={{ height: " 100%" }} />
      </ImgDiv>
      <FormDiv>
        <LogoDiv>
          <img src={logo} alt="123" style={{ height: " 100%" }} />
        </LogoDiv>
        <Inputs>
          <div
            style={{
              position: "relative",
            }}
          >
            <Typography
              style={{
                fontSize: 32,
                margin: "0 1em 0 1em",
                textAlign: "center",
              }}
              className="text-dark font-weight-bold"
            >
              Добро Пожаловать
            </Typography>
            <Form
              style={{
                margin: "25px",
              }}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={doSubmit}
              onFinishFailed={() => alert("fail")}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" danger>
                  {loading ? <Spin /> : "Войти"}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Inputs>
      </FormDiv>
    </LoginDiv>
  );
};

export default Login;
