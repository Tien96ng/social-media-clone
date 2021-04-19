import React from "react";
import Profile from "./Profile";
import Info from "./Info";
import { Row, Col } from "react-bootstrap";

export default function ProfileMain({name, profilePic, bio, tweets, followers, following}) {
  return (
    <>
      <Row>
        <Col>
          <Profile 
            name={name}
            profilePic={profilePic}
            tweets={tweets}
            followers={followers}
            following={following}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Info bio={bio} />
        </Col>
      </Row>
    </>
  )
}