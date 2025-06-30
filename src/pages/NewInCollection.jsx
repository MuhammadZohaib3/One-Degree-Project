import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import { MdNavigateNext } from "react-icons/md";
import TrendingSlider from "../components/TrendingSlider";
import CardMultiCollection from "../components/CardMultiCollection";
import OneDegreeCustomer from "../components/OneDegreeCustomer";
import SubscribeCard from "../components/SubscribeCard";
import Footer from "../components/Footer";
import srcb from "../../src/assets/images/baadmay-img.webp";
import menCollImg1 from "../../src/assets/images/men-img1.webp"
import menCollImg2 from "../../src/assets/images/men-img2.webp"
import menCollImg3 from "../../src/assets/images/men-img3.webp"
import menCollImg4 from "../../src/assets/images/men-img4.webp"
import menCollImg5 from "../../src/assets/images/men-img5.webp"
import menCollImg6 from "../../src/assets/images/men-img6.webp"
import menCollImg7 from "../../src/assets/images/men-img7.webp"
import menCollImg8 from "../../src/assets/images/men-img8.webp"
import menCollImg9 from "../../src/assets/images/men-img9.webp"
import menCollImg10 from "../../src/assets/images/men-img10.webp"
import menCollImg11 from "../../src/assets/images/men-img11.webp"
import menCollImg12 from "../../src/assets/images/men-img12.webp"
import menCollImg13 from "../../src/assets/images/men-img13.webp"
import menCollImg14 from "../../src/assets/images/men-img14.webp"
import menCollImg15 from "../../src/assets/images/men-img15.webp"
import menCollImg16 from "../../src/assets/images/men-img16.webp"
import menCollImg17 from "../../src/assets/images/men-img17.webp"
import newInImg18 from "../../src/assets/images/new-in-img18.webp"
import newInImg19 from "../../src/assets/images/new-in-img19.webp"
import newInImg20 from "../../src/assets/images/new-in-img20.webp"
import menCollImg21 from "../../src/assets/images/men-img21.webp"
import menCollImg22 from "../../src/assets/images/men-img22.webp"
import menCollImg23 from "../../src/assets/images/men-img23.webp"
import menCollImg24 from "../../src/assets/images/men-img24.webp"

function NewInCollection() {
  const data2 = [
    {
      id: 1,
      title: "Black Turbo Running Shoe",
      src: menCollImg1,
      backgroundColor: "black",
      price: "12,000.00",
      src2: srcb,
      price2: "4,600",
    },
    {
      id: 2,
      title: "Gray Turbo Running Shoe",
      src: menCollImg2,
      backgroundColor: "gray",
      price: "12,000.00",
      src2: srcb,
      price2: "4,600",
    },
    {
      id: 3,
      title: "Mint Turbo Running Shoe",
      src: menCollImg3,
      backgroundColor: "LightGreen",
      price: "12,000.00",
      src2: srcb,
      price2: "4,600",
    },
    {
      id: 4,
      title: "Navy Blast Running Shoe 2.0",
      src: menCollImg4,
      backgroundColor: "blue",
      price: "12,000.00",
      src2: srcb,
      price2: "4,600",
    },
    {
      id: 5,
      title: "White Blast Running Shoe 2.0",
      src: menCollImg5,
      backgroundColor: "white",
      price: "12,500.00",
      src2: srcb,
      price2: "4,600",
    },
    {
      id: 6,
      title: "Black Blast Running Shoe 2.0",
      src: menCollImg6,
      backgroundColor: "black",
      price: "12,000.00",
      src2: srcb,
      price2: "4,000",
    },
    {
      id: 7,
      title: "Black Blast Running Shoe 2.0",
      src: menCollImg7,
      backgroundColor: "black",
      price: "11,500.00",
      src2: srcb,
      price2: "4,900",
    },
    {
      id: 8,
      title: "Blue Blast Running Shoe 2.0 ",
      src: menCollImg8,
      backgroundColor: "blue",
      price: "11,999.00",
      src2: srcb,
      price2: "4,000",
    },
    {
      id: 9,
      title: "Mint Blast Running Shoe 1.0",
      src: menCollImg9,
      backgroundColor: "mint",
      price: "11,500.00",
      src2: srcb,
      price2: "4,900",
    },
    {
      id: 10,
      title: "Taupe Blast Running Shoe 1.0",
      src: menCollImg10,
      backgroundColor: "gray",
      price: "11,500.00",
      src2: srcb,
      price2: "4,900",
    },
    {
      id: 11,
      title: "Black Surge Running shoe",
      src: menCollImg11,
      backgroundColor: "black",
      price: "10,500.00",
      src2: srcb,
      price2: "4,150",
    },
    {
      id: 12,
      title: "Orange Surge Running shoe",
      src: menCollImg12,
      backgroundColor: "orange",
      price: "10,500.00",
      src2: srcb,
      price2: "4,600",
    },
    {
      id: 13,
      title: "Grey Surge Running shoe",
      src: menCollImg13,
      backgroundColor: "gray",
      price: "10,300.00",
      src2: srcb,
      price2: "4,791",
    },
    {
      id: 14,
      title: "Blue Surge Running shoe",
      src: menCollImg14,
      backgroundColor: "blue",
      price: "10,300.00",
      src2: srcb,
      price2: "4,791",
    },
    {
      id: 15,
      title: "Dark Brown Hike Boot",
      src: menCollImg15,
      backgroundColor: "brown",
      price: "12,500.00",
      src2: srcb,
      price2: "4,791",
    },
    {
      id: 16,
      title: "Black Hike Boot",
      src: menCollImg16,
      backgroundColor: "black",
      price: "16,000.00",
      src2: srcb,
      price2: "4,791",
    },
    {
      id: 17,
      title: "Olive Hike Boot",
      src: menCollImg17,
      backgroundColor: "yellow",
      price: "16,000.00",
      src2: srcb,
      price2: "4,791",
    },
    {
      id: 18,
      title: "White Orbit Everyday Sneaker 7.0",
      src:newInImg18,
      backgroundColor: "white",
      price: "14,000.00",
      src2: srcb,
      price2: "6,133",
    },
    {
      id: 19,
      title: "Black Orbit Everyday Sneaker 7.0",
      src: newInImg19,
      backgroundColor: "black",
      price: "14,000.00",
      src2: srcb,
      price2: "8,000",
    },
    {
      id: 20,
      title: "Navy Orbit Everyday Sneaker 7.0",
      src: newInImg20,
      backgroundColor: "blue",
      price: "14,000.00",
      src2: srcb,
      price2: "8,100",
    },
    {
      id: 21,
      title: "Boundless",
      src: menCollImg21,
       backgroundColor: "NavajoWhite",
      price: "1,500,00",
      src2: srcb,
      price2: "1,000",
    },
    {
      id: 22,
      title: "Power Play",
      src: menCollImg22,
       backgroundColor: "SeaGreen",
      price: "1,500.00",
      src2: srcb,
      price2: "1,150",
    },
    {
      id: 23,
      title: "Unstoppable ",
      src: menCollImg23,
      backgroundColor: "black",
      price: "1,500.00",
      src2: srcb,
      price2: "480",
    },
    {
      id: 24,
      title: "Black Wind Breaker",
      src: menCollImg24,
      backgroundColor: "black",
      price: "1,599.50",
      src2: srcb,
      price2: "1,000",
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
                to="/collection/all-men"
              >
                NEW IN
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="text-center my-5">
          <h1 className="italic font-bold">NEW IN</h1>
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
                  <CardMultiCollection
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

export default NewInCollection;
