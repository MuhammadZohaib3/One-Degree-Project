import React, { useRef } from "react";
import img1 from "../../assets/images/shirt1.webp";
import img2 from "../../assets/images/shirt2.webp";
import img3 from "../../assets/images/shirt3.webp";
import img4 from "../../assets/images/shirt4.webp";
import img5 from "../../assets/images/shirt5.webp";
import img6 from "../../assets/images/shirts6.webp";
import img7 from "../../assets/images/shirts7.webp";
import img8 from "../../assets/images/shirts8.webp";
import img9 from "../../assets/images/shirts9.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import CardSlider from "../CardSlider";

function TrendingSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const data = [
    {
      id: 1,
      title: "Black CoreFlex Tee",
      src: img1,
      backgroundColor: "black",
      price: "2000.00",
    },
    {
      id: 2,
      title: "Blue Performance polo",
      src: img2,
      backgroundColor: "#000080",
      price: "3000.00",
    },
    {
      id: 3,
      title: "Black Performance polo",
      src: img3,
      backgroundColor: "black",
      price: "2000.00",
    },
    {
      id: 4,
      title: "Brown CoreFlex Tee",
      src: img4,
      backgroundColor: "brown",
      price: "1500.00",
    },
    {
      id: 5,
      title: "Grey CoreFlex Tee",
      src: img5,
      backgroundColor: "grey",
      price: "2000.00",
    },
    {
      id: 6,
      title: "Black Movement Tee",
      src: img6,
      backgroundColor: "black",
      price: "4000.00",
    },
    {
      id: 7,
      title: "Navy Movement Tee",
      src: img7,
      backgroundColor: "#000080",
      price: "2000.00",
    },
    {
      id: 8,
      title: "Black Movement Long Sleeve Tee",
      src: img8,
      backgroundColor: "black",
      price: "4000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src: img9,
      backgroundColor: "grey",
      price: "3000.00",
    },
  ];

  return (
    <div className=" bg-black ">
      <div className="mx-5 pt-14 ">
        <div style={{ display: "flex", justifyContent: "space-between" }} >
          <h2 className=" font-sm">The Essentials of Every Athlete</h2>
          <div>
            <button
              ref={prevRef}
              className="bg-gray-700 px-4 py-2 mx-2 text-white rounded hover:bg-gray-600"
            >
              ← Prev
            </button>
            <button
              ref={nextRef}a
              className="bg-gray-700 px-4 py-2 text-white rounded hover:bg-gray-600"
            >
              Next →
            </button>
          </div>
        </div>
        <div className="mt-3 mb-8">
          <Swiper
            modules={[FreeMode, Navigation]}
            slidesPerView={4}
            spaceBetween={30}
            grabCursor={true}
            freeMode={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="mySwiper"
          >
            {data.map(({ id, src, title, backgroundColor, price }) => (
              <SwiperSlide key={id}>
                <CardSlider
                  src={src}
                  title={title}
                  backgroundColor={backgroundColor}
                  price={price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TrendingSlider;
