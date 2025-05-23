import React from "react";
import logo from "../../assets/images/logo1Degree.avif";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import jazzimg from '../../assets/images/jazz lmg.png';
import easypaisaimg from '../../assets/images/easypaisa.svg';
import baadmayimg from '../../assets/images/baadmay-logo-icon.svg';
import masterimg from '../../assets/images/mastercard-group.webp';
import visaimg from '../../assets/images/visa-group.webp';
import unionimg from '../../assets/images/unionpay-group.webp';
function Footer() {
  return (
    <>
      <div className="container-fluid ">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 my-3 mx-5">
          <div className="col-md-4 mb-3">
            <img src={logo} alt="logo" />
            <h6 className="mt-3 italic text-sm">
              WE ARE THE BEST ACTICEWEAR BRAND IN PAKISTAN.
            </h6>
            <p className="mt-4 text-sm">
              Pushing boundaries with high-performance activewear designed for
              athletes and everyday champions.
            </p>
          </div>

          <div className="col-md-2 mb-3">
            <h6 className="italic text-sm">ABOUT</h6>
            <ul className="nav flex-column mt-4">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-sm text-white">
                  Our Journey
                </a>
              </li>
              <li className="nav-item mb-2 mt-2">
                <a href="#" className="nav-link text-sm p-0 text-white">
                  Blogs
                </a>
              </li>
              <li className="nav-item mb-2 mt-2">
                <a href="#" className="nav-link p-0 text-sm text-white">
                  Contact Us
                </a>
              </li>
              <li className="nav-item mb-2 mt-2">
                <a href="#" className="nav-link p-0 text-sm text-white">
                  Happy Customers
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mb-3">
            <h6 className="italic text-sm">QUICK LINKS</h6>
            <ul className="nav flex-column mt-4">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-sm text-white">
                  Our Journey
                </a>
              </li>
              <li className="nav-item mb-2 mt-2">
                <a href="#" className="nav-link text-sm p-0 text-white">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item mb-2 mt-2">
                <a href="#" className="nav-link p-0 text-sm text-white">
                  Refund Policy
                </a>
              </li>
              <li className="nav-item mb-2 mt-2">
                <a href="#" className="nav-link p-0 text-sm text-white">
                  Store Location
                </a>
              </li>
              <li className="nav-item mb-2 mt-2">
                <a href="#" className="nav-link p-0 text-sm text-white">
                  Shipping Information
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h6 className="italic text-sm">NEWSLETTER</h6>
            <p>
              Sign up for exclusive offers, original stories, events and more.
            </p>
            <div className="relative w-80 mt-2">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white p-2 pr-10 w-full border rounded"
              />
              <FaArrowRight
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black text-xl"
                style={{ fill: "black", fontSize: "20px" }}
              />
            </div>
          </div>
        </footer>
      </div>
      <div className="bg-neutral-800 h-30">
        <div className="flex justify-center">
          <ul className="flex flex-wrap gap-4 justify-center py-5 text-xl sm:text-2xl md:text-3xl text-white">
            <li className="text-xl">
              <FaFacebook />
            </li>
            <li className="text-xl">
              <FaYoutube />
            </li>
            <li className="text-xl">
              <FaInstagram />
            </li>
            <li className="text-xl">
              <FaXTwitter />
            </li>
            <li className="text-xl">
              <FaLinkedinIn />
            </li>
          </ul>
        </div>
        <div className=" bg-neutral-800 h-30 flex items-center justify-around">
          <div >
            <p>©2025Onedegree</p>
          </div>
          <div>
            <ul  className="flex gap-4 ml-[450px] ">
              <li><img className="h-6" src={jazzimg} alt="" /></li>
              <li><img className="h-6" src={easypaisaimg} alt="" /></li>
              <li><img className="h-6" src={baadmayimg} alt="" /></li>
              <li><img className="h-6" src={masterimg} alt="" /></li>
              <li><img className="h-6 " src={visaimg} alt="" /></li>
              <li><img className="h-6" src={unionimg} alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
