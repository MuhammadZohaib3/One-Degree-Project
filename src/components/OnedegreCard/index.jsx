import React from "react";
import img from "../../assets/images/OneDegreeCardImg.webp";

function OneedegreCard() {
  return (
    <div className="container mt-16   ">
      <div className="row ">
        <div className="md:grid md: grid-cols-2 ">
          <div className="flex flex-col justify-center h-full overflow-hidden">
            <div className="h-full w-full object-cover">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="flex flex-col justify-center h-full bg-zinc-950 overflow-hidden p-16 md:18 lg:10 xl:30  mx-auto">
            <h2 className=" bg-zinc-950 ">Evapor8 2.0 – Stay Cool, Move Fast</h2>
            <div className=" bg-zinc-950 ">
              <p className=" bg-zinc-950 ">
                Engineered for peak breathability and all-day comfort, Evapor8
                2.0 keeps you light on your feet with its ultra-breathable
                design and dynamic support.
              </p>
            </div>
            <div className=" bg-zinc-950 ">
              <a className="text-white  bg-zinc-950 " href="">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default OneedegreCard;
