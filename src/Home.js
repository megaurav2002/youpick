import React, { Component } from "react";
import "./Home.css";
import Header from "./header/Header";
import SearchBox from "./SearchBox";
import Map from "./Map";
import SearchResults from "./SearchResults";
import { Button } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <SearchBox />
        <Map />
        <SearchResults />
      </div>
    );
  }
}

export default Home;
