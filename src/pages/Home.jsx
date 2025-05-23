import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import { MdNavigateNext } from "react-icons/md";
import UpTo50PercentOffCard from "../components/UpTo50%OffCard";
import saleimg1 from '../../src/assets/images/sale-img1.webp';
import saleimg2 from '../../src/assets/images/sale-img2.webp';
import saleimg3 from '../../src/assets/images/sale-img3.webp';
import saleimg4 from '../../src/assets/images/sale-img4.webp';
import saleimg5 from '../../src/assets/images/sale-img5.webp';
import saleimg6 from '../../src/assets/images/sale-img6.webp';
import saleimg7 from '../../src/assets/images/sale-img7.webp';
import saleimg8 from '../../src/assets/images/sale-img8.webp';
import saleimg9 from '../../src/assets/images/sale-img9.webp';
import saleimg10 from '../../src/assets/images/sale-img10.webp';
import saleimg11 from '../../src/assets/images/sale-img11.webp';
import saleimg12 from '../../src/assets/images/sale-img12.webp';
import saleimg13 from '../../src/assets/images/sale-img13.webp';
import saleimg14 from '../../src/assets/images/sale-img14.webp';
import saleimg15 from '../../src/assets/images/sale-img15.webp';
import saleimg16 from '../../src/assets/images/sale-img16.webp';
import saleimg17 from '../../src/assets/images/sale-img17.webp';
import saleimg18 from '../../src/assets/images/sale-img18.webp';
import saleimg19 from '../../src/assets/images/sale-img19.webp';
import saleimg20 from '../../src/assets/images/sale-img20.webp';
import saleimg21 from '../../src/assets/images/sale-img21.webp';
import saleimg22 from '../../src/assets/images/sale-img22.webp';
import saleimg23 from '../../src/assets/images/sale-img23.webp';
import saleimg24 from '../../src/assets/images/sale-img24.webp';
import saleimg25 from '../../src/assets/images/sale-img25.webp';
import saleimg26 from '../../src/assets/images/sale-img26.webp';
import saleimg27 from '../../src/assets/images/sale-img27.webp';

function Home() {
  const data2 = [
    {
      id: 1,
      title: "Black & White Amplitude HT Everyday Trainers",
      src : saleimg1,
      backgroundColor: "black",
      price: "5,600.00",
    },
    {
      id: 2,
      title: "Dark Grey Amplitude HT Everyday Trainers",
      src : saleimg2,
      backgroundColor: "gray",
      price: "5,600.00",
    },
    {
      id: 3,
      title: "Sea Green Amplitude HT Everyday Trainers",
      src : saleimg3,
      backgroundColor: "black",
      price: "5,600.00",
    },
    {
      id: 4,
      title: "Oat Beige Amplitude Lowease Everyday Trainers",
      src : saleimg4,
      backgroundColor: "brown",
      price: "5,250.00",
    },
    {
      id: 5,
      title: "Grey CoreFlex Tee",
      src : saleimg5,
      backgroundColor: "grey",
      price: "2000.00",
    },
    {
      id: 6,
      title: "Black Movement Tee",
      src : saleimg6,
      backgroundColor: "black",
      price: "4000.00",
    },
    {
      id: 7,
      title: "Navy Movement Tee",
      src : saleimg7,
      backgroundColor: "#000080",
      price: "2000.00",
    },
    {
      id: 8,
      title: "Black Movement Long Sleeve Tee",
      src : saleimg8,
      backgroundColor: "black",
      price: "4000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg9,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg10,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg11,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg12,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg13,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg14,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg15,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg16,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg17,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg18,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg19,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg20,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg21,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg22,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg23,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg24,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg25,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg26,
      backgroundColor: "grey",
      price: "3000.00",
    },
    {
      id: 9,
      title: "Grey Movement Long Sleeve Tee",
      src : saleimg27,
      backgroundColor: "grey",
      price: "3000.00",
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
            >
              <option selected="">Featured</option>
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
              <div style={{ display: "flex", flexWrap: "wrap" , gap: '1rem' }}>
                {data2.map(({ id, src, title, backgroundColor, price }) => (
                  <UpTo50PercentOffCard
                    key={id}
                    src={src}
                    title={title}
                    backgroundColor={backgroundColor}
                    price={price}
                  />
                ))}
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
}

export default Home;
