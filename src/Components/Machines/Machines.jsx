import React, { useState } from "react";
import styled from "styled-components";
import { Card, Avatar } from "antd";

const PageDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const CardsDiv = styled.div`
  justify-content: space-around;
  width: 100%;
  height: 9 0%;
  margin: 1%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
`;

const Machines = ({ history }) => {
  const [machinesCount, setMachinesCount] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
  ]);
  return (
    <PageDiv>
      <CardsDiv>
        {machinesCount.map((d) => {
          return (
            <Card
              onClick={() => history.push(`/app/machine/${d}`)}
              style={{ margin: 7, width: " 17%", cursor: "pointer" }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Card.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Title"
                description="This is the description"
              />
            </Card>
          );
        })}
      </CardsDiv>
    </PageDiv>
  );
};

export default Machines;
