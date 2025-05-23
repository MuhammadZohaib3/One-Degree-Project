import React from "react";
import "./index.css";
import { Card } from "antd";
const { Meta } = Card;
const Cards = ({ src = "", title = "No Title" }) => (
  <Card
    hoverable
    style={{
      width: 290,
      margin: 10,
      backgroundColor: "#000000",
      color: "#ffffff",
    }}
    
    cover={
      <div style={{ height: 347, overflow: 'hidden' }}>
      <img
        src={src}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
    }
      >
        <Meta className="custom-meta" title={title} />
  </Card>
);
export default Cards;
