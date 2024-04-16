import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="bg-slate-100">
          <Routes>
            <Route
              exact
              path="/"
              element={<News pageSize={5} category="general" key="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News pageSize={5} category="business" key="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  pageSize={5}
                  category="entertainment"
                  key="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={<News pageSize={5} category="health" key="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News pageSize={5} category="science" key="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News pageSize={5} category="sports" key="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={
                <News pageSize={5} category="technology" key="technology" />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
