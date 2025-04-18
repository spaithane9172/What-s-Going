import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import img from "../img/logo.png";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);

  const [totalArticles, setTotalArticles] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  document.title = `What's Going | ${
    props.category.charAt(0).toUpperCase() + props.category.slice(1)
  }`;

  const updateNews = async () => {
    props.setProgress(10);
    setArticles(articles);
    console.log(props.apiKey);
    const url = `https://bookstore-jafq.onrender.com/news?category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);

    props.setProgress(30);

    let parseData = await data.json();

    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalArticles(parseData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    //eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://bookstore-jafq.onrender.com/news?category=${
      props.category
    }&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setPage(page + 1);
  };

  // const handlePrevious = () => {
  //   setPage(page - 1);
  //   updateNews();
  // };

  // const handleNext = () => {
  //   setPage(page + 1);
  //   updateNews();
  // };

  return (
    <div className="px-[2.5rem]  pb-[10vh] pt-[5rem]">
      <h1 className="text-[1.2rem] font-semibold text-start py-[1rem]">
        What's Going: Top-10{" "}
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)} News
      </h1>

      {loading && <Spinner />}

      {articles && (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalArticles}
          loader={<Spinner />}
          style={{ overflow: "hidden" }}
        >
          <div className="flex flex-wrap justify-center">
            {articles.map((element, index) => {
              return (
                <NewsItem
                  key={index}
                  imgUrl={
                    element.urlToImage === null ? img : element.urlToImage
                  }
                  title={
                    element.title === null
                      ? ""
                      : element.title.slice(0, 50) + "..."
                  }
                  desc={
                    element.content === null
                      ? ""
                      : element.content.slice(0, 140) + "..."
                  }
                  date={element.publishedAt.substring(0, 10)}
                  time={element.publishedAt.substring(11, 19)}
                  newsUrl={element.url}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      )}

      {/* <div className="flex justify-between p-10">
        <button
          disabled={this.state.page === 1}
          onClick={this.handlePrevious}
          className="text-[1.2rem] border-[1px] border-black px-[1rem] py-[0.5rem] rounded-md font-semibold bg-blue-500 text-white"
        >
          Previous
        </button>
        <button
          disabled={
            Math.ceil(this.state.totalArticles / this.props.pageSize) ===
            this.state.page
          }
          onClick={this.handleNext}
          className="text-[1.2rem] border-[1px] border-black px-[1rem] py-[0.5rem] rounded-md font-semibold bg-blue-500 text-white"
        >
          Next
        </button>
      </div> */}
    </div>
  );
};
News.propTypes = {
  setProgress: PropTypes.func,
  category: PropTypes.string,
  pageSize: PropTypes.number,
  apiKey: PropTypes.string,
};
export default News;
