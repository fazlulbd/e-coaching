import React from 'react'
import {Container, Navbar, Nav }from 'react-bootstrap';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import logo from '../assets/image/logo.png'
const Manubar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary manu-bar">
        <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Service">Service</Nav.Link>
            <Nav.Link href="#Popular">Popular Courses</Nav.Link>
            <Nav.Link href="#Seling">Top Seling Courses</Nav.Link>
            <Nav.Link href="#Courses">All Courses</Nav.Link>
            </Nav>
            <Nav className="manu-sign">
            <Nav.Link ><AiOutlineShoppingCart/></Nav.Link>
            <Nav.Link > <AiOutlineUser/> Sign/Register</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Manubar
