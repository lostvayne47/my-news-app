import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { cardTitle, cardText, imgURL, newsURL } = this.props;
    return (
      <div className="container">
        <div className="card mx-5" style={{ width: "18rem", height: "30rem" }}>
          <img
            src={imgURL ? imgURL : "https://dummyimage.com/400x200"}
            className="card-img-top"
            alt="..."
            style={{ width: "100%", height: "25%" }}
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ overflow: "hidden", height: "5rem" }}
            >
              {cardTitle ? cardTitle.slice(0, 60) : ""}
            </h5>
            <p
              className="card-text"
              style={{
                overflow: "hidden",
                height: "12rem",
                textAlign: "justify",
                fontSize: "15px",
              }}
            >
              {cardText}
            </p>
            <a href={newsURL} target="_blank " className="btn btn-sm btn-dark">
              Go to Article 🔗
            </a>
          </div>
        </div>
      </div>
    );
  }
}
