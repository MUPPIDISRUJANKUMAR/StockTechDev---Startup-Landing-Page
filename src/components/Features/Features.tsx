import Image from "next/image";
import React from "react";
import { GoWorkflow } from "react-icons/go";
import { LuPen } from "react-icons/lu";
import { MdAccessAlarm, MdOutlineTouchApp } from "react-icons/md";

const Features = () => {
  return (
    <div className="pt-16 pd-16 bg-gray-100">
      <div>
        <h1 className="text-center text-2xl text-blue-950 font-bold">
          Key Features Of The Product
        </h1>
        <p className="mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]">
          Our product stands out with its high performance, delivering
          blazing-fast speeds and seamless multitasking
        </p>
      </div>
      {/* Main grid */}
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 xl:grid-cols-2 mb-16">
        {/* Inner grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* First Box */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="bg-white p-8 rounded-lg flex flex-col h-full min-h-[240px] max-h-[280px] box-border shadow-sm"
          >
            <div className="flex items-center space-x-3">
              {/* icon */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-700 opacity-50">
                <MdOutlineTouchApp className="w-6 h-6 text-orange-500" />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700">
                App Intergration
              </h1>
            </div>
            {/* description */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed flex-1 line-clamp-3">
              StockDevTools easily connects with other apps and platforms,
              allowing you to sync data and manage everything in one place for a
              smooth stock analysis experience.
            </p>
          </div>
          {/* second Box */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            className="bg-white p-8 rounded-lg flex flex-col h-full min-h-[240px] max-h-[280px] box-border shadow-sm"
          >
            <div className="flex items-center space-x-3">
              {/* icon */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-700 opacity-50">
                <GoWorkflow className="w-6 h-6 text-orange-500" />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700">
                WorkFlow Bulider
              </h1>
            </div>
            {/* description */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed flex-1 line-clamp-3">
              Design your own workflows to analyze, compare, and predict stock
              trends without complexity. The builder makes your process
              organized and efficient.
            </p>
          </div>
          {/* 3rd Box */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            className="bg-white p-6 rounded-lg flex flex-col h-full min-h-[230px] max-h-[270px] box-border shadow-sm"
          >
            <div className="flex items-center space-x-3">
              {/* icon */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-700 opacity-50">
                <LuPen className="w-6 h-6 text-orange-500" />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700">
                Problem Solving
              </h1>
            </div>
            {/* description */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed flex-1 line-clamp-3">
              StockDevTools provides powerful problem-solving tools to help you
              tackle complex stock analysis challenges with ease. Our platform
              is designed to simplify the decision-making process and empower
              users to find effective solutions quickly.
            </p>
          </div>
          {/* 4th Box */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            className="bg-white p-6 rounded-lg flex flex-col h-full min-h-[230px] max-h-[270px] box-border shadow-sm"
          >
            <div className="flex items-center space-x-3">
              {/* icon */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-700 opacity-50">
                <MdAccessAlarm className="w-6 h-6 text-orange-500" />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700">
                Lifetime Access
              </h1>
            </div>
            {/* description */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed flex-1 line-clamp-3">
              Enjoy unlimited, lifetime access to StockDevTools. Make the most
              of all features and updates without worrying about recurring fees
              or losing your data—your tools are always available.
            </p>
          </div>
        </div>
        {/* Image Content */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <Image src="/images/f1.png" alt="feature" width={700} height={700} />
        </div>
      </div>
    </div>
  );
};

export default Features;
