import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import "../Styles/Profilemain.css"
import img2 from "../assets/brandlogo1.png";
import { Link } from 'react-router-dom';
import img1 from "../assets/profile_update_img1.jpg";
function ProfileMain() {
  return (
    <section className='profile_main'>
    <header className='' style={{position: 'absolute',top: '0',left: '0',right: '0',
        borderBottom: '1px solid rgb(0 90 116)',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',zIndex: '9999'
    }} >
    <Link to="/">
      <img src={img2} className="img-fluid" style={{ maxWidth: "200px", maxHeight: "85px", padding: "10px" }} alt="Hero" />
    </Link>
  </header>

    <div className='anime_profile'>
    <div  className='profile_main_img'>
    <img src={img1} className="img-fluid" alt="edit_img" />       
    </div>
    <div className='mt-3 ms-4'>
    <h3 style={{color:"white",textTransform:"none"}}>Abhishek Kumar</h3>
    </div>

    <div className='mt-3 ms-4'>
    <Button variant="success"><Link to="/profile_user" style={{textDecoration:"none",color:"white"}}>Edit Profile</Link></Button>
    </div>
    </div>

    
     <div style={{color:"white",padding:"10px"}} className='mt-5 profile_main_detail '>
     <div className='detail'>
       <h6>Name</h6>
       <p>Abhishek Kumar</p>
     </div>

     <div className='detail'>
       <h6>Email Address</h6>
       <p>abhsihek@gmail.com</p>
     </div>

     <div className='detail'>
       <h6>Address</h6>
       <p>123 Main St, City,Country</p>
     </div>

     <div className='detail'>
       <h6>Date Of Birth</h6>
       <p>01/01/2000</p>
     </div>

     <div className='detail'>
       <h6>Payment And Refund</h6>
       <p>Visa ending in 1234,Refund ,method :Bank transfer</p>
     </div>
     
     <div className='detail'>
     <h6>Orders</h6>
     <p>Order #12345 - Delivered on 01/08/2024</p>
   </div>
     </div>
      
    </section>
  )
}

export default ProfileMain