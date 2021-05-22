import React from "react";
import img from "../../images/272.jpg";

const Shop = () => {
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
        Here will be represented data related to the previous Machines and
        details suggesting the best combinations of products that will be
        benifitial
      </h1>{" "}
    </div>
  );
};

export default Shop;
