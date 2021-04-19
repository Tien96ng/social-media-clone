import React from "react";
import SearchBar from "./SearchBar";
import Tweet from "./Tweet";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  return(
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Daniel & Tien</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Notifications</Nav.Link>
          <Nav.Link href="#pricing">Messages</Nav.Link>
        </Nav>
        <SearchBar placeholder="Search..."/>
        <Tweet btnText="Tweet"/>
      </Navbar>
    </>


  )
}