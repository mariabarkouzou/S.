import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Main One", href: "#", current: true },
  { name: "Page Two", href: "#", current: false },
  { name: "Page Three", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
  { name: "Our Work", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

const menuNav = {
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: props => (
        <svg fill="white" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M88.133,24V13.066h3.733L92.4,8.8H88.133V6.133c0-1.2.4-2.133,2.133-2.133h2.267V.133C92,.133,90.666,0,89.2,0,86,0,83.733,2,83.733,5.6V8.8H80v4.266h3.733V24Z"
            transform="translate(-75.382 0.001)"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: props => (
        <svg fill="white" viewBox="0 0 24 24" {...props}>
          <path
            d="M45.252,20.576A13.24,13.24,0,0,0,58.611,7.216V6.58A10.342,10.342,0,0,0,60.9,4.163a10.562,10.562,0,0,1-2.672.763,4.95,4.95,0,0,0,2.036-2.545,11.67,11.67,0,0,1-2.926,1.145A4.544,4.544,0,0,0,53.9,2a4.78,4.78,0,0,0-4.7,4.708,2.48,2.48,0,0,0,.127,1.018,13.154,13.154,0,0,1-9.669-4.962,4.872,4.872,0,0,0-.636,2.417,5.055,5.055,0,0,0,2.036,3.944,4.289,4.289,0,0,1-2.163-.636h0a4.65,4.65,0,0,0,3.817,4.58,3.922,3.922,0,0,1-1.272.127,2.165,2.165,0,0,1-.891-.127A4.82,4.82,0,0,0,45,16.377a9.606,9.606,0,0,1-5.853,2.036A3.523,3.523,0,0,1,38,18.285a12.009,12.009,0,0,0,7.252,2.29"
            transform="translate(-37.192 0.808)"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: props => (
        <svg fill="white" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M11.975,2.128a36.722,36.722,0,0,1,4.79.133,6.171,6.171,0,0,1,2.262.4,4.673,4.673,0,0,1,2.262,2.262,6.171,6.171,0,0,1,.4,2.262c0,1.2.133,1.6.133,4.79a36.723,36.723,0,0,1-.133,4.79,6.171,6.171,0,0,1-.4,2.262,4.673,4.673,0,0,1-2.262,2.262,6.171,6.171,0,0,1-2.262.4c-1.2,0-1.6.133-4.79.133a36.722,36.722,0,0,1-4.79-.133,6.171,6.171,0,0,1-2.262-.4A4.673,4.673,0,0,1,2.66,19.027a6.171,6.171,0,0,1-.4-2.262c0-1.2-.133-1.6-.133-4.79a36.722,36.722,0,0,1,.133-4.79,6.171,6.171,0,0,1,.4-2.262,4.779,4.779,0,0,1,.932-1.33,2.249,2.249,0,0,1,1.33-.931,6.171,6.171,0,0,1,2.262-.4,36.723,36.723,0,0,1,4.79-.134m0-2.129A39.318,39.318,0,0,0,7.052.133,8.215,8.215,0,0,0,4.124.666,5.209,5.209,0,0,0,2,2,5.209,5.209,0,0,0,.666,4.124,6.062,6.062,0,0,0,.133,7.052,39.317,39.317,0,0,0,0,11.975,39.318,39.318,0,0,0,.133,16.9a8.215,8.215,0,0,0,.532,2.927A5.209,5.209,0,0,0,2,21.954a5.209,5.209,0,0,0,2.129,1.33,8.214,8.214,0,0,0,2.927.532,39.317,39.317,0,0,0,4.924.134,39.317,39.317,0,0,0,4.923-.133,8.214,8.214,0,0,0,2.927-.532,5.582,5.582,0,0,0,3.46-3.46,8.214,8.214,0,0,0,.532-2.927c0-1.331.134-1.73.134-4.924a39.318,39.318,0,0,0-.133-4.923,8.214,8.214,0,0,0-.532-2.927A5.209,5.209,0,0,0,21.954,2,5.209,5.209,0,0,0,19.825.666,8.215,8.215,0,0,0,16.9.133,39.318,39.318,0,0,0,11.975,0m0,5.855a6.022,6.022,0,0,0-6.12,6.12,6.12,6.12,0,1,0,6.12-6.12m0,10.112a3.921,3.921,0,0,1-3.992-3.992,3.921,3.921,0,0,1,3.992-3.992,3.921,3.921,0,0,1,3.992,3.992,3.921,3.921,0,0,1-3.992,3.992M18.362,4.124a1.464,1.464,0,1,0,1.464,1.464,1.464,1.464,0,0,0-1.464-1.464"
            transform="translate(0.025 0.025)"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Website",
      href: "#",
      icon: props => (
        <svg fill="white" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M3.6,3.6A10.89,10.89,0,0,1,12,0a10.89,10.89,0,0,1,8.4,3.6,10.89,10.89,0,0,1,3.6,8.4,10.89,10.89,0,0,1-3.6,8.4,10.89,10.89,0,0,1-8.4,3.6,10.89,10.89,0,0,1-8.4-3.6A11.972,11.972,0,0,1,0,12,10.89,10.89,0,0,1,3.6,3.6Zm10,17.994q1.2,0,3-1.8a8.732,8.732,0,0,0,1.4-4.2,3.311,3.311,0,0,0-1-2.4,3.52,3.52,0,0,0-2.6-1.2h-2a5.838,5.838,0,0,1-1.8-.4,1.815,1.815,0,0,1-.6-1.4,1.039,1.039,0,0,1,.4-.8,1.515,1.515,0,0,1,.8-.4,1.365,1.365,0,0,1,1,.6c.4.2.6.4.8.4a1.2,1.2,0,0,0,.8-.2A1.2,1.2,0,0,0,14,9a3.182,3.182,0,0,0-1-2,8.269,8.269,0,0,0,1-3.8.43.43,0,0,0-.4-.4A6.181,6.181,0,0,0,12,2.4,10,10,0,0,0,6.8,4,5.033,5.033,0,0,0,5,8a5.119,5.119,0,0,0,1.6,3.8,5.462,5.462,0,0,0,3.8,1.6h0v.8a2.567,2.567,0,0,0,.8,2,2.911,2.911,0,0,0,1.8,1.2v3.6c0,.2,0,.2.2.4S13.4,21.592,13.6,21.592Z"
            transform="translate(0.004 0.004)"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16"> 
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-18 w-auto"
                    src="logo.svg"
                    alt="Spitogatos logo"
                  />
                  <img
                    className="hidden lg:block h-20 w-20 mt-7 ml-16 z-10"
                    src="logo.svg"
                    alt="Spitogatos logo"
                  />
                </div>
                <div className="hidden sm:block lg:mt-8 lg:mr-20 lg:ml-18">
                  <div className="flex space-x-4">
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-black text-yellow font-extra-bold underline underline-offset-8 lg:text-lg md:text-sm"
                            : "text-white",
                          "px-3 py-2 rounded-md z-10 font-extra-bold lg:text-lg md:text-sm"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <p className="hidden md:block font-extrabold md:text-lg text-white mt-1 text-xl">
                  EN <span className="text-gray-200">| GR</span>
                </p>

                <button
                  type="button"
                  className="bg-black p-1 text-white right-0 hover:text-white"
                >
                  <span className="sr-only">Search</span>
                  <SearchIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div></div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  ></Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white h-screen">
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-black text-xl text-center mt-4"
                      : "text-center text-black text-xl",
                    "block px-3 py-2 rounded-md"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

            <p className="text-black p-4 text-base text-center">
                  EN <span className="text-gray-100">| GR</span>
                </p>
            </div>
            <div className="flex space-x-6 h-24 md:order-2 bg-blue items-center justify-center">
              {menuNav.social.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
              <ul className="flex space-x-4 sm:space-x-4 font-bold text-white">
            <li>
              <a href="#">Cookies.</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">Privacy.</a>
            </li>
          </ul>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
