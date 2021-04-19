import React from "react";
import { Card, Button } from "react-bootstrap";


export default function Suggestions() {
  return (
  <>
    <Card>
      <Card.Img variant="left" src="" alt="random img"/>
      <Card.Body>
        <Card.Title>Suggestions</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
  </>   
  );
}