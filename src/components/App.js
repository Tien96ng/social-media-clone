import React, { Component } from "react";
import "../css/App.css";
import NavBar from "./header/Navbar";
import Profile from "./profile/Profile";
import Info from "./profile/Info";

export default class App extends Component {

  render() {
    return (    
      <div>
        <NavBar />
        <Profile />
        <Info />
      </div>
    );
  }
};
