import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";
import requests from "./request";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaties" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
