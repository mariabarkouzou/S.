import React from "react";
import image from "../map.png";

const FormSuccess = () => {
  return (
    <div className="md:grid md:grid-cols-5 min-h-screen md:gap-8 bg-gray-50">
      {/* Success Section */}
      <div className="md:col-span-3">
        <div className="h-full sm:px-0">
          <span className="z-10 2xl:inset-y-1/2 2xl:right-3/4 lg:inset-y-1/2 lg:right-3/4  md:inset-y-1/2 md:right-3/4 sm:inset-y-1/2 sm:right-3/4  inset-y-auto right-1/2 hover:text-sm absolute inline-block hover:animate-ping  2xl:hover:w-64 2xl:hover:h-64 rounded-full p-4 hover:py-14 md:hover:h-48 md:hover:w-48 md:hover:ml-20 sm:hover:h-40 sm:hover:text-sm sm:hover:w-40 md:hover:text-base hover:text-center bg-yellow text-black text-tiny hover:font-medium hover:text-normal">
            S.und@themail.com
            <br></br>+30 210 1234 567
          </span>
          <img
            className="object-cover 2xl:w-full 2xl:h-full lg:h-full md:h-full sm:h-1/2"
            src={image}
            alt="S. location on a map"
          />
        </div>
      </div>
      <div className="md:mt-0  md:col-span-2">
        <div className="text-center 2xl:mt-64 lg:mt-48 md:mt-32 2xl:ml-24 lg:ml-18 md:ml-8 sm:ml-20 ml-14 mt-10 w-3/4">
          <h2 className="2xl:text-sxl lg:text-sxl md:text-sxl text-blg font-extra-bold sm:text-sxl">
            We have received your request!
          </h2>
          <p className="mt-4 mb-5 2xl:text-middle text-middle font-normal text-black sm:text-base sm:mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormSuccess;
