import React, { Component } from "react";
import logo from "../img/logo.png";
import Hamburger from "./Hamburger";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="bg-white w-full h-[3.5rem] px-[2.5rem] flex justify-between items-center">
        <div>
          <img src={logo} alt="" className="w-[5rem] h-[2rem]" />
        </div>
        <ul className="hidden absolute flex-col top-[6.5vh] left-[60vw] bg-white w-[40vw] pl-[1rem] pb-[1rem]">
          <a href="/">
            <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer">
              Top-10
            </li>
          </a>
          <a href="/">
            <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer">
              Entertainment
            </li>
          </a>
          <a href="/">
            <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer">
              Sports
            </li>
          </a>
        </ul>
        <Hamburger />
      </nav>
    );
  }
}
