import React from "react";
import { Card } from "react-bootstrap";

export default function Info({bio}) {
  return <Card className="card profile" body><span className="bold">Bio: </span>{bio}</Card>;
}