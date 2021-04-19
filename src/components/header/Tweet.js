import React from "react";
import { Button } from 'react-bootstrap';

export default function Tweet({btnText}) {
  return <Button id="tweet" variant="outline-primary">{btnText}</Button>
}