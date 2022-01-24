import React from "react";
import image from "../map.png";

const FormSuccess = () => {
  return (
    <div className="flex items-center bg-gray-50">
      {/* Success Section */}
      <div className="flex-1 h-full max-w-9xl mx-auto bg-gray-50">
        <div className="flex flex-col md:flex-row">
          <div className="h-56 md:h-auto md:w-1/2">
            <img
              className="object-cover 2xl:w-full 2xl:h-full w-full h-full"
              src={image}
              alt="S. location on a map"
            />
          </div>

          <div class="flex items-center justify-center mt-5 2xl:mr-20 lg:mr-12 md:mr-12 sm:p-12 md:w-1/2">
            <div class="2xl:w-full lg:w-full md:w-full sm:w-full w-3/4">
              <div class="flex justify-center">
                <h2 className="2xl:text-sxl lg:text-sxl md:text-sxl text-blg font-extra-bold sm:text-sxl">
                  We have received your request!
                </h2>
              </div>
              <p className="mt-4 2xl:text-middle text-middle font-normal text-black sm:text-base sm:mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSuccess;
