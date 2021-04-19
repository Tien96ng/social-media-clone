import React from "react";
import { Form, Button } from "react-bootstrap";

export default function SearchBar() {
  return (
    <>
      <Form id="search-form">
        <Form.Control type="text" placeholder="Search..." />
        {/* <Button variant="primary" type="submit"> Submit </Button> */}
      </Form>
      
      
    </>
  )
}