import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export default function Person() {
  return(
    <>
      <Row className="personSuggest">
        <Col sm={3}>
          <img className="previewPic"src="https://www.biography.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTIwNjA4NjM0MDYwOTY1Mzg4/adam-sandler-9542505-1-402.jpg" alt="profile picture" />
        </Col>
        <Col>
          <Row className="bold left-side">
            Name
          </Row>
          <Row className="left-side add-btn">
            <Button variant="primary" size="sm">Add Friend</Button>
          </Row>
        </Col>
      </Row>
    </>
  )
}