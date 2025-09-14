import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <h1 className="text-center text-2xl text-blue-950 font-bold">
        Choose The Plan That&apos;s Right For You
      </h1>
      <p className="mt-3 text-center text-gray-700 font-bold w-[90%] sm:w-[70%] md:w-[50%] mx-auto">
        Select from our flexible plans to get the features and support you need.
        Upgrade or cancel anytime—no hidden fees.
      </p>
      <div className="w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
        {/* PriceCard */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <PricingCard time="3 Month" price="$39.99" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <PricingCard time="12 Month" price="$19.99" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <PricingCard time="1 Year" price="$9.99" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
