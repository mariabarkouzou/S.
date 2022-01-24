import React from "react";
import image from "../map.png";
import validate from "./validateInfo";
import useForm from "./useForm";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";




const Contact1 = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <div class="flex items-center min-h-screen bg-white">
        <div class="flex-1 h-full max-w-9xl mx-auto bg-gray-50">
          <div class="flex flex-col md:flex-row">
            <div class="h-32 md:h-auto md:w-1/2">
              <img class="object-cover 2xl:w-3/4 w-full h-full" src={image} alt="S. location on a map" />
            </div>
            <div class="flex items-center justify-center mr-20 sm:p-12 md:w-1/2">
              <div class="2xl:w-full lg:w-full md:w-full sm:w-full w-3/4">
                <div class="flex justify-center">
                  <h2 className="text-sxl font-extra-bold sm:text-blg">
                    Contact Us
                  </h2>
                </div>
                <p className="mt-4 mb-5 text-middle font-normal text-black sm:text-base sm:mt-3">
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
                    <p className="2xl:ml-96 text-red text-xsm font-400">
                      {errors.username}
                    </p>
                  )}
                  <span
                    id="phone-description"
                    className="text-xsm ml-80 font-normal 2xl:ml-80 lg:l-80 md:ml-80 sm:ml-80 ml-36 text-black"
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
                    <p className="2xl:ml-96 text-red text-xsm font-400">
                      {errors.email}
                    </p>
                  )}
                  <span
                    id="phone-description"
                    className="text-xsm ml-80 font-normal 2xl:ml-80 lg:l-80 md:ml-80 sm:ml-80 ml-36 text-black"
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
                    <p className="2xl:ml-96 text-red text-xsm font-400">
                      {errors.phone}
                    </p>
                  )}
                  <span
                    id="phone-description"
                    className="text-xsm font-normal 2xl:ml-80 lg:l-80 md:ml-80 sm:ml-80 ml-36 text-black"
                  >
                    This field is required
                  </span>
                </div>
                </form>
</div>

                {/* DropDown Section */}


                {/* <div className="flex">
                    <div className="mt-4 mb-6 flex md:flex-wrap lg:gap-8">
                      <Menu as="div" className="relative inline-block">
                        <div>
                          <Menu.Button className="inline-flex w-full rounded-3xl border border-black  px-8 py-4 bg-white text-base font-medium text-black hover:border-blue">
                            Category
                            <ChevronDownIcon
                              className="-mr-10 2xl:ml-20 lg:ml-20 md:ml-20 sm:ml-20 ml-80 h-6 w-6"
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
                      <div className="sm:col-span-1">
                        <Menu as="div" className="relative inline-block">
                          <div>
                            <Menu.Button className="inline-flex w-full rounded-3xl border border-black px-10 py-4 bg-white text-base font-medium text-black hover:border-blue">
                              Subcategory
                              <ChevronDownIcon
                                className="-mr-8 2xl:ml-14 lg:ml-14 md:ml-14 sm:ml-14 ml-64 h-6 w-6"
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
                  </div> */}
                




              </div>
            </div>
          </div>
                 
        </div>
      </div>
    </div>
  );
};

export default Contact1;
