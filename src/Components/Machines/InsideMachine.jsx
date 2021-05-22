import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Progress } from "antd";
import analyticsApi from "./../../services/analiticsService";

const ComponentDiv = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  overflow-y: auto;
`;
const Cover = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
`;

const ComponentDetails = styled.div`
  height: 80px;
  width: 80%;
  margin: auto;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 0 3px;
  padding: 5px;
`;

const InsideMachine = () => {
  return (
    <ComponentDiv>
      <h2 style={{ position: "sticky" }}>Detailed overview</h2>
      <Cover>
        <ComponentDetails>
          <div>
            <div style={{ float: "left", marginBottom: 10, marginLeft: 10 }}>
              <h6 style={{ margin: 0, fontSize: 15 }}>
                <strong>d.type</strong>
              </h6>
              <div style={{ display: "flex" }}>
                <p style={{ float: "right", fontSize: 10 }}>
                  165 / 5465 (hours)
                </p>
              </div>
            </div>
            <div
              style={{
                float: "right",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <strong>
                <p style={{ marginTop: 8, marginRight: 20 }}>d.articul</p>
              </strong>
              <Progress
                type="circle"
                percent={10}
                // {Math.floor(
                //   ((d.life_time - d.remained) * 100) / d.life_time
                // )}
                width={38}
                style={{ float: "right", marginRight: 2 }}
              />
            </div>
            <Progress
              size="small"
              percent={10}
              // {Math.floor(
              //   ((d.life_time - d.remained) * 100) / d.life_time
              // )}
              strokeWidth={2}
              showInfo={false}
              style={{ marginBottom: 12 }}
            />
          </div>
        </ComponentDetails>
      </Cover>
    </ComponentDiv>
  );
};

export default InsideMachine;
