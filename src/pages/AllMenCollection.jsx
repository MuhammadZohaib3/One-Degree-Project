import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import { MdNavigateNext } from "react-icons/md";
import TrendingSlider from "../components/TrendingSlider";
import UpTo50PercentOffCard from "../components/UpTo50%OffCard";
import OneDegreeCustomer from "../components/OneDegreeCustomer";
import SubscribeCard from "../components/SubscribeCard";
import Footer from "../components/Footer";
import srcb from "../../src/assets/images/baadmay-img.webp";
import womenCollImg1 from "../../src/assets/images/women-img-1.webp";
import womenCollImg2 from "../../src/assets/images/women-img-2.webp";
import womenCollImg3 from "../../src/assets/images/women-img-3.webp";
import womenCollImg4 from "../../src/assets/images/women-img-4.webp";
import womenCollImg5 from "../../src/assets/images/women-img-5.webp";
import womenCollImg6 from "../../src/assets/images/women-img-6.webp";
import womenCollImg7 from "../../src/assets/images/women-img-7.webp";
import womenCollImg8 from "../../src/assets/images/women-img-8.webp";
import womenCollImg9 from "../../src/assets/images/women-img-9.webp";
import womenCollImg10 from "../../src/assets/images/women-img-10.webp";
import womenCollImg11 from "../../src/assets/images/women-img-11.webp";
import womenCollImg12 from "../../src/assets/images/women-img-12.webp";
import womenCollImg13 from "../../src/assets/images/women-img-13.webp";
import womenCollImg14 from "../../src/assets/images/women-img-14.webp";
import womenCollImg15 from "../../src/assets/images/women-img-15.webp";
import womenCollImg16 from "../../src/assets/images/women-img-16.webp";
import womenCollImg17 from "../../src/assets/images/women-img-17.webp";
import womenCollImg18 from "../../src/assets/images/women-img-18.webp";
import womenCollImg19 from "../../src/assets/images/women-img-19.webp";
import womenCollImg20 from "../../src/assets/images/women-img-20.webp";
import womenCollImg21 from "../../src/assets/images/women-img-21.webp";
import womenCollImg22 from "../../src/assets/images/women-img-22.webp";
import womenCollImg23 from "../../src/assets/images/women-img-23.webp";
import womenCollImg24 from "../../src/assets/images/women-img-24.webp";

function AllMenCollection() {
  const data2 = [
    {
      id: 1,
      title: "EVAPOR8 Running Shoe 2.0 Sea Green",
      src: womenCollImg1,
      backgroundColor: "green",
      price: "12,000.00",
      src2: srcb,
      price2: "4,600",
    },
    {
      id: 2,
      title: "EVAPOR8 Running Shoe 2.0 Gray",
      src: womenCollImg2,
      backgroundColor: "gray",
      price: "12,000.00",
      src2: srcb,
      price2: "4,600",
    },
    {
      id: 3,
      title: "EVAPOR8 Running Shoe 2.0 White",
      src: womenCollImg3,
      backgroundColor: "White",
      price: "12,000.00",
      src2: srcb,
      price2: "4,600",
    },
    {
      id: 4,
      title: "EVAPOR8 Running Shoe 2.0 Black",
      src: womenCollImg4,
      backgroundColor: "black",
      price: "12,000.00",
      src2: srcb,
      price2: "4,600",
    },
    {
      id: 5,
      title: "Pink Evolve Everyday Trainer GT-26025W",
      src: womenCollImg5,
      backgroundColor: "pink",
      price: "10,500.00",
      src2: srcb,
      price2: "4,000",
    },
    {
      id: 6,
      title: "White Evolve Everyday Trainer GT-26025W",
      src: womenCollImg6,
      backgroundColor: "white",
      price: "10,500.00",
      src2: srcb,
      price2: "4,000",
    },
    {
      id: 7,
      title: "Black & Golden Air Flex Slides ",
      src: womenCollImg7,
      backgroundColor: "gray",
      price: "4,999.00",
      src2: srcb,
      price2: "1,916",
    },
    {
      id: 8,
      title: "White & Gray Air Flex Slides ",
      src: womenCollImg8,
      backgroundColor: "gray",
      price: "4,999.00",
      src2: srcb,
      price2: "1,916",
    },
    {
      id: 9,
      title: "Mauve & White Air Flex Slides",
      src: womenCollImg9,
      backgroundColor: "blue",
      price: "4,999.00",
      src2: srcb,
      price2: "1,916",
    },
    {
      id: 10,
      title: "Pink & White Air Flex Slides",
      src: womenCollImg10,
      backgroundColor: "pink",
      price: "4,999.00",
      src2: srcb,
      price2: "1,916",
    },
    {
      id: 11,
      title: "Yellow Slides",
      src: womenCollImg11,
      backgroundColor: "yellow",
      price: "3,000.00",
      src2: srcb,
      price2: "1,150",
    },
    {
      id: 12,
      title: "Black Zalmi Slides",
      src: womenCollImg12,
      backgroundColor: "black",
      price: "5,800.00",
      src2: srcb,
      price2: "730",
    },
    {
      id: 13,
      title: "Black Padel Beg 2.0",
      src: womenCollImg13,
      backgroundColor: "black",
      price: "12,300.00",
      src2: srcb,
      price2: "4,791",
    },
    {
      id: 14,
      title: "Black & Blue Padel Beg 2.0",
      src: womenCollImg14,
      backgroundColor: "gray",
      price: "12,300.00",
      src2: srcb,
      price2: "4,791",
    },
    {
      id: 15,
      title: "Black & Red Padel Beg 2.0",
      src: womenCollImg15,
      backgroundColor: "black",
      price: "12,500.00",
      src2: srcb,
      price2: "4,791",
    },
    {
      id: 16,
      title: "Black Pro Padel Beg 2.0",
      src: womenCollImg16,
      backgroundColor: "black",
      price: "16,000.00",
      src2: srcb,
      price2: "4,791",
    },
    {
      id: 17,
      title: "Black & White Padel Beg",
      src: womenCollImg17,
      backgroundColor: "black",
      price: "16,000.00",
      src2: srcb,
      price2: "4,791",
    },
    {
      id: 18,
      title: "Orange Pro Padel Beg ",
      src: womenCollImg18,
      backgroundColor: "orange",
      price: "16,000.00",
      src2: srcb,
      price2: "6,133",
    },
    {
      id: 19,
      title: "Navy Padel Racket Cover",
      src: womenCollImg19,
      backgroundColor: "blue",
      price: "3,000.00",
      src2: srcb,
      price2: "4,000",
    },
    {
      id: 20,
      title: "Light Gray Padel Racket Cover",
      src: womenCollImg20,
      backgroundColor: "Gray",
      price: "3,000.00",
      src2: srcb,
      price2: "4,100",
    },
    {
      id: 21,
      title: "Off White Padel Racket Cover",
      src: womenCollImg21,
      backgroundColor: "white",
      price: "3,000,00",
      src2: srcb,
      price2: "2,000",
    },
    {
      id: 22,
      title: "Maroon Padel Rocket Cover",
      src: womenCollImg22,
      backgroundColor: "red",
      price: "3,000.00",
      src2: srcb,
      price2: "1,150",
    },
    {
      id: 23,
      title: "Grey Pedal Bag ",
      src: womenCollImg23,
      backgroundColor: "grey",
      price: "10,000.00",
      src2: srcb,
      price2: "480",
    },
    {
      id: 24,
      title: "Pack of Two Black and grey Sleeveless Vest",
      src: womenCollImg24,
      backgroundColor: "grey",
      price: "1,099.50",
      src2: srcb,
      price2: "480",
    }
  ];
  return (
    <>
      <Nav />
      <div className="bg-black">
        <div className="p-3">
          <ul className="flex items-center gap-1 text-sm text-white outline-none">
            <li>
              <NavLink className=" text-white no-underline" to="/">
                Home
              </NavLink>
            </li>
            <li className="text-xl">
              <MdNavigateNext />
            </li>
            <li>
              <NavLink
                className=" text-white no-underline"
                to="/collection/all-women"
              >
                All Women
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="text-center my-5">
          <h1 className="italic font-bold">All Women</h1>
        </div>
        <div className="flex justify-between items-center mx-5">
          <div>
            <p className="italic font-bold mt-3">50 PRODUCTS</p>{" "}
          </div>
          <div className="w-48">
            <select
              className="form-select bg-black text-white"
              aria-label="Default select example"
              defaultValue="featured"
            >
              <option value="featured">Featured</option>
              <option value={1}>Best Selling</option>
              <option value={2}>Alphabetically, A-Z</option>
              <option value={3}>Alphabetically, Z-A</option>
              <option value={3}>Price, low to high</option>
              <option value={3}>Price, high to low</option>
              <option value={3}>Date, old to new</option>
              <option value={3}>Date, new to old</option>
            </select>
          </div>
        </div>
        <div className="bg-black mt-4  ">
          <div className="mx-12">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {data2.map(
                ({ id, src, title, backgroundColor, price, src2, price2 }) => (
                  <UpTo50PercentOffCard
                    key={id}
                    src={src}
                    title={title}
                    backgroundColor={backgroundColor}
                    price={price}
                    src2={src2}
                    price2={price2}
                  />
                )
              )}
            </div>
          </div>
        </div>
        <TrendingSlider />
        <OneDegreeCustomer />
        <SubscribeCard />
        <Footer />
      </div>
    </>
  );
}

export default AllMenCollection;
