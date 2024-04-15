import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div className="flex items-center justify-center">
        <div className="border-[10px] border-b-black w-[4rem] h-[4rem] rounded-full animate-spin"></div>
      </div>
    );
  }
}
