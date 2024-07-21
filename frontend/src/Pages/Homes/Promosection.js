import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ios from "../../assets/app-store-apple.png"
import android from "../../assets/play-store-logo.png"
import img1 from "../../assets/promo_img.png"
function Promosection() {
  return (
    <section className='promo_section'>
     
    <Container>
    <Row className="align-items-center">
   
      <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0 ">
        <h4>Download mobile App and</h4>
        <h2>save up to 20%</h2>
        <p>
          Aliquam a augue suscipit, luctus neque purus ipsum and neque
          dolor primis libero tempus, blandit varius
        </p>
         <div className='image_logo'>
         <Link to="/">
         <img src={ios} alt="IOS" className="img-fluid store me-3" />
         
       </Link>
       <Link to="/">
         <img src={android} alt="Android" className="img-fluid store me-3" />
       </Link>
         </div>
      </Col>
    <Col lg={6} className='text-center mobile_app_img'>
       <img src={img1} alt="app" className="img-fluid " />
    </Col>
    </Row>
  </Container>
    
    
    </section> 
  )
}

export default Promosection