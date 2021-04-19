import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../css/App.css";
import NavBar from "./header/Navbar";
import ProfileMain from "./profile/ProfileMain";
import Feed from "./feed/Feed";
import Suggestions from "./suggestions/Suggestions"


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      profilePic: "",
      bio: "",
      tweets: 0,
      followers: 0,
      following: 0
    }
  }

  async componentDidMount() {
    const url = "https://randomuser.me/api/";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      name: data.results[0].name.first + " " + data.results[0].name.last,
      profilePic: data.results[0].picture.thumbnail,
      bio: data.results[0].location.city + ", " + data.results[0].location.country,
      tweets: (Math.floor(Math.random() * 1000) + 1),
      followers: (Math.floor(Math.random() * 1000) + 1),
      following: (Math.floor(Math.random() * 1000) + 1)

    });
  }

  render() {
    return (    
      <>
        <NavBar />
        <Container>
          <ProfileMain
                  name={this.state.name}
                  profilePic={this.state.profilePic}
                  bio={this.state.bio}
                  tweets={this.state.tweets}
                  followers={this.state.followers}
                  following={this.state.following}
          />
          <Feed />
          <Suggestions />
        </Container>
      </>
    );
  }
};
