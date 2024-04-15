import React, { Component } from "react";
import NewsItem from "./NewsItem";
import img from "../img/logo.png";
import Spinner from "./Spinner";

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
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=85967f37713f44c18381204922365bb9&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalResults,
      loading: false,
    });
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
  render() {
    return (
      <div className="px-[10vw]  pb-[10vh]">
        <h1 className="text-[1.2rem] font-semibold text-start my-[1rem]">
          What's Going: Top-10{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}{" "}
          News
        </h1>
        {this.state.loading && <Spinner />}
        <div className="flex flex-wrap justify-center">
          {this.state.articles.map((element) => {
            return (
              !this.state.loading && (
                <NewsItem
                  key={element.url}
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
                      : element.content.slice(0, 190) + "..."
                  }
                  date={element.publishedAt.substring(0, 10)}
                  time={element.publishedAt.substring(11, 19)}
                  newsUrl={element.url}
                />
              )
            );
          })}
        </div>
        <div className="flex justify-between p-10">
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
        </div>
      </div>
    );
  }
}
