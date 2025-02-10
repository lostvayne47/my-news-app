import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 10;
  API_KEY = process.env.REACT_APP_API_KEY;

  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }
  setProgress = (value) => {
    this.setState({
      progress: value,
    });
  };

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="/"
                  pageSize={this.pageSize}
                  category={"general"}
                  country={"us"}
                  API_KEY={this.API_KEY}
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  key="/"
                  pageSize={this.pageSize}
                  category={"general"}
                  country={"us"}
                  API_KEY={this.API_KEY}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={this.pageSize}
                  category={"business"}
                  country={"us"}
                  API_KEY={this.API_KEY}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize}
                  category={"sports"}
                  country={"us"}
                  API_KEY={this.API_KEY}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={this.pageSize}
                  category={"science"}
                  country={"us"}
                  API_KEY={this.API_KEY}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={this.pageSize}
                  category={"health"}
                  country={"us"}
                  API_KEY={this.API_KEY}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              key="technology"
              element={
                <News
                  setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  category={"technology"}
                  country={"us"}
                  API_KEY={this.API_KEY}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize}
                  category={"entertainment"}
                  country={"us"}
                  API_KEY={this.API_KEY}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
