import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

//Only 100 components are limited in single api according to NEWS API

export default function News({
  pageSize = 10,
  API_KEY = "API KEY",
  country = "us",
  baseURL = "https://newsapi.org/v2/top-headlines",
  category = "general",
  setProgress,
}) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  async function getData() {
    setProgress(0);
    let URL = `${baseURL}?country=${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;

    try {
      const response = await fetch(URL);
      setProgress(25);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setProgress(50);

      // Ensure articles is an array before updating state
      setArticles(articles.concat(data.articles));
      setTotalResults(data.totalResults);

      setProgress(100);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Set empty array in case of failure
      setArticles([]);
    }
  }

  async function fetchMore() {
    setPage((page) => page + 1);
    getData();
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []); // Call the function correctly

  return (
    <div>
      <h2 className="text-center">Top 20 Headlines</h2>
      <div>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMore}
          hasMore={articles.length !== totalResults}
          loader={<Loader />}
          endMessage={"Thats all folks stay tuned!"}
        >
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
              {articles?.map((a) => {
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
