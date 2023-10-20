import React from 'react'
import {  Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { fackData } from '../fackData'
import { BsBook, BsCameraVideo, BsHeart } from 'react-icons/bs';
import { BiUser, BiTimeFive, BiStar} from 'react-icons/bi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TopCourses = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Container>
        <div className="text-center course-header">
            <h2>Our top selling courses</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam dolore nihil libero eveniet quae optio laudantium at, expedita labore.</p>
        </div>
      <Row>
      <Slider {...settings}>
        {
            fackData.map(item=>(
               <Col key={item._id} lg={3} md={6} sm={12}>
                <Card className='course-wrapper mt-5'>
                   <div className="course-img">
                    <Card.Img variant="top" src={item.image}  className='w-100'/>
                    <h6>30% off</h6>
                    <h5><BsHeart/></h5>
                   </div>
                    <Card.Body>
                    <div className="course-item">
                        <Image src={item.adminimg}/>
                        <div className="d-flex justify-content-between align-items-center">
                          <h5>{item.admin}</h5>
                          <p><span><BiStar/></span>({item.rationg})</p>
                        </div>
                    </div>
                    <h5>{item.courseName}</h5>
                    <div className=" d-flex justify-content-between course-text">
                      <p><BsBook/> {item.lesson}</p>
                      <p><BiUser/> {item.student}</p>
                    </div>
                    <div className=" d-flex justify-content-between course-text">
                      <p><BiTimeFive/> {item.time}</p>
                      <p><BsCameraVideo/> {item.lecture}</p>
                    </div>
                     <Button variant=" staring">Add to Cart</Button>
                    </Card.Body>
                </Card>
               </Col>
            ))
        }
         </Slider>
      </Row>
    </Container>
    
  )
}

export default TopCourses
