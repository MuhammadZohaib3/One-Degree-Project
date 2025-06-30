import React from "react";
import { FaStar } from "react-icons/fa6";
import "./index.css"
import { Card } from "antd";
const { Meta } = Card;
;
function CardMultiCollection({
  title = "No Title",
  src = "",
  backgroundColor = "",
  price = "",
  src2 = "",
  price2 = ""
}) {
  return (
    <Card
      hoverable
      style={{ width: 300, backgroundColor: "black" }}
      cover={
        <div style={{ overflow: "hidden" }}>
          <img
            src={src}
            alt={title}
            style={{
              width: "100%",
              height: 300,
              objectFit: "cover",
            }}
          />
        </div>
      }
    >
      <div className="card-detail">
        <div className="card-color-border" style={{ backgroundColor }}></div>
        <div className="custom-meta font-normal not-italic">
          <Meta title={title} />
        </div>
        <div className="card-price text-[1.03rem] font-[500] text-white">
          Rs {price}
        </div>
        <div
          className="d-flex items-center mt-2  "
         
        >
          <FaStar  style={{ fill: "orange", fontSize: '19px' }}/>
          <FaStar  style={{ fill: "orange", fontSize: '19px' }}/>
          <FaStar  style={{ fill: "orange", fontSize: '19px' }}/>
          <FaStar  style={{ fill: "orange", fontSize: '19px' }}/>
          <FaStar  style={{ fill: "orange", fontSize: '19px' }}/>
          <span> (1) </span>
        </div>
        <div className="flex items-center">
          <img className="w-5" src={src2} alt="" />
        <p className="pt-3 pl-1">Pay only Rs.{price2} now</p></div>     
      </div>
    </Card>
  );
}
export default CardMultiCollection;
