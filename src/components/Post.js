import React from "react";
import image from "../woman.png";
import imageSec from "../pop.png";

export default function Post() {
  return (
    <>
      <div className="bg-white overflow-hidden mt-10 mb-10">
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-20 lg:max-w-none">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
             
        
                  <img
                    className="object-fill h-full w-full"
                    src={image}
                    alt="a woman holding a camera"
                  />
              
             
            </div>
            <div>
              <h2 className="lg:mt-2 mt-5 lg:text-base text-gray-100 font-extra-bold text-sm">
                Since the 1500s
              </h2>
              <h3 className="mt-2 lg:text-sxl font-extra-bold text-black text-blg">
                The standard
              </h3>
            
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                  <p className="lg:text-middle lg:mt-5 text-base text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt.
                  </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {SECTION II - ARTICLE} */}

      <div className="container max-w-9xl mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center">
        <div className="w-full lg:w-4/6">
          <div className="flex flex-col lg:flex-row-reverse rounded overflow-hidden h-auto lg:h-full">
            <img
              className="block h-auto w-full lg:w-1/2 flex-none bg-cover"
              src={imageSec}
              alt="a pillow"
            />
            <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="text-black lg:mt-16 md:mt-0 sm:mt-0 font-bold text-xl lg:mb-2 leading-tight">
                <h2 className="mt-2 lg:text-base text-gray-100 font-extra-bold text-sm">
                  Since the 1500s
                </h2>
                <h3 className="mt-2 lg:text-sxl font-extra-bold text-black text-blg">
                  The standard
                </h3>
                <p className="lg:text-middle text-base text-black mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button
                  type="button"
                  className="mt-10 inline-flex items-center md:px-24 md:py-3 px-12 py-4 border border-transparent text-middle font-extra-bold rounded-full drop-shadow-xl text-white bg-blue"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
