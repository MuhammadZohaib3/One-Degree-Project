import React from "react";
import "./index.css";
import { Card } from "antd";
const { Meta } = Card;
import { RatingGroup } from "@chakra-ui/react";

export default function UpTo50PercentOffCard({
  title = "No Title",
  src = "",
  backgroundColor = "",
  price = "",
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
        <div className="custom-meta">
          <Meta title={title} />
        </div>
        <div className="card-price text-[1.03rem] font-[500] text-white">
          Rs {price}
        </div>
        <div className="">
          <RatingGroup.Root count={5} defaultValue={3} size="sm">
            <RatingGroup.HiddenInput />
            <RatingGroup.Control />
          </RatingGroup.Root>
        </div>
      </div>
    </Card>
  );
}
