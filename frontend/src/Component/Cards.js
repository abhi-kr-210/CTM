import React from 'react'
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/CardsStyle.css"
function Cards({image,title, paragraph}) {
  return (
    <Col className="mb-5 card_section">
    <Card className="overflow-hidden">
      <div className="overflow-hidden card_image_dim">
        <Card.Img variant="top" src={image} />
        
      </div>
      <Card.Body className='text-center card_body_style' >
        <Card.Title className='mb-3' style={{color:"white"}}>{title}</Card.Title>
        <Card.Text className='mb-4' style={{color:"white"}}>{paragraph}</Card.Text>
        <div className="d-flex align-items-center justify-content-center mb-3" >
            <Link to="/"  className='learn_more'
            style={{maxWidth:"190px",maxHeight:"70px",textDecoration:"none",fontSize:"1rem"}}>
            LEARN MORE</Link>
        </div>
      </Card.Body>
    </Card>
  </Col>
  )
}

export default Cards