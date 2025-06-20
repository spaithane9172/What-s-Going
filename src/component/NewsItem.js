import React from "react";
import PropTypes from "prop-types";

const NewsItem = (props) => {
  let { imgUrl, title, desc, date, time, newsUrl } = props;
  return (
    <div
      className="border-[1px] border-black w-[19rem] sm:w-[25rem] md:w-[19rem] lg:w-[18rem] xl:w-[17.5rem] 2xl:w-[21rem] h-fit md:mr-[1rem] lg:mr-[1rem] rounded-lg bg-white mb-[1.5rem] pb-[0.5rem] shadow-md"
      key={newsUrl}
    >
      <img
        src={imgUrl}
        alt=""
        className="w-full h-[30vh] sm:h-[23vh] md:h-[34vh] border-black border-[1px] rounded-t-lg"
      />
      <div className="p-[1rem]">
        <a
          href={newsUrl}
          target="_blank"
          rel="noreferrer"
          className="mb-[1rem] text-[1.2rem] lg:text-[1.1rem] font-semibold text-wrap text-justify"
        >
          {title}
        </a>
        <p className="text-wrap w-[60] text-justify truncate">{desc}</p>
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
          className="cursor-pointer border-black border-[1px] px-[0.5rem] py-[0.2rem] rounded-md bg-blue-500 text-white font-bold"
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  newsUrl: PropTypes.string,
};
export default NewsItem;
