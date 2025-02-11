import React from "react";

export default function NewsItem({ cardTitle, cardText, imgURL, newsURL }) {
  return (
    <div className="container">
      <div className="card" style={{ minWidth: "10rem", height: "30rem" }}>
        <img
          src={imgURL ? imgURL : "https://dummyimage.com/400x200"}
          className="card-img-top"
          alt="..."
          style={{ width: "100%", height: "40%" }}
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
              height: "7rem",
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
