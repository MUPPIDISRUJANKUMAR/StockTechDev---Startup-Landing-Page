import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* 1st Part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Solutions</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Enterprice
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            By Work flow
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            By Team
          </p>
        </div>
        {/* 2nd Part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            About Us
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            News & Press
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Our Customer
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Leadership
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Careers
          </p>
        </div>
        {/* 3rd Part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Resources</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Blog
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Webinar & Events
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Podcast
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            E-book & Guides
          </p>
        </div>
        {/* 4th Part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="mt-6">
            <p className="text-gray-600 text-sm">Our Mobile Number</p>
            <p className="text-gray-800 font-bold text-base hover:text-blue-950">
              +0123 4234943234
            </p>
          </div>
          <div className="mt-6">
            <p className="text-gray-600 text-sm">Our Email</p>
            <p className="text-gray-800 font-bold text-base hover:text-blue-950">
              stocktechdev_std@gmail.com
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Part */}
      <div className="mt-8 w-[80%] mx-auto border-t p-8 flex flex-col md:flex-row  justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">
          Copyright © 2024 Webdev. All rights reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social: </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaFacebook />
          </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaTwitter />
          </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
