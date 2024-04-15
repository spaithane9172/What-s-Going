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
      <nav className="bg-white w-full h-[3.5rem] px-[2.5rem] flex justify-between items-center">
        <div>
          <img src={logo} alt="" className="w-[5rem] h-[2rem]" />
        </div>
        <ul
          className={` ${
            this.state.isMenuVisible ? "static" : "hidden"
          } absolute flex-col top-[6.5vh] left-[60vw] bg-white w-[40vw] pl-[1rem] pb-[1rem]`}
        >
          <Link to="/">
            <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/business">
            <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer">
              business
            </li>
          </Link>
          <Link to="/entertainment">
            <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer">
              entertainment
            </li>
          </Link>
          <Link to="/health">
            <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer">
              health
            </li>
          </Link>
          <Link to="/science">
            <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer">
              science
            </li>
          </Link>
          <Link to="/sports">
            <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer">
              sports
            </li>
          </Link>
          <Link to="/technology">
            <li className="py-[0.5rem] font-semibold border-b-[1px] border-black cursor-pointer">
              technology
            </li>
          </Link>
        </ul>
        <Hamburger handleMenu={this.handleMenu} />
      </nav>
    );
  }
}
