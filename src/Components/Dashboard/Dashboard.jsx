import React from "react";
import styled from "styled-components";
import machine from "../../images/machineMain.jpg";
import repair from "../../images/repairMain.jpg";
import shop from "../../images/shopMain.jpg";
import img from "../../images/vector.jpg";
import LifeLeft from "./LifeLeft";

const PageDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  height: 40vh;
  max-height: 40vh;
  width: 100%;
  justify-content: space-around;
`;

const CardInfo = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  background-color: #0000005e;
  padding: 30px;
  color: white;
  font-size: 3em;
  text-align: center;
  border-radius: 5px;
  transition: all ease-in-out 0.25s;
`;

const CardDiv = styled.div`
  border-radius: 5px;
  margin: 20px;
  min-height: 200px;
  min-width: 200px;
  height: 90%;
  width: 30%;
  box-shadow: 0 0 5px;
  transition: all ease-in-out 0.25s;
  cursor: pointer;

  &:hover ${CardInfo} {
    display: block;
    transition: transform 0.25s ease-out;
  }

  &:hover {
    box-shadow: 0 0 20px red;
    transition: transform 0.25s ease-out;
  }
`;

const NewsContainer = styled.div`
  display: flex;
  height: 60vh;
  max-height: 60vh;
  width: 100%;
  justify-content: space-around;
`;

const NewsDiv = styled.div`
  margin: 20px;
  border-radius: 5px;
  min-height: 200px;
  min-width: 200px;
  height: 90%;
  width: 30%;
  box-shadow: 0 0 5px;
  padding: 20px;
  /* overflow-y: auto; */
`;

const Dashboard = ({ history }) => {
  return (
    <PageDiv>
      <CardContainer>
        <CardDiv
          onClick={() => history.push("/app/machines")}
          style={{
            backgroundImage: `url(${machine})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <CardInfo>Oборудования</CardInfo>
        </CardDiv>
        <CardDiv
          onClick={() => history.push("/app/repair")}
          style={{
            backgroundImage: `url(${repair})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <CardInfo>Неисправные</CardInfo>
        </CardDiv>
        <CardDiv
          onClick={() => history.push("/app/shop")}
          style={{
            backgroundImage: `url(${shop})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <CardInfo>Магазин</CardInfo>
        </CardDiv>
      </CardContainer>
      <NewsContainer>
        <NewsDiv>
          <LifeLeft />
        </NewsDiv>
        <NewsDiv>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            Под Нагрузкой
          </div>
        </NewsDiv>
        <NewsDiv>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            мини окно для оповещений
          </div>
        </NewsDiv>
      </NewsContainer>
    </PageDiv>
  );
};

export default Dashboard;
