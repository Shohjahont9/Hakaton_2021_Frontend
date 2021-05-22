import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Progress, DatePicker } from "antd";
import analyticsApi from "./../../services/analiticsService";

const ComponentDiv = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  overflow-y: auto;
  position: sticky;
`;
const Cover = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  /* margin-top: 60px; */
`;

const ComponentDetails = styled.div`
  height: 80px;
  width: 80%;
  margin: auto;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 0 3px;
  padding: 3px;
`;

const InsideMachine = ({ sawId }) => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const { data } = await analyticsApi.getMachineDetails("SAW" + sawId);
      setData(data.data);
    }
    fetchData();
  }, [] );

  return (
    <ComponentDiv>
      <div
        style={{
          height: "50px",
          width: "100%",
          position: "sticky",
          boxShadow: "0px  2px 5px",
          backgroundColor: "white",
          zIndex: 9000,
          borderRadius: 5,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <h2 style={{ marginTop: 7 }}>Детали</h2>
        <DatePicker
          size="small"
          style={{ height: 30, marginTop: 10 }}
          disabled
        />
      </div>
      <Cover>
        {data?.map((d) => (
          <ComponentDetails>
            <div>
              <div style={{ float: "left", marginBottom: 0, marginLeft: 10 }}>
                <h6 style={{ margin: 0, fontSize: 15 }}>
                  <strong>{d.type}</strong>
                </h6>
                <div style={{ display: "flex" }}>
                  <p style={{ float: "right", fontSize: 10 }}>
                    {d.remained_hours} / {d.life_time} (hours)
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
                  <p style={{ marginTop: 8, marginRight: 5, fontSize: 10 }}>
                    {d.articul}
                  </p>
                </strong>
                <Progress
                  type="circle"
                  percent={Math.floor(
                    ((d.life_time - d.remained_hours) * 100) / d.life_time
                  )}
                  width={38}
                  style={{ float: "right", marginRight: 2 }}
                />
              </div>
              <div>
                <Progress
                  size="small"
                  percent={Math.floor(
                    ((d.initial_details - d.remained_details) * 100) /
                      d.initial_details
                  )}
                  strokeWidth={4}
                  showInfo={false}
                  strokeColor="red"
                  style={{ margin: 0 }}
                />
                <p style={{ fontSize: 10, margin: "-6px 3px", float: "right" }}>
                  <strong>
                    {d.remained_details}/{d.initial_details} исп =
                    {Math.floor(
                      ((d.initial_details - d.remained_details) * 100) /
                        d.initial_details
                    )}
                    %
                  </strong>
                </p>
              </div>
            </div>
          </ComponentDetails>
        ))}
      </Cover>
    </ComponentDiv>
  );
};

export default InsideMachine;
