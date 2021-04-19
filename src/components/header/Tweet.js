import React from "react";
import { Button } from 'react-bootstrap';
import TweetModal from "./TweetModal";

export default function Tweet({btnText}) {
  return <Button id="tweet" variant="outline-primary" onClick={TweetModal}>{btnText}</Button>
}