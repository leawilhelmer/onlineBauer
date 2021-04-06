import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
          <img
            alt="logo"
            src="http://placekitten.com/200/200"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          onlineBauer
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto collapse navbar-collapse justify-content-end">
            <Link className="nav-link" to="/Team">Team</Link>
            <Link className="nav-link" to="/Unternehmen">Unternehmen</Link>
            <Link className="nav-link" to="/login">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
