import React, { Component } from "react";
import { Card, Col, Row} from "react-bootstrap";

export default function Profile() {
  return (
    <>
      <Card className="card profile">
        <Card.Img variant="top" src="https://pbs.twimg.com/media/CziTDFVWQAE6YAF.jpg" alt="backgroundPic" className="profileBackground"/>
        <Card.Body>
          <Row>
            <Card.Title className="ml-auto mr-3">Tien Nguyen</Card.Title>
          </Row>
          <Card.Text>
            <Row>
              <Col>Tweets</Col>
              <Col>Following</Col>
              <Col>Followers</Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}