import React from "react";
import { Card, Col, Row} from "react-bootstrap";

export default function Profile({name, profilePic, tweets, followers, following}) {
  return (
    <>
      <Card className="card profile">
        <Card.Img variant="top" src="https://pbs.twimg.com/media/CziTDFVWQAE6YAF.jpg" alt="backgroundPic" className="profileBackground"/>
        <Card.Body>
          <img src={profilePic} alt="user's profilepic"  className="profilePic"/>
          <Row>
            <Card.Title className="ml-auto mr-3">{name}</Card.Title>
          </Row>
          <Card.Text>
            <Row>
              <Col>Tweets</Col>
              <Col>Following</Col>
              <Col>Followers</Col>
            </Row>
            <Row>
              <Col>{tweets}</Col>
              <Col>{following}</Col>
              <Col>{followers}</Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}