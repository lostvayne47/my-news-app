import React from "react";

export default function Loader() {
  const loaderStyle = {
    backgroundColor: "#fafafa",
    opacity: "25%",
    width: "100%",
    height: "100px",
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={loaderStyle}
    >
      <div
        className="spinner-border"
        style={{ width: "3rem", height: "3rem", margin: "10px" }}
        role="status"
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
}
