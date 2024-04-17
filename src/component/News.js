import React, { Component } from "react";
import NewsItem from "./NewsItem";
import img from "../img/logo.png";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      totalArticles: 0,
      page: 1,
      loading: false,
    };
    document.title = `What's Going | ${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    }`;
  }

  updateNews = async () => {
    this.props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });

    let data = await fetch(url);

    this.props.setProgress(30);

    let parseData = await data.json();

    this.props.setProgress(70);

    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalResults,
      loading: false,
    });

    this.props.setProgress(100);
  };

  componentDidMount() {
    this.updateNews();
  }

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 }, this.updateNews);
  };
  handleNext = () => {
    this.setState({ page: this.state.page + 1 }, this.updateNews);
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 }, async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();

      this.setState({
        articles: this.state.articles.concat(parseData.articles),
        totalArticles: parseData.totalResults,
        loading: false,
      });
    });
  };

  render() {
    return (
      <div className="px-[2.5rem]  pb-[10vh] pt-[5rem]">
        <h1 className="text-[1.2rem] font-semibold text-start py-[1rem]">
          What's Going: Top-10{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}{" "}
          News
        </h1>

        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<Spinner />}
          style={{ overflow: "hidden" }}
        >
          <div className="flex flex-wrap justify-center">
            {this.state.articles.map((element, index) => {
              return (
                !this.state.loading && (
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
                )
              );
            })}
          </div>
        </InfiniteScroll>

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
  }
}
