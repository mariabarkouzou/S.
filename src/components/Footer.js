import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-black text-white">
        <div className="container flex justify-between sm:items-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
          <p className="flex pl-2 text-base font-normal items-center space-x-4 sm:space-x-8">
            &copy; The standard Copywrite 2020
          </p>
          <ul className="flex md:flex hidden text-middle font-extra-bold lg:mr-52 space-x-4 sm:space-x-4">
            <li>
              <a href="#">Cookies.</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">Privacy.</a>
            </li>
          </ul>
          <div className="w-12 h-12">
            <img src="logo.svg" alt="Spitogatos logo" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
