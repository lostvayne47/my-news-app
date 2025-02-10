import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

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
    this.props.setProgress(0);
    let URL = `${this.props.baseURL}?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API_KEY}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    try {
      const response = await fetch(URL);
      this.props.setProgress(25);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      this.props.setProgress(50);

      // Ensure articles is an array before updating state
      this.setState({
        articles: this.state.articles.concat(data.articles),
        loading: false,
        totalResults: data.totalResults,
      });
      this.props.setProgress(100);
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ articles: [], loading: false }); // Set empty array in case of failure
    }
  }

  fetchMore = async () => {
    this.setState({
      ...this.state,
      page: this.state.page + 1,
      loading: true,
    });

    this.getData();
  };
  render() {
    return (
      <div>
        <h2 className="text-center">Top 20 Headlines</h2>
        <div>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMore}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Loader />}
            endMessage={"Thats all folks stay tuned!"}
          >
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
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
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

//Only 100 components are limited in single api according to NEWS API
News.defaultProps = {
  pageSize: 10,
  API_KEY: "API KEY",
  country: "us",
  baseURL: "https://newsapi.org/v2/top-headlines",
  category: "general",
};
