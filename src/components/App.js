import React, { Component } from "react";
import PropTypes from "prop-types";
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
      following: 0,
      feed: [
        {
          name: "",
          bio: "",
          profilePic: ""
        },
        {
          name: "",
          bio: "",
          profilePic: ""
        },
        {
          name: "",
          bio: "",
          profilePic: ""
        },
        {
          name: "",
          bio: "",
          profilePic: ""
        },
        {
          name: "",
          bio: "",
          profilePic: ""
        },
      ],
      suggestions: [
        {
          name: "",
          bio: "",
          profilePic: ""
        },
        {
          name: "",
          bio: "",
          profilePic: ""
        },
        {
          name: "",
          bio: "",
          profilePic: ""
        },
      ]
    }
  }

  async componentDidMount() {
    const personUrl = "https://randomuser.me/api/?results=9";
    const kayneWestUrl = "https://api.kanye.rest/";

    const personResponse = await fetch(personUrl);
    const personData = await personResponse.json();

    const kayneWestResponse = await fetch(kayneWestUrl);
    const kayneWestData =  await kayneWestResponse.json();

    this.setState({
      name: personData.results[0].name.first + " " + personData.results[0].name.last,
      profilePic: personData.results[0].picture.thumbnail,
      bio: kayneWestData.quote,
      tweets: (Math.floor(Math.random() * 1000) + 1),
      followers: (Math.floor(Math.random() * 1000) + 1),
      following: (Math.floor(Math.random() * 1000) + 1),
      feed: [
        {
          name: personData.results[1].name.first + " " + personData.results[1].name.last,
          bio: "",
          profilePic: personData.results[1].picture.thumbnail
        },
        {
          name: personData.results[2].name.first + " " + personData.results[2].name.last,
          bio: "",
          profilePic: personData.results[2].picture.thumbnail
        },
        {
          name: personData.results[3].name.first + " " + personData.results[3].name.last,
          bio: "",
          profilePic: personData.results[3].picture.thumbnail
        },
        {
          name: personData.results[4].name.first + " " + personData.results[4].name.last,
          bio: "",
          profilePic: personData.results[4].picture.thumbnail
        },
        {
          name: personData.results[5].name.first + " " + personData.results[5].name.last,
          bio: "",
          profilePic: personData.results[5].picture.thumbnail
        },
      ],
      suggestions: [
        {
          name: personData.results[6].name.first + " " + personData.results[6].name.last,
          bio: "",
          profilePic: personData.results[6].picture.thumbnail
        },
        {
          name: personData.results[7].name.first + " " + personData.results[7].name.last,
          bio: "",
          profilePic: personData.results[7].picture.thumbnail
        },
        {
          name: personData.results[8].name.first + " " + personData.results[8].name.last,
          bio: "",
          profilePic: personData.results[8].picture.thumbnail
        },
      ]
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
          <Feed 
            profilePic={this.state.profilePic}
            feed={this.state.feed}
          />
          <Suggestions suggestions={this.state.suggestions}/>
        </Container>
      </>
    );
  }
};

App.propTypes = {
  name: PropTypes.string,
  profilePic: PropTypes.string,
  bio: PropTypes.string,
  tweets: PropTypes.number,
  followers: PropTypes.number,
  following: PropTypes.number,
}
