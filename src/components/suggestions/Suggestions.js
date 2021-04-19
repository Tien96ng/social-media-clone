import React from "react";
import { Card, Button } from "react-bootstrap";
import Person from "./Person";


export default function Suggestions() {
  return (
  <>
    <div className="suggestions">
      <h5 className="col-header"> People You May Know </h5>
      <Person />
    </div>
  </>   
  );
}