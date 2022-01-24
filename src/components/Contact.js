import React from "react";
import image from "../map.png";
import validate from "./validateInfo";
import useForm from "./useForm";

const Contact = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-5 md:gap-8 bg-gray-50">
          <div className="md:col-span-2">
            <div className="h-full sm:px-0">
              {/* <span className="z-10 2xl:inset-y-1/2 2xl:right-3/4 lg:inset-y-1/2 lg:right-3/4  md:inset-y-1/2 md:right-3/4 sm:inset-y-1/2 sm:right-3/4  inset-y-auto right-1/2 hover:text-sm absolute inline-block hover:animate-ping  2xl:hover:w-64 2xl:hover:h-64 rounded-full p-4 hover:py-14 md:hover:h-48 md:hover:w-48 md:hover:ml-20 sm:hover:h-40 sm:hover:text-sm sm:hover:w-40 md:hover:text-base hover:text-center bg-yellow text-black text-tiny hover:font-medium hover:text-normal">
                S.und@themail.com
                <br></br>+30 210 1234 567
              </span> */}
              <img
                className="object-cover 2xl:w-full 2xl:h-full lg:h-full md:h-full sm:h-3/4  h-3/4"
                src={image}
                alt="S. location on a map"
              />
            </div>
          </div>
          <div className="mt-5 md:mt-0 2xl:px-24 px-4 md:col-span-3">
            <div className="text-center 2xl:ml-24 lg:ml-20 md:ml-12 sm:ml-20  ml-14 mt-10 w-3/4">
              <h2 className="2xl:text-sxl lg:text-sxl md:text-sxl text-blg font-extra-bold sm:text-sxl">
                Contact Us
              </h2>
              <p className="mt-4 mb-5 2xl:text-middle text-middle font-normal text-black sm:text-base sm:mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <form onSubmit={handleSubmit} noValidate action="#" method="POST">
              <div className="overflow-hidden">
                <div className="px-4 py-5 bg-gray-50 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      ></label>
                      <input
                        type="text"
                        class="w-full px-10 py-4 border-solid border border-black 2xl:text-base lg:text-base md:text-base font-medium text-sm hover:border-blue rounded-3xl"
                        placeholder="Full Name*"
                        value={values.username}
                        onChange={handleChange}
                        name="username"
                      />
                      {errors.username && (
                        <p className="block float-left text-red text-xsm font-400">
                          {errors.username}
                        </p>
                      )}
                      <span
                        id="phone-description"
                        className="text-xsm  font-normal block float-right mb-5 text-black"
                      >
                        This field is required
                      </span>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      ></label>
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail*"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        autoComplete="email"
                        class="w-full py-4 px-10 border-solid font-medium border border-black 2xl:text-base lg:text-base md:text-base text-sm hover:border-blue rounded-3xl"
                      />
                      {errors.email && (
                        <p className="block float-left text-red text-xsm font-400">
                          {errors.email}
                        </p>
                      )}
                      <span
                        id="email-description"
                        className="text-xsm  font-normal block float-right mb-5 text-black"
                      >
                        This field is required
                      </span>
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      ></label>
                      <input
                        class="w-full py-4 px-10 text-black border-solid border border-black font-medium 2xl:text-base lg:text-base md:text-base text-sm hover:border-blue rounded-3xl"
                        placeholder="Phone*"
                        type="text"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        aria-describedby="phone-description"
                      />
                      {errors.phone && (
                        <p className="block float-left text-red text-xsm font-400">
                          {errors.phone}
                        </p>
                      )}
                      <span
                        id="phone-description"
                        className="text-xsm font-normal block float-right mb-5 text-black"
                      >
                        This field is required
                      </span>
                    </div>
                    <div className="col-span-6 md:col-span-3 lg:col-span-3 sm:col-span-6">
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                      ></label>
                      <select
                        id="category"
                        name="category"
                        autoComplete="category"
                        className="mt-1 block w-full rounded-3xl py-4 px-3 border border-black bg-white hover:border-blue text-base font-medium"
                      >
                        <option>Category</option>
                        <option>All</option>
                        <option>Books</option>
                        <option>Movies</option>
                        <option>Games</option>
                      </select>
                    </div>
                    <div className="col-span-6 md:col-span-3 lg:col-span-3 sm:col-span-6">
                      <label
                        htmlFor="subcategory"
                        className="block text-sm font-medium text-gray-700"
                      ></label>
                      <select
                        id="subcategory"
                        name="subcategory"
                        autoComplete="subcategory"
                        className="mt-1 block w-full rounded-3xl py-4 px-3 border border-black bg-white text-base font-medium hover:border-blue"
                      >
                        <option>Subcategory</option>
                        <option>All</option>
                        <option>Books</option>
                        <option>Movies</option>
                        <option>Games</option>
                      </select>
                    </div>

                    <div className="col-span-6 mt-10">
                      <div className="flex justify-between">
                        <label
                          htmlFor="how-can-we-help"
                          className="block text-sm font-medium text-black"
                        ></label>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="how-can-we-help"
                          maxLength={100}
                          name="how-can-we-help"
                          placeholder="Message"
                          aria-describedby="how-can-we-help-description"
                          rows={4}
                          className="block w-full shadow-sm py-4 px-10 2xl:text-base lg:text-base md:text-base text-sm font-medium hover:border-blue border border-black rounded-3xl"
                          defaultValue={""}
                        />
                        <span
                          id="how-can-we-help-description"
                          className="text-xsm font-normal block float-right text-black"
                        >
                          100
                        </span>
                      </div>
                    </div>

                    <fieldset className="col-span-6 mt-8">
                      <legend className="block text-base font-normal text-black">
                        Please select at least one of the following:
                      </legend>
                      <div className="mt-4 grid 2xl:grid-cols-4  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-4 grid-cols-2">
                        <div className="flex items-center">
                          <input
                            id="option 1"
                            name="option"
                            defaultValue="option 1"
                            type="checkbox"
                            className="hover:border-blue accent-white text-blue h-6 w-6 rounded border-black"
                          />
                          <label htmlFor="option 1" className="ml-3">
                            <span className="block text-base text-black font-medium">
                              Option 1
                            </span>
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="option 2"
                            name="option"
                            defaultValue="option 2"
                            type="checkbox"
                            className="hover:border-blue accent-white h-6 w-6 text-blue rounded border-black"
                          />
                          <label htmlFor="option 2" className="ml-3">
                            <span className="block text-base text-black font-medium">
                              Option 2
                            </span>
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="text-center sm:col-span-2 mt-10 mb-5">
                  <button
                    type="submit"
                    className="inline-flex justify-center md:px-24 md:py-3 px-12 py-4 border border-transparent text-middle font-extra-bold rounded-full drop-shadow-xl text-white bg-blue"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
