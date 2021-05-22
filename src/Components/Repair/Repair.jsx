import React from "react";
import img from "../../images/272.jpg";

const Repair = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1>
        We Would show here details that will need to be repaired with
        suggestions of optimal oprin with the respect of quality and price
      </h1>
    </div>
  );
};

export default Repair;
