import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";

export default class News extends Component {
  constructor() {
    super();
    // console.log("I am a constructor from News Component");
    this.state = { articles: [], loading: true, page: 1, totalResults: 0 };
  }

  componentDidMount() {
    this.getData(); // Call the function correctly
  }

  async getData() {
    let URL = `${this.props.baseURL}?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

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
    this.setState({
      ...this.state,
      loading: true,
    });
    console.log("Next");
    let URL = `${this.props.baseURL}?country=${this.props.country}&category=${
      this.props.category
    }&apiKey=${this.props.API_KEY}&page=${this.state.page + 1}&pageSize=${
      this.props.pageSize
    }`;

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
    this.setState({
      ...this.state,
      loading: true,
    });
    console.log("Previous");
    let URL = `${this.props.baseURL}?country=${this.props.country}&category=${
      this.props.category
    }&apiKey=${this.props.API_KEY}&page=${this.state.page - 1}&pageSize=${
      this.props.pageSize
    }`;

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
        {this.state.loading ? (
          <Loader></Loader>
        ) : (
          <div className="container my-5">
            <h2 className="text-center">Top 20 Headlines</h2>
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
                disabled={this.state.loading || this.state.page <= 1}
                type="button"
                className="btn btn-dark"
                onClick={this.handlePrevious}
              >
                &larr; Previous
              </button>
              <button
                disabled={
                  this.state.loading ||
                  this.state.page + 1 >
                    (this.state.totalResults > 100
                      ? 100 / this.props.pageSize
                      : Math.ceil(
                          this.state.totalResults / this.props.pageSize
                        ))
                }
                type="button"
                className="btn btn-dark"
                onClick={this.handleNext}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

News.defaultProps = {
  pageSize: 10,
  API_KEY: "d45adaf1be234f9a9576726aa10f2f4e",
  country: "us",
  baseURL: "https://newsapi.org/v2/top-headlines",
  category: "general",
};
