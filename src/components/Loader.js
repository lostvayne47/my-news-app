import React, { Component } from "react";

export default class Loader extends Component {
  loaderStyle = {
    backgroundColor: "#fafafa",
    opacity: "25%",
    height: "100vh",
    width: "100vw",
  };
  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={this.loaderStyle}
      >
        <div
          className="spinner-border"
          style={{ width: "5rem", height: "5rem" }}
          role="status"
        >
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }
}
