import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function TweetModal() {
  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
        </Modal.Header>

        <Modal.Body>
          <textarea>
            Hello there, this is some text in a text area
          </textarea>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary">Tweet</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  )
}