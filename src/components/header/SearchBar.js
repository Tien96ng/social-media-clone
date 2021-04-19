import React from "react";
import { Form } from "react-bootstrap";

export default function SearchBar({placeholder}) {
  return (
    <>
      <Form id="search-form">
        <Form.Control type="text" placeholder={placeholder} />
      </Form>
      
      
    </>
  )
}