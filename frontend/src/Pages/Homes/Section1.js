import React from 'react'
import { Col, Container, Row ,Carousel} from 'react-bootstrap'

import img1 from "../../assets/man.png"
import img2 from "../../assets/textimghome.png"
import img3 from "../../assets/homeglarry.png"
import img5 from "../../assets/homebackgroundback11.jpg"
import img6 from "../../assets/homebackgroundback12.jpg"
import img7 from "../../assets/glarreyimg.png"
import { Link } from 'react-router-dom'
function Section1() {
  return (
    <Carousel >
    <Carousel.Item>
    <section className='hero_section'>
    <div className='home_container d-flex justify-content-between align-items-center'>
    <div className='d-flex justify-content-center align-items-center mt-3'>
    <div className='home_img_man'>
    <img src={img1} className="img-fluid " alt="Hero" />
    </div>
    
    </div>
    <div className='d-flex justify-content-center align-items-center mt-3'>
      
      <div>
      <div className="mb-3  text_img">
      <img src={img2} className="img-fluid " alt="Hero" />
      </div>
      
      <div className='mt-5 d-flex justify-content-center'  >
      <Link className=' order_now' style={{textDecoration:"none"}}>Book Now</Link>
      </div>
      
      </div>
    </div>
   
    <div className='d-flex justify-content-center align-items-center mb-5 ' style={{marginRight:"10px"}}>
    
    <div className="mb-3  gallery_img">
    <img src={img3} className="img-fluid " alt="Hero" />
    
    </div>
    </div>
    </div>
    </section>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>

    {/*<Carousel.Item>
   <section className='hero_section_back'>
    <Container>
    <Row className='d-flex justify-content-between '>
    <Col lg={6} className='d-flex justify-content-center '>
     <div>
     
     <div className='text_img_back'>
     <img src={img6} className="img-fluid " alt="Hero" />
     </div>
     <div className='glarrey_img_back'>
     <img src={img7} className="img-fluid " alt="Hero" />
     </div>
     
     </div>
    </Col>
    <Col lg={6} className='d-flex justify-content-center align-items-center'>
    <div className='man_img_back'>
    <img src={img5} className="img-fluid " alt="Hero" />
    </div>
    
    </Col>
    
    
    </Row>
    </Container>
    
    
    </section>
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item> */}
  </Carousel>
  )
}

export default Section1