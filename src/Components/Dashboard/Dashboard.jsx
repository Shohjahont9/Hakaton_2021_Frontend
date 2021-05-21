import React from "react";
import styled from "styled-components";
import machine from "../../images/machineMain.jpg";
import repair from "../../images/repairMain.jpg";
import shop from "../../images/shopMain.jpg";

const PageDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  height: 40%;
  width: 100%;
  justify-content: space-around;
`;

const CardDiv = styled.div`
  border-radius: 15px;
  margin: 20px;
  min-height: 200px;
  min-width: 200px;
  height: 90%;
  width: 30%;
  box-shadow: 0 0 5px;
  transition: all ease-in-out 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 20px #ff0000;
  }
`;

const NewsContainer = styled.div`
  display: flex;
  height: 60%;
  width: 100%;
  justify-content: space-around;
`;

const NewsDiv = styled.div`
  margin: 20px;
  border-radius: 15px;
  min-height: 200px;
  min-width: 200px;
  height: 90%;
  width: 47%;
  box-shadow: 0 0 5px;
`;

const Dashboard = () => {
  return (
    <PageDiv>
      <CardContainer>
        <CardDiv
          style={{
            backgroundImage: `url(${machine})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></CardDiv>
        <CardDiv
          style={{
            backgroundImage: `url(${repair})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></CardDiv>
        <CardDiv
          style={{
            backgroundImage: `url(${shop})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></CardDiv>
      </CardContainer>
      <NewsContainer>
        <NewsDiv></NewsDiv>
        <NewsDiv></NewsDiv>
      </NewsContainer>
    </PageDiv>
  );
};

export default Dashboard;
