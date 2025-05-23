import React from "react";
import "./index.css";
import { Card } from "antd";
const { Meta } = Card;
const CardSlider = ({
  src = "",
  title = "No Title",
  backgroundColor = "",
  price = "",
}) => (
  <Card
    hoverable
    style={{ width: 255, backgroundColor: "black" }}
    cover={
      <div style={{ overflow: "hidden" }}>
        <img
          src={src}
          alt={title}
          style={{
            width: "100%",
            height: 225,
            objectFit: "cover",
          }}
        />
      </div>
    }
  >
    <div className="card-detail">
      <div className="card-color-border" style={{ backgroundColor }}></div>
      <div className="custom-meta">
        <Meta title={title} />
      </div>
      <div className="card-price text-[1.03rem] font-[500] text-white">
        Rs {price}
      </div>
    </div>
  </Card>
);
export default CardSlider;
