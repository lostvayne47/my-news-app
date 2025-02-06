import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="/"
                  pageSize={20}
                  category={"general"}
                  country={"us"}
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  key="/"
                  pageSize={20}
                  category={"general"}
                  country={"us"}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={20}
                  category={"business"}
                  country={"us"}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={20}
                  category={"sports"}
                  country={"us"}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={20}
                  category={"science"}
                  country={"us"}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={20}
                  category={"health"}
                  country={"us"}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              key="technology"
              element={
                <News pageSize={20} category={"technology"} country={"us"} />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={20}
                  category={"entertainment"}
                  country={"us"}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
