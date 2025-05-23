import React from "react";
import img from "../../assets/images/OneDegreeCard2img.jpg";

function OneDegreeCard2() {
  return (
    <>
      <div className="container mt-16 mb-16 ">
        <div className="row ">
          <div className="md:grid md: grid-cols-2 ">
            <div className="flex flex-col justify-center h-full overflow-hidden">
              <div className="h-full w-full object-cover">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-center h-full bg-zinc-950 overflow-hidden p-16 md:18 lg:10 xl:30  mx-auto">
              <h2 className=" bg-zinc-950 ">Run Strong. Rise Higher.</h2>
              <div className=" bg-zinc-950 ">
                <p className=" bg-zinc-950 ">
                  Every step counts. Every stride pushes limits. One Degree
                  apparel and footwear—built for those who never stop moving.
                </p>
              </div>
              <div className=" bg-zinc-950 ">
                <a className="text-white  bg-zinc-950 " href="">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden whitespace-nowrap bg-black h-28">
        <div className="flex animate-marquee w-[200%] hover:animate-none " >
          <span className="flex text-white text-5xl font-bold italic gap-10 w-full">
            One Degree – Performance in Every Move.&nbsp; One Degree –
            Performance in Every Move.&nbsp;
          </span>
          <span className="flex text-white text-5xl font-bold italic gap-10 w-full">
            One Degree – Performance in Every Move.&nbsp; One Degree –
            Performance in Every Move.&nbsp;
          </span>
        </div>
      </div>
    </>
  );
}

export default OneDegreeCard2;
