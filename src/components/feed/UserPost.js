import React from "react";
import { Form, Row, Col } from "react-bootstrap";

 
export default function UserPost({placeholder, profilePic}) {
  return(
    <>
        <Form className="postForm">
          <Row>
            <Col sm={3}>
              <img className="previewPic"src={profilePic} alt="profile picture" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder={placeholder} />
            </Col>
          </Row>
        </Form>
    </>
  )
}