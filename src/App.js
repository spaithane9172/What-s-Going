import React, { useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 10;
  const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <LoadingBar color="#f11946" progress={progress} height={3} />
      <Navbar />
      <div className="bg-slate-100">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={newsApiKey}
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
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={newsApiKey}
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
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={newsApiKey}
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
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={newsApiKey}
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
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={newsApiKey}
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
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={newsApiKey}
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
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={newsApiKey}
                category="technology"
                key="technology"
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
