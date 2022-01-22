import React from "react";
import image from "../map.png";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  return (
    <div className="bg-gray-50">
      <main>
        {/* Contact Section */}
        <div className="relative bg-gray-50 mt-10">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src={image}
                alt="Spitogatos location on a map"
              />
            </div>
          </div>
          <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-36 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <h2 className="text-sxl font-extra-bold sm:text-4xl">
                  Contact Us
                </h2>
                <p className="mt-4 text-middle font-normal text-black sm:mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/* Form */}
                <form
                  action="#"
                  method="POST"
                  className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-black"
                    ></label>
                    <div className="mt-1">
                      <input
                        id="full-name"
                        placeholder="Full Name*"
                        name="name"
                        type="text"
                        autoComplete="name"
                        className="block w-full py-4 border-solid border border-black text-base font-medium sm:text-sm hover:border-blue rounded-3xl"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <span
                        id="phone-description"
                        className="text-xsm font-normal text-black"
                      >
                        This field is required
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full py-4 border-solid font-medium border border-black text-base sm:text-sm hover:border-blue rounded-3xl"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="organization"
                        className="block text-sm font-medium text-black"
                      >
                        Phone
                      </label>
                      <span
                        id="phone-description"
                        className="text-xsm font-normal text-black"
                      >
                        This field is required
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full py-4 border-solid border border-black font-medium text-base sm:text-sm hover:border-blue rounded-3xl"
                      />
                    </div>
                  </div>

                  {/* Dropdown Sections */}
                  <div className="sm:col-span-2">
                  <div className="mt-4 grid lg:grid-cols-2 grid-cols-3">
                  
                    <Menu as="div" className="relative inline-block">
                      <div>
                        <Menu.Button className="inline-flex w-full rounded-3xl border border-black  px-16 py-2 bg-white text-base font-medium text-black hover:border-blue">
                          Category
                          <ChevronDownIcon
                            className="-mr-12 ml-14 h-6 w-6"
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

                  <div className="sm:col-span-2">
                    <Menu as="div" className="relative inline-block">
                      <div>
                        <Menu.Button className="inline-flex w-full rounded-3xl border border-black  px-16 py-2 bg-white text-base font-medium text-black hover:border-blue">
                          Category
                          <ChevronDownIcon
                            className="-mr-12 ml-14 h-6 w-6"
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
                        name="how-can-we-help"
                        aria-describedby="how-can-we-help-description"
                        rows={4}
                        className="block w-full shadow-sm sm:text-sm font-medium hover:border-blue border border-black rounded-3xl"
                        defaultValue={""}
                      />
                      <span
                        id="how-can-we-help-description"
                        className="text-xsm font-normal text-black"
                      >
                        500
                      </span>
                    </div>
                  </div>
                  <fieldset className="sm:col-span-3">
                    <legend className="block text-base font-normal text-black">
                      Please select at least one of the following:
                    </legend>
                    <div className="mt-4 grid lg:grid-cols-4 grid-cols-3">
                      <div className="flex items-center">
                        <input
                          id="option 1"
                          name="option"
                          defaultValue="option 1"
                          type="checkbox"
                          className="hover:border-blue checked:bg-black h-6 w-6 text-blue rounded border-black"
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
                          className="hover:border-blue checked:bg-white h-6 w-6 checked:text-blue rounded border-black"
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
      </main>
    </div>
  );
}
