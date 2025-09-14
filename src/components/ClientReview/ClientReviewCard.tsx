import Image from "next/image";
import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

type Props = {
  image: string;
  name: string;
  rating: string;
};

const ClientReviewCard = ({ image, name, rating }: Props) => {
  return (
    <div>
      <div className="bg-white shodow-md p-8 sm:flex items-center space-y-4 sm:space-y-0 space-x-6 rounded-lg">
        {/* Image */}
        <div>
          <Image
            src={image}
            alt={`${name} image`}
            className="rounded-lg"
            width={350}
            height={350}
          />
        </div>
        {/* Content */}
        <div>
          <h1 className="text-lg font-bold text-blue-950">{name}</h1>
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-yellow-500">{rating}</h1>
            <div className="flex items-center">
              <FaStar className="w-4 h-4 text-yellow-500" />
              <FaStar className="w-4 h-4 text-yellow-500" />
              <FaStar className="w-4 h-4 text-yellow-500" />
              <FaStar className="w-4 h-4 text-yellow-500" />
              <BsStarHalf className="w-4 h-4 text-yellow-500" />
            </div>
          </div>
          <p className="mt-2 text-base text-gray-700 font-medium">
            {`"${name} provided valuable feedback about our service. We appreciate their honest review and strive to maintain high standards for all our clients."`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewCard;
