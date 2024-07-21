import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Section2() {
  return (
    
    <section className='explore_section'>
    <Container>
    <Row>
    <Col lg={{ span: 8, offset: 2 }} className="text-center">
    <h2>Capture the moments that matter most with our professional photographers.</h2>
    <p className='mt-3 mb-5'>
    Share the joy and make memories even more delightful with loved ones by booking a photographer
     through our app. Enjoy our seamless booking process, reliable service, and top-notch
      photography that ensures your special occasions are perfectly preserved.
    </p>
  
    <Link to="/" className="order_now  explore_btn mt-5" style={{textDecoration:"none"}}>
      Explore Full Menu
    </Link>
  </Col>
    </Row>
    
    </Container>
    </section>
  )
}

export default Section2