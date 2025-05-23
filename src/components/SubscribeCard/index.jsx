import React from "react";
import "./index.css";
import { CiMail } from "react-icons/ci";

function SubscribeCard() {
  return (
    <div className="mt-5 h-[300px] bg-white">
      <div className="subscribe-img h-[300px] bg-cover bg-center ">
        <div className="">
          <div className="bg-gray-400 h-[290px] max-w-[550px] m-8">
            <div className="container mx-3  ">
              <CiMail className="text-5xl mt-8"/>
              <p className="text-5xl font-bold italic mt-2">MOVE FORWARD!</p>
              <p className="text-5xl font-bold italic mt-2">SUBSCRIBE NOW!</p>
              <div className=" d-flex items-center mt-4">
                <input className="bg-black p-2 w-80 ml-4 " type="gmail" placeholder="Your Email" />
                <button type="button" class="btn btn-secondary ml-4 ">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeCard;
