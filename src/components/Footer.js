import React from "react";



function Footer() {
  return (
    <div>
      <footer className="pb-6 pt-6 bg-black text-white">
        <div className="container flex flex-wrap  items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <p className="flex flex-wrap items-center space-x-4 sm:space-x-8">
              &copy; The standard Copywrite 2020
            </p>
          </div>
          <ul className="flex flex-wrap lg:pr-60 space-x-4 sm:space-x-4 font-bold">
            <li>
              <a href="#">Cookies.</a>
            </li>
            <span>|</span>
            <li>
              <a href="#">Privacy.</a>
            </li>
          </ul>
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full">
            <img src="logo.svg" alt="Spitogatos logo" />
          </div>
        </div>
      </footer>
       
    </div>
  );
}

export default Footer;
