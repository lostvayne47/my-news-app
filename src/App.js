import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 10;
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
                  pageSize={this.pageSize}
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
                  pageSize={this.pageSize}
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
                  pageSize={this.pageSize}
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
                  pageSize={this.pageSize}
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
                  pageSize={this.pageSize}
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
                  pageSize={this.pageSize}
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
                <News
                  pageSize={this.pageSize}
                  category={"technology"}
                  country={"us"}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.pageSize}
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
