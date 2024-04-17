import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 10;
  newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
  state = { progress: 0 };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <BrowserRouter>
        <LoadingBar color="#f11946" progress={this.state.progress} height={3} />
        <Navbar />
        <div className="bg-slate-100">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  apiKey={this.newsApiKey}
                  category="general"
                  key="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  apiKey={this.newsApiKey}
                  category="business"
                  key="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  apiKey={this.newsApiKey}
                  category="entertainment"
                  key="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  apiKey={this.newsApiKey}
                  category="health"
                  key="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  apiKey={this.newsApiKey}
                  category="science"
                  key="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  apiKey={this.newsApiKey}
                  category="sports"
                  key="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  apiKey={this.newsApiKey}
                  category="technology"
                  key="technology"
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
