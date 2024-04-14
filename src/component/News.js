import React, { Component } from "react";
import NewsItem from "./NewsItem";
import img from "../img/logo.png";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalArticles: 0,
      page: 1,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=85967f37713f44c18381204922365bb9&" +
      this.state.page +
      "&pageSize=20";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalResults,
    });
  }

  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=85967f37713f44c18381204922365bb9&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, page: this.state.page - 1 });
  };
  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=85967f37713f44c18381204922365bb9&page=${
      this.state.page + 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, page: this.state.page + 1 });
  };
  render() {
    return (
      <div className="px-[10vw]  pb-[10vh]">
        <h1 className="text-[1.2rem] font-semibold text-start my-[1rem]">
          What's Going: Top-10 News
        </h1>

        <div className="flex flex-wrap justify-center">
          {this.state.articles.map((element) => {
            return (
              <NewsItem
                key={element.url}
                imgUrl={element.urlToImage === null ? img : element.urlToImage}
                title={
                  element.title === null
                    ? ""
                    : element.title.slice(0, 50) + "..."
                }
                desc={
                  element.content === null
                    ? ""
                    : element.content.slice(0, 197) + "..."
                }
                date={element.publishedAt.substring(0, 10)}
                time={element.publishedAt.substring(11, 19)}
                newsUrl={element.url}
              />
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
              Math.ceil(this.state.totalArticles / 20) === this.state.page
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
