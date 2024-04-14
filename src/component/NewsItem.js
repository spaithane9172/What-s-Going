import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { imgUrl, title, desc, date, time, newsUrl } = this.props;
    return (
      <div
        className="border-[1px] border-black w-[19rem] h-[30rem] rounded-lg p-[1rem] bg-white mb-[1.5rem] shadow-md shadow-black"
        key={newsUrl}
      >
        <img
          src={imgUrl}
          alt=""
          className="w-full h-[15vh] border-black border-[1px] rounded-md"
        />
        <h1 className="my-[1rem] text-[1.2rem] font-semibold text-wrap text-justify">
          {title}
        </h1>
        <p className="text-wrap w-[60] text-justify">{desc}</p>
        <div className="my-[1.1rem] flex justify-between items-center ">
          <p>
            <span className="font-semibold">Date:</span> {date}
          </p>
          <p>
            <span className="font-semibold">Time:</span> {time}
          </p>
        </div>
        <a
          href={newsUrl}
          className="border-black border-[1px] px-[0.5rem] py-[0.2rem] rounded-md bg-blue-500 text-white font-bold"
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>
      </div>
    );
  }
}
