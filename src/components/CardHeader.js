import React from "react";
import LikeLogo from "../like.svg";
//components
import Line from "./Line";

const Card = () => {
  return (
    <React.Fragment>
      <div id="card-header">
        <div id="logo-border">
          <img
            id="card-logo"
            src="https://tcas-assets.skooldio.com/icons/edugroup/engineer.png"
          />
        </div>
        <div id="card-faculty">
          <p id="card-title">วิศวกรรมศาสตร์</p>
          <p id="card-subtitle">สาขา</p>
          <p id="card-subname">มหาลัย</p>
        </div>
        <div id="card-like">
          <img src={LikeLogo} id="img-like" />
        </div>
      </div>
      <Line />
    </React.Fragment>
  );
};

export default Card;
