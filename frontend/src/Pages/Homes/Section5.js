import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from "../../assets/ads_girl.png"

function Section5() {
  return (
    <section className='ads_section d-flex justify-content-center mx-auto'>
     <Container className='ads_section_container'>
     <div className='d-flex justify-content-between align-itmes-center'>
     <div className='d-flex justify-content-center align-items-center  mt-4 ads_section_container_col1'>
         <div>
         <h2 className='mb-0' >Photography</h2>
         <h2 className='mx-2 mb-0 mt-0' >Workshop</h2>
         <h2 className='mt-0' >for Beginners</h2>
         <h5 className='mb-0 text-center' style={{fontFamily:"cursive",fontWeight:600}}>Discount 35% Off</h5>
         <p className='mt-0 text-center mb-0'>Start From 7-13 june 2021</p>
         <div className="d-flex justify-content-center mt-1">
         <i className="bi bi-facebook mx-1" ></i>
         <i className="bi bi-whatsapp mx-1" ></i>
         <i className="bi bi-instagram mx-1"></i>
         <i className="bi bi-twitter mx-1" ></i>
         </div>
         </div>
     </div>
     <div>
     <img src={img1} className="img-fluid  ads_girl_img" alt="Hero" />
     </div>
     </div>
     </Container>
    </section>
  )
}

export default Section5