import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default function Profile() {
  return (
    <>
      <Card class="card">
        <Card.Img variant="top" src="" alt="picture of best developer"/>
        <Card.Body>
          <Card.Title>Tien</Card.Title>
          <Card.Text>
            The best developer
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}