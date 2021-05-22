import React from "react";
import styled from "styled-components";
import machine from "../../images/MachineDetail.jpg";
import InsideMachine from "./InsideMachine";

const PageDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const TopDiv = styled.div`
  display: flex;
  height: 45%;
  width: 100%;
`;

const BottomDiv = styled.div`
  display: flex;
  width: 100%;
  height: 55%;
`;

const DescriptionDiv = styled.div`
  width: 25%;
  height: 100%;
`;

const Description = styled.div`
  border-radius: 5px;
  margin: 20px;
  min-height: 200px;
  min-width: 200px;
  height: 90%;
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

const MachineDetails = (props) => {
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
          <Description></Description>
        </InsideDiv>
      </TopDiv>
      <BottomDiv>
        <GraphMini>
          <Description>
            <InsideMachine />
          </Description>
        </GraphMini>
        <GraphMax>
          <Description></Description>
        </GraphMax>
        <GraphMini>
          <Description></Description>
        </GraphMini>
      </BottomDiv>
    </PageDiv>
  );
};

export default MachineDetails;
