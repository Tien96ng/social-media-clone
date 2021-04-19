import React from "react";
import Profile from "./Profile";
import Info from "./Info";
import { Row, Col } from "react-bootstrap";

export default function ProfileMain() {
  return (
    <>
      <Row>
        <Col>
          <Profile />
        </Col>
      </Row>
      <Row>
        <Col>
          <Info />
        </Col>
      </Row>
    </>
  )
}