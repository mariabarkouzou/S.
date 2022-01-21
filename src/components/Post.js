import React from "react";
import image from "../woman.png";
import imageSec from "../pop.png";

export default function Post() {
  return (
    <>
      <div className="bg-white overflow-hidden mt-10 mb-10">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-20 lg:max-w-none">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="object-cover object-center"
                    src={image}
                    alt="a woman holding a camera"
                  />
                </div>
              </figure>
            </div>
            <div>
              <h2 className="mt-2 text-base text-gray-100 font-extra-bold">
                Since the 1500s
              </h2>
              <h3 className="mt-2 text-sxl font-extra-bold text-black sm:text-4xl">
                The standard
              </h3>
              <div className="mt-8 lg:mt-0">
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                  <br></br>
                  <p className="text-middle text-black">
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
      </div>

      {/* {SECTION II - ARTICLE} */}

      <div className="container max-w-9xl mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center">
        <div className="w-full lg:w-4/6">
          <div className="flex flex-col lg:flex-row-reverse rounded overflow-hidden h-auto lg:h-full">
            <img
              className="block h-full w-full lg:w-1/2 flex-none bg-cover"
              src={imageSec}
            />
            <div className="bg-white mt-20 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="text-black font-bold text-xl mb-2 leading-tight">
                <h2 className="mt-2 text-base text-gray-100 font-extra-bold">
                  Since the 1500s
                </h2>
                <h3 className="mt-2 text-sxl font-extra-bold text-black sm:text-4xl">
                  The standard
                </h3>
                <p className="text-black text-middle mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button
                  type="button"
                  className="mt-10 inline-flex items-center px-24 py-3 border border-transparent text-middle font-extra-bold rounded-full shadow-sm text-white bg-blue"
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
