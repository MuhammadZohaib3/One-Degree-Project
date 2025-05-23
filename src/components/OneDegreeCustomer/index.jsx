import React, { useRef, useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import CardCustomer from "../CardCustomer";

function OneDegreeCustomer() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false); // Trigger re-render

  useEffect(() => {
    setSwiperReady(true); // Ensures refs are ready on second render
  }, []);

  const datas = [
    {
      id: 1,
      date: "May 03,2024",
      title: "Comfortable for Every Run",
      description:
        "The Evapor8 2.0 Black shoes are a game changer! The Breeze Technology and breathable mesh keep my feet cool, even on long runs. The EVA midsole and perforated footbed provide excellent support, and I love the secure fit with the redesigned pull tab. They’re lightweight and super comfortable, making them my go-to shoes for both running and casual wear. Stylish and functional – highly recommend!",
      name: "Shehroz k.",
    },
    {
      id: 2,
      date: "July 17,2024",
      title: "Perfect Gym Shoes",
      description:
        "The Evapor8 2.0 Black shoes are perfect for the gym! The breathable mesh keeps my feet cool during heavy workouts, and the EVA midsole provides great support for weightlifting and cardio. They fit securely and are super comfortable, making them a must-have for any gym-goer!",
      name: "Waqis T.",
    },
    {
      id: 3,
      date: "Oct 06,2024",
      title: "Excellent",
      description:"Excellent quality worth it.",
      name: "Mansoor H.",
    },
    {
      id: 4,
      date: "Apr 01,2024",
      title: "Stylish with a Bold Touch",
      description:"This Wallet is the perfect blend of elegance and style. The sleek black exterior is timeless, but the pop of red inside adds a bold, modern flair every time I open it. It’s compact, well-crafted, and fits all my essentials without being bulky. A great accessory to elevate my everyday look!",
      name: "Omair R.",
    },
    {
      id: 5,
      date: "June 06,2023",
      title: "Perfectly Chic Functional",
      description:"This black Hobo bag is a perfect blend of style and practicality. The quilted design gives it a modern, cozy feel, while the shape makes it super easy to carry. It's lightweight but has plenty of room for all my essentials. It pairs effortlessly with casual and chic outfits, making it my go-to daily bag. Love the simplicity and versatility!",
      name: "Maryra J.",
    },
    {
      id: 6,
      date: "Feb 02,2023",
      title: "Stylish Yet Rugged",
      description: "The Teresia Combat Boots with the blue sole are amazing! The leather looks classy, and the blue sole adds a fun pop of color. They’re not only stylish but also sturdy and comfortable, perfect for all-day wear. I’ve gotten so many compliments! Highly recommend if you want something both fashionable and functional.",
      name: "Hamna A.",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center font-sm">Happy Customer</h2>

      <div className="mt-5 flex items-center justify-center">
        <div
          ref={prevRef}
          className="cursor-pointer text-center  rounded-full h-10 w-10 p-2 flex items-center justify-center"
        >
          <BsChevronLeft className="text-black text-2xl" />
        </div>

        <div className="container">
          {swiperReady && (
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
              {datas.map(({ id, date, title, description, name }) => (
                <SwiperSlide key={id}>
                  <CardCustomer
                  className='ml-2'
                    date={date}
                    title={title}
                    description={description}
                    name={name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <div
          ref={nextRef}
          className="cursor-pointer text-center mx-2 rounded-full h-10 w-10 p-2 flex items-center justify-center"
        >
          <BsChevronRight className="text-black text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default OneDegreeCustomer;
