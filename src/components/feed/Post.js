import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Post({profilePic, name}) {
  return(
    <>
      <Row className="postForm">
        <Col sm={3}>
          <img className="previewPic"src={profilePic} alt="profile picture" />
        </Col>
        <Col>
          <Row className="bold">
            {name}
          </Row>
          <Row>
            Blah Blah Blah
          </Row>
        </Col>
      </Row>
    </>
  )
}