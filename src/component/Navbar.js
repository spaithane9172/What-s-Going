import React, { useState } from "react";
import logo from "../img/logo.png";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const handleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="bg-white w-full h-[5rem] px-[2.5rem] flex justify-between lg:justify-start items-center fixed shadow-b-lg shadow-black">
      <div>
        <img src={logo} alt="" className="w-[5rem] h-[2rem]" />
      </div>
      <ul
        className={` ${
          isMenuVisible ? "static" : "hidden"
        } absolute flex-col top-[6.5vh] left-[60vw] bg-white w-[40vw] pl-[1rem] pb-[1rem] lg:h-[3.5rem] lg:pl-0 lg:pb-0 lg:relative lg:top-0 lg:left-0 lg:flex lg:flex-row lg:jus lg:bg-transparent lg:ml-[3rem] shadow-lg lg:shadow-none lg:w-fit`}
      >
        <Link to="/">
          <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer lg:px-[1rem] lg:py-[1rem] lg:border-0  ">
            Home
          </li>
        </Link>
        <Link to="/business">
          <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer lg:px-[1rem] lg:py-[1rem] lg:border-0 ">
            Business
          </li>
        </Link>
        <Link to="/entertainment">
          <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer lg:px-[1rem] lg:py-[1rem] lg:border-0 ">
            Entertainment
          </li>
        </Link>
        <Link to="/health">
          <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer lg:px-[1rem] lg:py-[1rem] lg:border-0 ">
            Health
          </li>
        </Link>
        <Link to="/science">
          <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer lg:px-[1rem] lg:py-[1rem] lg:border-0 ">
            Science
          </li>
        </Link>
        <Link to="/sports">
          <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer lg:px-[1rem] lg:py-[1rem] lg:border-0 ">
            Sports
          </li>
        </Link>
        <Link to="/technology">
          <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer lg:px-[1rem] lg:py-[1rem] lg:border-0 ">
            Technology
          </li>
        </Link>
        <div className="w-full flex flex-col justify-end">
          <button
            onClick={() => {
              setShowLanguages(!showLanguages);
            }}
            className="w-full flex justify-end"
          >
            <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer lg:px-[1rem] lg:py-[1rem] lg:border-0 w-fit">
              Select Language <i className="fa-solid fa-angle-down"></i>
            </li>
          </button>
          {showLanguages && (
            <div className="w-0 h-o relative">
              <div className="absolute bg-white  sm:w-[10rem] shadow-lg">
                {[
                  { name: "English", value: "en" },
                  { name: "Hindi", value: "hi" },
                  { name: "Marathi", value: "mr" },
                ].map((element) => {
                  return (
                    <button
                      key={element.name}
                      onClick={() => {
                        props.setLanguage(element.value);
                      }}
                      className="w-full"
                    >
                      <h1 className="font-semibold text-[0.9rem] py-[0.5rem] border-[1px] px-[2rem] border-b-black">
                        {element.name}
                      </h1>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </ul>
      <Hamburger handleMenu={handleMenu} />
    </nav>
  );
};

export default Navbar;
