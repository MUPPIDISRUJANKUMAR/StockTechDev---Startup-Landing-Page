import React from "react";
import BoxText from "../Helper/BoxText";
import { FaBriefcase, FaChess, FaRocket, FaShoppingCart } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto ">
        <BoxText>Ours Services</BoxText>
        {/* heading */}
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
          Our Services Made For You?
        </h1>
        {/* description */}
        <p className="mt-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] text-gray-600">
          Discover a range of professional services tailored to help your
          business grow. From innovative startups to established enterprises,
          our team provides solutions in digital design, e-commerce, branding,
          and strategy to elevate your success.
        </p>
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center gap-y-12 mt-16">
          {/* 1st Service */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="flex items-center space-x-5"
          >
            {/* icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-200 bg-opacity-50">
              <FaRocket className="w-6 h-6 text-orange-400" />
            </div>
            {/* text Content */}
            <div>
              <p className="text-lg font-bold text-gray-700">Start Up</p>
              <p className="text-sm text-gray-600">
                Launch your new venture with expert guidance and innovative
                solutions tailored for startups.
              </p>
            </div>
          </div>
          {/* 2nd Service */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            className="flex items-center space-x-5"
          >
            {/* icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-200 bg-opacity-50">
              <FaBriefcase className="w-6 h-6 text-orange-400" />
            </div>
            {/* text Content */}
            <div>
              <p className="text-lg font-bold text-gray-700">Bussiness</p>
              <p className="text-sm text-gray-600">
                Empower your business with scalable solutions, expert
                consulting, and strategic support for sustainable growth.
              </p>
            </div>
          </div>
          {/* 3rd Service */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            className="flex items-center space-x-5"
          >
            {/* icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-200 bg-opacity-50">
              <FaShoppingCart className="w-6 h-6 text-orange-400" />
            </div>
            {/* text Content */}
            <div>
              <p className="text-lg font-bold text-gray-700">E-commerce</p>
              <p className="text-sm text-gray-600">
                Boost your online sales with custom e-commerce solutions,
                seamless integrations, and user-friendly shopping experiences.
              </p>
            </div>
          </div>
          {/* 4th Service */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            className="flex items-center space-x-5"
          >
            {/* icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-200 bg-opacity-50">
              <MdOutlineDesignServices className="w-6 h-6 text-orange-400" />
            </div>
            {/* text Content */}
            <div>
              <p className="text-lg font-bold text-gray-700">Digital Design</p>
              <p className="text-sm text-gray-600">
                Enhance your brand with creative digital designs, engaging
                visuals, and user-focused interfaces for every platform.
              </p>
            </div>
          </div>
          {/* 5th Service */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
            className="flex items-center space-x-5"
          >
            {/* icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-200 bg-opacity-50">
              <IoColorPaletteOutline className="w-6 h-6 text-orange-400" />
            </div>
            {/* text Content */}
            <div>
              <p className="text-lg font-bold text-gray-700">
                Unlimited Colors
              </p>
              <p className="text-sm text-gray-600">
                Personalize your brand with limitless color options, ensuring
                your visual identity stands out and resonates with your
                audience.
              </p>
            </div>
          </div>
          {/* 6th Service */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="500"
            className="flex items-center space-x-5"
          >
            {/* icon */}
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-pink-200 bg-opacity-50">
              <FaChess className="w-6 h-6 text-orange-400" />
            </div>
            {/* text Content */}
            <div>
              <p className="text-lg font-bold text-gray-700">
                Strategy Solution
              </p>
              <p className="text-sm text-gray-600">
                Drive your business forward with expert strategy solutions,
                data-driven insights, and actionable plans for long-term
                success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
