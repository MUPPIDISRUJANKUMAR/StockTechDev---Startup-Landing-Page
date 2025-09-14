import Image from "next/image";
import React from "react";
import BoxText from "../Helper/BoxText";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-col-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Content */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <Image src="/images/about.png" alt="about" width={600} height={600} />
        </div>
        {/* Text Content */}
        <div>
          <BoxText>About Us</BoxText>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-[2.5rem] sm:leading-[3rem]">
            Everything You Need To Grow Your Business
          </h1>
          <p className="mt-3 leading-relaxed text-sm sm:text-base text-gray-700">
            At StockDevTools, we provide cutting-edge stock analysis and
            prediction tools designed to simplify decision-making. Our mission
            is to empower individuals and businesses to grow with confidence
            through data-driven insights.
          </p>
          <button className="mt-5 text-[#f68967] font-bold pb-1 border-b-2 border-[#f68967]">
            Learn More &#8594;
          </button>
          <div className="mt-8 border-l-2 border-gray-200">
            <div className="ml-6">
              <p className="text-gray-700 font-medium">
                &quot; As a web developer, my goal with StockDevTools is to
                create a platform where complex stock analysis becomes simple,
                intuitive, and empowering for every user&quot;
              </p>
              <div className="flex items-center space-x-6 mt-6">
                <Image
                  src="/images/u1.jpg"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">Kavya Reddy</p>
                  <p className="text-gray-700 text-sm">
                    Web Developer @TechDev
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
