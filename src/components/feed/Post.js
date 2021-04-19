import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Post() {
  return(
    <>
      <Row className="postForm">
        <Col sm={3}>
          <img className="previewPic"src="https://www.biography.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTIwNjA4NjM0MDYwOTY1Mzg4/adam-sandler-9542505-1-402.jpg" alt="profile picture" />
        </Col>
        <Col>
          <Row className="bold">
            Name
          </Row>
          <Row>
            Blah Blah Blah
          </Row>
        </Col>
      </Row>
    </>
  )
}