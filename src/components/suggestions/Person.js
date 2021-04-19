import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export default function Person({name, profilePic}) {
  return(
    <>
      <Row className="personSuggest">
        <Col sm={3}>
          <img className="previewPic"src={profilePic} alt="profile picture" />
        </Col>
        <Col>
          <Row className="bold left-side">
            {name}
          </Row>
          <Row className="left-side add-btn">
            <Button variant="primary" size="sm">Add Friend</Button>
          </Row>
        </Col>
      </Row>
    </>
  )
}