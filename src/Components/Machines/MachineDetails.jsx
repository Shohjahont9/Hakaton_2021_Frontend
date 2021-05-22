import React, { useState, useEffect } from "react";
import styled from "styled-components";
import machine from "../../images/MachineDetail.jpg";
import InsideMachine from "./InsideMachine";
import CustomBarChart from "./atoms/BarChart";
import CustomLineChart from "./atoms/LineChart";
import CustomPieChart from "./atoms/PieChart";
import chartService from "../../services/chartService";

const PageDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const TopDiv = styled.div`
  display: flex;
  height: 47vh;
  width: 100%;
`;

const BottomDiv = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;
`;

const DescriptionDiv = styled.div`
  width: 25%;
  height: 100%;
`;

const Description = styled.div`
  border-radius: 15px;
  margin: 10px;
  min-height: 200px;
  min-width: 200px;
  height: 80%;
  box-shadow: 0 0 5px;
  position: relative;
`;

const InsideDiv = styled.div`
  width: 75%;
  height: 100%;
`;

const GraphMini = styled.div`
  height: 100%;
  width: 25%;
`;

const GraphMax = styled.div`
  height: 100%;
  width: 50%;
`;

const Info = styled.div`
  height: 60%;
  width: 100%;
  background-color: #00000054;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  bottom: 0;
  color: white;
  overflow-y: auto;
`;

const MachineDetails = ({ match }) => {
  const [lineChartData, setLineChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    getChartsData();
    setTimeout(() => {
      let newBarChartData = [
        {
          name: "data1",
          type: "bar",

          data: [10, 52, 200, 334, 390, 330, 220],
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "data2",
          type: "bar",

          data: [0, 40, 150, 334, 390, 330, 220],
          emphasis: {
            focus: "series",
          },
        },
      ];

      let newPieChartData = [
        { value: 1048, name: "data1" },
        { value: 735, name: "data2" },
        { value: 580, name: "data3" },
        { value: 484, name: "data4" },
        { value: 300, name: "data5" },
      ];

      setBarChartData(newBarChartData);
      setPieChartData(newPieChartData);
    }, 1000);
  }, []);

  const getChartsData = async () => {
    let { data } = await chartService.getChartData();
    if (data.status === 200) {
      setLineChartData(data.data);
    }
  };
  return (
    <PageDiv>
      <TopDiv>
        <DescriptionDiv>
          <Description
            style={{
              backgroundImage: `url(${machine})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Info>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos error, sed laborum deleniti dolorum neque a iure
              assumenda itaque odit quo non quis iusto, eligendi saepe,
              consequuntur ea voluptatem! Dolore?
            </Info>
          </Description>
        </DescriptionDiv>
        <InsideDiv>
          <Description>
            <CustomLineChart data={lineChartData} />
          </Description>
        </InsideDiv>
      </TopDiv>
      <BottomDiv>
        <GraphMini>
          <Description>
            <InsideMachine sawId={match.params.id} />
          </Description>
        </GraphMini>
        <GraphMax>
          <Description>
            <CustomBarChart data={barChartData} />
          </Description>
        </GraphMax>
        <GraphMini>
          <Description>
            <CustomPieChart data={pieChartData} />
          </Description>
        </GraphMini>
      </BottomDiv>
    </PageDiv>
  );
};

export default MachineDetails;
