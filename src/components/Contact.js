import React from "react";
import image from "../map.png";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import validate from "./validateInfo";
import useForm from "./useForm";



const Contact = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <div className="flex items-center min-h-screen bg-white">
        {/* Contact Section */}
        <div className="flex-1 h-full max-w-9xl mx-auto bg-gray-50">
          <div className="flex flex-col md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                className="object-cover 2xl:w-3/4 w-full h-full"
                src={image}
                alt="S. location on a map"
              />
            </div>

            <div class="flex items-center justify-center mt-5 2xl:mr-20 lg:mr-12 md:mr-12 sm:p-12 md:w-1/2">
              <div class="2xl:w-full lg:w-full md:w-full sm:w-full w-3/4">
                <div class="flex justify-center">
                  <h2 className="2xl:text-sxl lg:text-sxl md:text-sxl text-blg font-extra-bold sm:text-sxl">
                    Contact Us
                  </h2>
                </div>
                <p className="mt-4 mb-5 2xl:text-middle text-middle font-normal text-black sm:text-base sm:mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div>
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    action="#"
                    method="POST"
                  >
                    <label class="block text-sm"></label>
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

                    <div class="mt-4">
                      <label class="block text-sm"></label>
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
                    <div>
                      <label class="block mt-4 text-sm"></label>
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

                    {/* Drop Down Section */}

                    <div className="flex">
                      <div className="flex flex-wrap gap-8 justify-between mt-8 mb-6 2xl:gap-8">
                        <Menu as="div" className="relative inline-block">
                          <div>
                            <Menu.Button className="inline-flex w-full rounded-3xl border border-black  px-10 py-3 bg-white text-base font-medium text-black hover:border-blue">
                              Category
                              <ChevronDownIcon
                                className="-mr-1 ml-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-50 text-black"
                                          : "text-black",
                                        "block px-4 py-2 text-base"
                                      )}
                                    >
                                      All
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-50 text-black"
                                          : "text-black",
                                        "block px-4 py-2 text-base"
                                      )}
                                    >
                                      Books
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-50 text-black"
                                          : "text-black",
                                        "block px-4 py-2 text-base"
                                      )}
                                    >
                                      Movies
                                    </a>
                                  )}
                                </Menu.Item>
                                <form method="POST" action="#">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <button
                                        type="submit"
                                        className={classNames(
                                          active
                                            ? "bg-gray-50 text-black text-base"
                                            : "text-black",
                                          "block w-full text-left px-4 py-2 text-base bg-white"
                                        )}
                                      >
                                        Games
                                      </button>
                                    )}
                                  </Menu.Item>
                                </form>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                        {/* Second DropDown */}
                        <div className="sm:cols-2">
                          <Menu as="div" className="relative inline-block">
                            <div>
                              <Menu.Button className="inline-flex w-full rounded-3xl border border-black px-6 py-3 bg-white text-base font-medium text-black hover:border-blue">
                                Subcategory
                                <ChevronDownIcon
                                  className="-mr-1 ml-2 h-5 w-5"
                                  aria-hidden="true"
                                />
                              </Menu.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active
                                            ? "bg-gray-50 text-black"
                                            : "text-black",
                                          "block px-4 py-2 text-base"
                                        )}
                                      >
                                        All
                                      </a>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active
                                            ? "bg-gray-50 text-black"
                                            : "text-black",
                                          "block px-4 py-2 text-base"
                                        )}
                                      >
                                        Books
                                      </a>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active
                                            ? "bg-gray-50 text-black"
                                            : "text-black",
                                          "block px-4 py-2 text-base"
                                        )}
                                      >
                                        Movies
                                      </a>
                                    )}
                                  </Menu.Item>
                                  <form method="POST" action="#">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button
                                          type="submit"
                                          className={classNames(
                                            active
                                              ? "bg-gray-50 text-black text-base"
                                              : "text-black",
                                            "block w-full text-left px-4 py-2 text-base bg-white"
                                          )}
                                        >
                                          Games
                                        </button>
                                      )}
                                    </Menu.Item>
                                  </form>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                    </div>

                    {/* Text Area */}
                    <div className="sm:col-span-2">
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
                    <fieldset className="sm:col-span-3 mt-8">
                      <legend className="block text-base font-normal text-black">
                        Please select at least one of the following:
                      </legend>
                      <div className="mt-4 grid 2xl:grid-cols-4  lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-2">
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

                    <div className="text-center sm:col-span-2 mt-10">
                      <button
                        type="submit"
                        className="inline-flex justify-center md:px-24 md:py-3 px-12 py-4 border border-transparent text-middle font-extra-bold rounded-full drop-shadow-xl text-white bg-blue"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
