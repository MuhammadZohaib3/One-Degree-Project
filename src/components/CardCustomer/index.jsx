import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
function CardCustomer({ date = "", title = "", description = "", name = "" }) {
  const wordLimit = 20;
  const words = description.split(" ");
  const trimmedDescription = words.length > wordLimit 
    ? words.slice(0, wordLimit).join(" ") + "..." 
    : description;

  return (
    <>
      <div className="card overflow-hidden" style={{ width: "15rem", height: "18rem", marginBottom: "2rem" }}>
        <div className="card-body bg-gray-500">
          <div className="d-flex items-center mt-2 bg-gray-500">
            <FaStar className="bg-gray-500" style={{ fill: "orange", fontSize: "16px"}} />
            <FaStar className="bg-gray-500" style={{ fill: "orange", fontSize: "16px"}} />
            <FaStar className="bg-gray-500" style={{ fill: "orange", fontSize: "16px"}} />
            <FaStar className="bg-gray-500" style={{ fill: "orange", fontSize: "16px"}} />
            <FaStar className="bg-gray-500" style={{ fill: "orange", fontSize: "16px"}} />
            <span className="bg-gray-500 ml-10 text-sm">{date}</span>
          </div>
          <div className="mt-3">
            <h6 className="bg-gray-500">{title}</h6>
          </div>

          <p className="card-text mt-4 bg-gray-500">
            {trimmedDescription}
          </p>
        <div className="d-flex items-center bg-gray-500">
          <h4 className="text-sm bg-gray-500 text-black">{name}</h4>
          <FaCircleCheck className="ml-1 bg-gray-500 text-sm mb-2" style={{ fill: "orange", color:"white" }}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCustomer;
