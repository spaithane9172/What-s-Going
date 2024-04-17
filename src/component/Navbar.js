import React, { Component } from "react";
import logo from "../img/logo.png";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isMenuVisible: false,
    };
  }

  handleMenu = () => {
    this.setState({ isMenuVisible: !this.state.isMenuVisible });
  };

  render() {
    return (
      <nav className="bg-white w-full h-[5rem] px-[2.5rem] flex justify-between lg:justify-start items-center fixed">
        <div>
          <img src={logo} alt="" className="w-[5rem] h-[2rem]" />
        </div>
        <ul
          className={` ${
            this.state.isMenuVisible ? "static" : "hidden"
          } absolute flex-col top-[6.5vh] left-[60vw] bg-white w-[40vw] pl-[1rem] pb-[1rem] lg:h-[3.5rem] lg:pl-0 lg:pb-0 lg:relative lg:top-0 lg:left-0 lg:block lg:flex lg:flex-row lg:jus lg:bg-transparent lg:ml-[3rem] lg:w-fit`}
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
        </ul>
        <Hamburger handleMenu={this.handleMenu} />
      </nav>
    );
  }
}
