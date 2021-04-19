import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import "../css/App.css";
import NavBar from "./header/Navbar";
import Profile from "./profile/Profile";
import Info from "./profile/Info";
import Feed from "./feed/Feed";
import Suggestions from "./suggestions/Suggestions"


export default class App extends Component {

  render() {
    return (    
      <div>
        <NavBar />
        <Container fluid>
          <Profile />
          <Info />
          <Feed />
          <Suggestions />
        </Container>
      </div>
    );
  }
};
