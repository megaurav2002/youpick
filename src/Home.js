import React, { Component } from "react";
import "./Home.css";
import Header from "./header/Header";
import SearchBox from "./SearchBox";
import Map from "./Map";
import SearchResults from "./SearchResults";

import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardBlock
} from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm="6">
            <Card block>
              <SearchBox />
              <div>
                <Map />
              </div>
            </Card>
          </Col>
          <Col sm="6">
            <Card block>
              <SearchResults />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
