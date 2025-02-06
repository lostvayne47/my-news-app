import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  async getData() {
    let API_KEY = "d45adaf1be234f9a9576726aa10f2f4e";
    let query = "bitcoin";
    let URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;

    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Ensure articles is an array before updating state
      this.setState({
        articles: Array.isArray(data.articles) ? data.articles : [],
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ articles: [], loading: false }); // Set empty array in case of failure
    }
  }

  componentDidMount() {
    this.getData(); // Call the function correctly
  }

  constructor() {
    super();
    // console.log("I am a constructor from News Component");
    this.state = { articles: [], loading: false };
  }
  render() {
    return (
      <div>
        <div className="container my-5">
          <h2>Quick Shorts Headlines</h2>
          <div className="row row-cols-3 row-cols-md-3 g-4">
            {this.state.articles?.map((a) => {
              if (a) {
                return (
                  <div
                    key={a.source.id + a.author + a.publishedAt}
                    className="col"
                  >
                    <NewsItem
                      cardTitle={a.title}
                      cardText={a.description}
                      imgURL={a.urlToImage}
                      newsURL={a.url}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    );
  }
}
