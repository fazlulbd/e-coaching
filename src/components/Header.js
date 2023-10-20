import React from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'
import image from "../assets/image/banner.png"
import { AiOutlineSearch } from 'react-icons/ai';
const Header = () => {
  return (
    <Container>
      <Row className='header'>
        <Col className='d-flex  align-items-center' lg={5} md={12} sm={12}>
          <div className="header-wrapper">
            <h1>take your <span>dreams</span> to the next lavel!</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam autem beatae asperiores facilis. Saepe dolorem voluptates iste? Magni eaque facere maiores sapiente quos exercitationem ipsam!</p>
            <Form className="d-flex header-from">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant=" staring"><AiOutlineSearch /></Button>
            </Form>
          </div>
        </Col>
        <Col lg={6} md={10} sm={12}>
          <Image src={image} alt='banner' className='w-100' />
        </Col>
        <Col lg={1} md={2} sm={12} className='d-flex  align-items-center'>
            <div className="banner-text">
              <div className="header-text">
                <h3>100</h3>
                <p>subject to choose from</p>
              </div>
              <div className="header-text">
                <h3>120+</h3>
                <p>subject to choose from</p>
              </div>
              <div className="header-text">
                <h3>120</h3>
                <p>subject to choose from</p>
              </div>
            </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Header
