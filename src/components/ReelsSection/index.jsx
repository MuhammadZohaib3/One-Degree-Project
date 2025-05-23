import React from "react";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";
import video5 from "../../assets/video5.mp4";

function ReelsSection() {
  return (
    <div className="mt-5"> 
        <h2 className="text-center mt-20">SHOP WITH US</h2>
        <div className="flex justify-evenly mb-4 mt-5">
          <div>
            <video width="250" autoPlay loop muted playsInline>
              <source src={video1} />
            </video>
          </div>
          <div>
            <video width="250" autoPlay loop muted playsInline>
              <source src={video2} />
            </video>
          </div>
          <div>
            <video width="250" autoPlay loop muted playsInline>
              <source src={video3} />
            </video>
          </div>
          <div>
            <video width="250" autoPlay loop muted playsInline>
              <source src={video4} />
            </video>
          </div>
          <div>
            <video width="250" autoPlay loop muted playsInline>
              <source src={video5} />
            </video>
          </div>
        </div>
        <h6 className="text-center">@ONEDEGREE.OFFICIAL</h6>
    </div>
  );
}

export default ReelsSection;
