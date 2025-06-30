import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import { MdNavigateNext } from "react-icons/md";
import TrendingSlider from "../components/TrendingSlider";
import CardMultiCollection from "../components/CardMultiCollection";
import OneDegreeCustomer from '../components/OneDegreeCustomer';
import SubscribeCard from '../components/SubscribeCard';
import Footer from '../components/Footer';
import srcb from "../../src/assets/images/baadmay-img.webp";
import saleimg1 from "../../src/assets/images/sale-img1.webp";
import saleimg2 from "../../src/assets/images/sale-img2.webp";
import saleimg3 from "../../src/assets/images/sale-img3.webp";
import saleimg4 from "../../src/assets/images/sale-img4.webp";
import saleimg5 from "../../src/assets/images/sale-img5.webp";
import saleimg6 from "../../src/assets/images/sale-img6.webp";
import saleimg7 from "../../src/assets/images/sale-img7.webp";
import saleimg8 from "../../src/assets/images/sale-img8.webp";
import saleimg9 from "../../src/assets/images/sale-img9.webp";
import saleimg10 from "../../src/assets/images/sale-img10.webp";
import saleimg11 from "../../src/assets/images/sale-img11.webp";
import saleimg12 from "../../src/assets/images/sale-img12.webp";
import saleimg13 from "../../src/assets/images/sale-img13.webp";
import saleimg14 from "../../src/assets/images/sale-img14.webp";
import saleimg15 from "../../src/assets/images/sale-img15.webp";
import saleimg16 from "../../src/assets/images/sale-img16.webp";
import saleimg17 from "../../src/assets/images/sale-img17.webp";
import saleimg18 from "../../src/assets/images/sale-img18.webp";
import saleimg19 from "../../src/assets/images/sale-img19.webp";
import saleimg20 from "../../src/assets/images/sale-img20.webp";
import saleimg21 from "../../src/assets/images/sale-img21.webp";
import saleimg22 from "../../src/assets/images/sale-img22.webp";
import saleimg23 from "../../src/assets/images/sale-img23.webp";
import saleimg24 from "../../src/assets/images/sale-img24.webp";
import saleimg25 from "../../src/assets/images/sale-img25.webp";
import saleimg26 from "../../src/assets/images/sale-img26.webp";
import saleimg27 from "../../src/assets/images/sale-img27.webp";

function UpTo50PersonOffCard() {
  const data2 = [
    {
      id: 1,
      title: "Black & White Amplitude HT Everyday Trainers",
      src: saleimg1,
      backgroundColor: "black",
      price: "5,600.00",
      src2: srcb,
      price2: "2,300",
    },
    {
      id: 2,
      title: "Dark Grey Amplitude HT Everyday Trainers",
      src: saleimg2,
      backgroundColor: "gray",
      price: "5,600.00",
      src2: srcb,
      price2: "1,200",
    },
    {
      id: 3,
      title: "Sea Green Amplitude HT Everyday Trainers",
      src: saleimg3,
      backgroundColor: "black",
      price: "5,600.00",
      src2: srcb,
      price2: "1,000",
    },
    {
      id: 4,
      title: "Oat Beige Amplitude Lowease Everyday Trainers",
      src: saleimg4,
      backgroundColor: "brown",
      price: "5,250.00",
      src2: srcb,
      price2: "3,000",
    },
    {
      id: 5,
      title: "Blue Amplitude Lowease Everyday Trainers",
      src: saleimg5,
      backgroundColor: "blue",
      price: "5,250.00",
      src2: srcb,
      price2: "3,000",
    },
    {
      id: 6,
      title: "Dark Grey Amplitude Lowease Everyday Trainers",
      src: saleimg6,
      backgroundColor: "gray",
      price: "5,250.00",
      src2: srcb,
      price2: "2,235",
    },
    {
      id: 7,
      title: "Dark Grey Amplitude'21 Everyday Trainers",
      src: saleimg7,
      backgroundColor: "gray",
      price: "4,410.00",
      src2: srcb,
      price2: "2,223",
    },
    {
      id: 8,
      title: "White Stride X Everyday",
      src: saleimg8,
      backgroundColor: "white",
      price: "4,410.00",
      src2: srcb,
      price2: "2,223",
    },
    {
      id: 9,
      title: "Navy Orbit Everyday Sneaker 3.0",
      src: saleimg9,
      backgroundColor: "blue",
      price: "8,750.00",
      src2: srcb,
      price2: "2,223",
    },
    {
      id: 10,
      title: "White & Grey AEOLUS Motion Shoe 1.0",
      src: saleimg10,
      backgroundColor: "gray",
      price: "7,350.00",
      src2: srcb,
      price2: "2,223",
    },
    {
      id: 11,
      title: "Bolt Black Slide",
      src: saleimg11,
      backgroundColor: "black",
      price: "5,800.00",
      src2: srcb,
      price2: "740",
    },
    {
      id: 12,
      title: "Bolt White Slide",
      src: saleimg12,
      backgroundColor: "white",
      price: "5,800.00",
      src2: srcb,
      price2: "730",
    },
    {
      id: 13,
      title: "Bolt Navy Slide",
      src: saleimg13,
      backgroundColor: "blue",
      price: "5,800.00",
      src2: srcb,
      price2: "956",
    },
    {
      id: 14,
      title: "Black Zalmi Slides",
      src: saleimg14,
      backgroundColor: "black",
      price: "2,000.00",
      src2: srcb,
      price2: "766",
    },
    {
      id: 15,
      title: "Yellow DayPack",
      src: saleimg15,
      backgroundColor: "yellow",
      price: "1,999.50",
      src2: srcb,
      price2: "766",
    },
    {
      id: 16,
      title: "Hobo Black Bag",
      src: saleimg16,
      backgroundColor: "black",
      price: "2,495.00",
      src2: srcb,
      price2: "558",
    },
    {
      id: 17,
      title: "Hobo Purple Bag",
      src: saleimg17,
      backgroundColor: "purple",
      price: "2,495.00",
      src2: srcb,
      price2: "558",
    },
    {
      id: 18,
      title: "Hobo Pink Bag",
      src: saleimg18,
      backgroundColor: "pink",
      price: "2,495.00",
      src2: srcb,
      price2: "558",
    },
    {
      id: 19,
      title: "Hobo Blue Depth Bag",
      src: saleimg19,
      backgroundColor: "blue",
      price: "2,495.00",
      src2: srcb,
      price2: "558",
    },
    {
      id: 20,
      title: "Hobo Neon Green Bag",
      src: saleimg20,
      backgroundColor: "yellow",
      price: "2,495.00",
      src2: srcb,
      price2: "558",
    },
    {
      id: 21,
      title: "Grey Boxer",
      src: saleimg21,
      backgroundColor: "grey",
      price: "599.50",
      src2: srcb,
      price2: "229",
    },
    {
      id: 22,
      title: "Navy Boxer",
      src: saleimg22,
      backgroundColor: "blue",
      price: "599.50",
      src2: srcb,
      price2: "229",
    },
    {
      id: 23,
      title: "Pack of Two Black and Navy Sleeveless Vest",
      src: saleimg23,
      backgroundColor: "grey",
      price: "1,099.50",
      src2: srcb,
      price2: "480",
    },
    {
      id: 24,
      title: "Pack of Two Black and grey Sleeveless Vest",
      src: saleimg24,
      backgroundColor: "grey",
      price: "1,099.50",
      src2: srcb,
      price2: "480",
    },
    {
      id: 25,
      title: "Grey Sleeveless Vest",
      src: saleimg25,
      backgroundColor: "grey",
      price: "549.50",
      src2: srcb,
      price2: "210",
    },
    {
      id: 26,
      title: "Navy Sleeveless Vest",
      src: saleimg26,
      backgroundColor: "blue",
      price: "549.50",
      src2: srcb,
      price2: "210",
    },
    {
      id: 27,
      title: "Grey & Blue Orbit Everyday Sneaker 3.0e",
      src: saleimg27,
      backgroundColor: "grey",
      price: "8,750.00",
      src2: srcb,
      price2: "3,350",
    },
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
                to="/collection/summer-sale-2025"
              >
                Summer-Sale-2025
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="text-center my-5">
          <h1 className="italic font-bold">SUMMER SALE-2025</h1>
        </div>
        <div className="flex justify-between items-center mx-5">
          <div>
            <p className="italic font-bold mt-3">27 PRODUCTS</p>{" "}
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

export default UpTo50PersonOffCard;
