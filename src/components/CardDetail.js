import React from "react";
import Medal from "../medal.svg";
//components
import Line from "./Line";
const CardDetail = () => {
  return (
    <React.Fragment>
      <div className="card-detail">
        <div id="detail-header">
          <p className="detail-text">รอบที่เปิด</p>
          <p className="round round-on">1</p>
          <p className="round round-off">2</p>
          <p className="round round-on">3</p>
          <p className="round round-off">4</p>
          <p className="round round-on">5</p>
        </div>
        <div id="detail-score">
          <p>รอบที่ 4 : Admission</p>
          <div className="edit-score-btn">
            <p>แก้ไขคะแนน</p>
          </div>
        </div>
        <div id="detail-your-score">
          <img src={Medal} id="medal" />
          <div className="your-score" id="your-score">
            <p>คะแนนของคุณคือ</p>
            <p>23,453</p>
          </div>
        </div>
        <div id="detail-dashboard">
          <div className="your-score" id="bottom-60">
            <p>23,453</p>
            <p>คะแนนต่ำสุด 60</p>
          </div>
          <div className="your-score" id="avg-score">
            <p>23,453</p>
            <p>คะแนนเฉลี่ย</p>
          </div>
          <div className="your-score" id="top-60">
            <p>23,453</p>
            <p>คะแนนสูงสุด 60</p>
          </div>
        </div>
      </div>
      <Line />
    </React.Fragment>
  );
};

export default CardDetail;
