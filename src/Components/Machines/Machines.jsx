import React, { useState } from "react";
import styled from "styled-components";
import { Card, Button } from "antd";
import { toast } from "react-toastify";
import img from "../../images/back.png";

const PageDiv = styled.div`
  height: 50%;
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
  const [machinesCount, setMachinesCount] = useState([1, 2, 3, 4, 5]);
  return (
    <PageDiv>
      <CardsDiv>
        {machinesCount.map((d) => {
          return (
            <Card
              onClick={() => {
                if (d <= 3) history.push(`/app/machine/${d}`);
                else toast.info("Нет данных по данному оборудованию");
              }}
              style={{ margin: 7, width: " 17%", cursor: "pointer" }}
              cover={<img alt="example" src={img} />}
            >
              <Card.Meta title="Title" description="This is the description" />
            </Card>
          );
        })}
      </CardsDiv>
      <Button.Group style={{ position: "absolute", bottom: 10, right: 10 }}>
        <Button onClick={() => toast.info("will be available soon")}>
          Download Data in .csv
        </Button>
        <Button onClick={() => toast.info("will be available soon")}>
          Download Data in .xlx
        </Button>
      </Button.Group>
    </PageDiv>
  );
};

export default Machines;
