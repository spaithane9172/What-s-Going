import React, { Component } from "react";

export default class Hamburger extends Component {
  render() {
    return (
      <div
        onClick={this.props.handleMenu}
        className="border-[2px] border-black p-[0.4rem] rounded-md lg:hidden"
      >
        <div className="w-[1.9rem] h-[0.3rem] bg-black mb-[0.3rem]"></div>
        <div className="w-[1.9rem] h-[0.3rem] bg-black mb-[0.3rem]"></div>
        <div className="w-[1.9rem] h-[0.3rem] bg-black"></div>
      </div>
    );
  }
}
