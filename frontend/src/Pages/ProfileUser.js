import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/ProfileStyle.css";
import img1 from "../assets/profile_update_img1.jpg";
import img3 from "../assets/profile_update_img2.jpg";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import img2 from "../assets/brandlogo1.png";
const ProfileUser = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const [rotation, setRotation] = useState(0); // State to track rotation angle

  // States to handle sections visibility
  const [basicInfo, setBasicInfo] = useState(true); // Default to true
  const [account, setAccount] = useState(false);

  useEffect(() => {
    // Function to update state with the current window width
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Attach event listener to window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const rotateClockwise = () => setRotation((prevRotation) => prevRotation + 90);
  const rotateCounterClockwise = () => setRotation((prevRotation) => prevRotation - 90);

  // Function to switch between sections
  const handleSectionToggle = (section) => {
    if (section === 'basicInfo') {
      setBasicInfo(true);
      setAccount(false);
    } else if (section === 'account') {
      setBasicInfo(false);
      setAccount(true);
    }
    if(screenWidth<767){
      setToggle(!toggle); // Toggle the sidebar
    }
   
  };
  useEffect(() => {
    if(screenWidth >= 767) {
      setToggle(false); // Automatically set toggle to false when screen width is >= 767
    }
  }, [screenWidth]); // This effect will run whenever screenWidth changes


  return (
    <section className='profile_section '>
    <header className='' style={{position: 'absolute',top: '0',left: '0',right: '0',
      borderBottom: '1px solid rgb(0 90 116)',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  }} >
  <Link to="/">
    <img src={img2} className="img-fluid" style={{ maxWidth: "200px", maxHeight: "85px", padding: "10px" }} alt="Hero" />
  </Link>
</header>

      <div className=' image_box_profile'>
      <div className='profile_edit_image' onClick={handleShow} >
        <img src={img1} className="img-fluid" alt="edit_img" />
       
      </div>
        <h4 style={{color:"white"}} className='mt-3'>Abhishek kumar</h4>
      </div>

      <div className='d-flex justify-content-center align-align-items-end gap-5 profile_whole_container mt-5'>
        <div className={toggle ? "common1" : "info_section"}>
          <ul>
            <li onClick={() => handleSectionToggle('basicInfo')}>
              <span><i className="bi bi-info-circle-fill mx-2"></i>Basic Info</span>
            </li>
            <li>
              <span><i className="bi bi-gear-fill mx-2"></i>Settings</span>
            </li>
            <li onClick={() => handleSectionToggle('account')}>
              <span><i className="bi bi-person-fill mx-2"></i>Account</span>
            </li>            
          </ul>
        </div>

        {basicInfo && (
          <div className={toggle || screenWidth >= 767 ? "basic_info" : "common2"}>
          <div className='toggle_box mb-3'>
          <div style={{
            padding: "0px 10px",
            border: "1px solid rgb(30 83 98)",
            minWidth: "40px",
            minHeight: "30px",
            cursor: "pointer",
            fontSize:"1.8rem",
            borderRadius: "6px",
            backgroundColor: "rgb(30 83 98)"
            
          }}  className='d-flex justify-content-center align-items-center'
          onClick={() => setToggle(!toggle)}>
          <i className="bi bi-list"></i>
          </div>

        </div>

         <div style={{padding:"30px"}}>
         
         <p style={{ fontWeight: 600 }}>Basic Info</p>
         <div className='d-flex justify-content-between align-items-center mb-2' style={{ borderBottom: "1px solid #e0dede" }}>
           <p className='info_edit1'>Name</p>
           <p className='info_edit1'>abhishek</p>
           <div className='info_edit'>
             <p>Name</p>
             <p>abhishek</p>
           </div>
           <Link>Edit</Link>
         </div>

         <div className='d-flex justify-content-between align-items-center mb-2' style={{ borderBottom: "1px solid #e0dede" }}>
           <p className='info_edit1'>Gender</p>
           <p className='info_edit1'>Male</p>
           <div className='info_edit'>
             <p>Gender</p>
             <p>Male</p>
           </div>
           <Link>Edit</Link>
         </div>

         <div className='d-flex justify-content-between align-items-center mb-2' style={{ borderBottom: "1px solid #e0dede" }}>
           <p className='info_edit1'>Location</p>
           <p className='info_edit1'>patna</p>
           <div className='info_edit'>
             <p>Location</p>
             <p>patna</p>
           </div>
           <Link>Edit</Link>
         </div>
         </div>
          </div>
        )}

        {account && (
          <div className={toggle || screenWidth >= 767 ? "basic_info" : "common2"}>
            <div className='toggle_box mb-3'>
              <div style={{
                padding: "0px 10px",
                border: "1px solid rgb(30 83 98)",
                minWidth: "40px",
                minHeight: "30px",
                cursor: "pointer",
                fontSize:"1.8rem",
                borderRadius: "6px",
                backgroundColor: "rgb(30 83 98)"
                
              }}  className='d-flex justify-content-center align-items-center'
              onClick={() => setToggle(!toggle)}>
              <i className="bi bi-list"></i>
              </div>

            </div>

            <div style={{padding:"30px"}}>
            <p style={{ fontWeight: 600 }}>Account</p>
            <div className='d-flex justify-content-between align-items-center mb-2' style={{ borderBottom: "1px solid #e0dede" }}>
              <p className='info_edit1'>Username</p>
              <p className='info_edit1'>abhishek</p>
              <div className='info_edit'>
                <p>Username</p>
                <p>abhishek</p>
              </div>
              <Link>Edit</Link>
            </div>

            <div className='d-flex justify-content-between align-items-center mb-2' style={{ borderBottom: "1px solid #e0dede" }}>
              <p className='info_edit1'>Email</p>
              <p className='info_edit1'>example@mail.com</p>
              <div className='info_edit'>
                <p>Email</p>
                <p>example@mail.com</p>
              </div>
              <Link>Edit</Link>
            </div>

            <div className='d-flex justify-content-between align-items-center mb-2' style={{ borderBottom: "1px solid #e0dede" }}>
              <p className='info_edit1'>Password</p>
              <p className='info_edit1'>********</p>
              <div className='info_edit'>
                <p>Password</p>
                <p>********</p>
              </div>
              <Link>Edit</Link>
            </div>
            
            </div>
          </div>
        )}
      </div>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton >
          <Modal.Title>Upload Profile Image</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "30px 100px", backgroundColor: "#000000d6" }}>
          <div>
            <img 
              src={img3} 
              className="img-fluid" 
              alt="cardimage"  
              style={{
                border: "1px solid white",
                borderRadius: "10px",
                transform: `rotate(${rotation}deg)`, // Apply rotation here
                transition: "transform 0.5s" // Smooth transition
              }} 
            />
          </div>

          <div className='mt-4 d-flex justify-content-between'>
            <Button variant="light" onClick={rotateClockwise}>
              <i className="bi bi-arrow-clockwise"></i>
            </Button>
            <Button variant="light" onClick={rotateCounterClockwise}>
              <i className="bi bi-arrow-counterclockwise"></i>
            </Button>
            <Button variant="light" onClick={() => setRotation(0)}>Reset</Button>
          </div>
        </Modal.Body>
        <div className='d-flex justify-content-center mt-3 mb-2'>
          <Button variant="dark"><i className="bi bi-file-earmark-image"></i> Choose Image...</Button>
        </div>
        <Modal.Footer style={{ backgroundColor: "black", color: "yellow" }}>
          <div>
            <div className='d-flex justify-content-center mt-3 gap-3'>
              <Button variant="dark" style={{ color: "white", fontWeight: 600 }}>Save</Button>
              <Button variant="dark" style={{ color: "white", fontWeight: 600 }} onClick={handleClose}>Cancel</Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default ProfileUser;
