import React from "react";
import { Form } from "react-bootstrap";

 
export default function UserPost({placeholder}) {
  return(
    <>
      <Form>
        <img src="" alt="profile picture" />
        <Form.Group controlId="userPost">
          <Form.Control type="text" placeholder={placeholder} />
        </Form.Group>
      </Form>
    </>
  )
}