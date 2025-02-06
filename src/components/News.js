import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    // console.log("I am a constructor from News Component");
    this.state = { articles: [], loading: false, page: 1, totalResults: 0 };
  }

  componentDidMount() {
    this.getData(); // Call the function correctly
  }

  async getData() {
    let API_KEY = "d45adaf1be234f9a9576726aa10f2f4e";
    let query = "india";
    let URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&page=${this.state.page}&pageSize=20`;

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
        totalResults: data.totalResults,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ articles: [], loading: false }); // Set empty array in case of failure
    }
  }

  handleNext = async () => {
    console.log("Next");
    let API_KEY = "d45adaf1be234f9a9576726aa10f2f4e";
    let query = "india";
    let URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&page=${
      this.state.page + 1
    }&pageSize=20`;

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
        totalResults: data.totalResults,
        page: this.state.page + 1,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ articles: [], loading: false }); // Set empty array in case of failure
    }
  };
  handlePrevious = async () => {
    console.log("Previous");
    let API_KEY = "d45adaf1be234f9a9576726aa10f2f4e";
    let query = "india";
    let URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&page=${
      this.state.page - 1
    }&pageSize=20`;

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
        totalResults: data.totalResults,
        page: this.state.page - 1,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ articles: [], loading: false }); // Set empty array in case of failure
    }
  };

  render() {
    return (
      <div>
        <div className="container my-5">
          <h2>Headlines</h2>
          <div className="row row-cols-3 row-cols-md-3 g-4 my-5">
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
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevious}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                (this.state.totalResults > 100
                  ? 100 / 20
                  : Math.ceil(this.state.totalResults / 20))
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
