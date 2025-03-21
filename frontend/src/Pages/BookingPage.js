import React, { useState } from 'react'
import "../Styles/BookingPage.css"
import Modal from 'react-bootstrap/Modal';
function BookingPage() {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [bookname,setbookname]=useState('Normal')
  return (
    <section className='booking_page'>
       <div className='location_input_container'>
       <input type="text" value={value} placeholder='Enter your current location'
       onChange={(e) => setValue(e.target.value)} />
       </div>

       
       <div className='booking_options no-select'>
         <div className='d-flex justify-content-between align-align-items-center normal'
         onClick={() => setbookname('Normal')} style={{cursor:"pointer"}} >
         <div className='d-flex justify-content-center align-items-center gap-3'>
          <div >
          <i className="bi bi-camera2" style={{fontSize:"2rem",color:"#00ceff"}}></i>
          </div>
          <p className='mb-0'>Normal</p>
          <p className='mb-0'>4 mins</p>
         </div>
         <div className='d-flex justify-content-center align-items-center gap-2'>
         <p className="mb-0"><i class="bi bi-currency-rupee"></i>350/hr</p>
         <div  onClick={handleShow}><i class="bi bi-info-circle"></i></div>
         </div>
         </div>

         <div className='d-flex justify-content-between align-align-items-center normal' 
         onClick={() => setbookname('Standard')} style={{cursor:"pointer"}}>
         <div className='d-flex justify-content-center align-items-center gap-3'>
          <div >
          <i className="bi bi-camera2" style={{fontSize:"2rem",color:"#00ceff"}}></i>
          </div>
          <p className='mb-0'>Standard </p>
          <p className='mb-0'>4 mins</p>
         </div>
         <div className='d-flex justify-content-center align-items-center gap-2'>
         <p className="mb-0"><i class="bi bi-currency-rupee"></i>550/hr</p>
         <div><i class="bi bi-info-circle"></i></div>
         </div>
         </div>

         <div className='d-flex justify-content-between align-align-items-center normal' 
         onClick={() => setbookname('Advanced')} style={{cursor:"pointer"}}>
         <div className='d-flex justify-content-center align-items-center gap-3'>
          <div >
          <i className="bi bi-camera2" style={{fontSize:"2rem",color:"#00ceff"}}></i>
          </div>
          <p className='mb-0'>Advanced </p>
          <p className='mb-0'>4 mins</p>
         </div>
         <div className='d-flex justify-content-center align-items-center gap-2'>
         <p className="mb-0"><i class="bi bi-currency-rupee"></i>750/hr</p>
         <div><i class="bi bi-info-circle"></i></div>
         </div>
         </div>



         <div className=' book_name_slot'>
           <div className='d-flex justify-content-center align-items-center  book_name_slot_div'>
             <p className='mb-0'>Book for {bookname} slot</p>
           </div>
          
         </div>
       </div>



       <Modal show={show} onHide={handleClose} >
       <Modal.Header closeButton  style={{color:"white",backgroundColor:"#00384e"}}>
         <Modal.Title ><i className="bi bi-camera2 " ></i>  Normal Slot</Modal.Title>
       </Modal.Header>
       <Modal.Body>
        <div></div>
       </Modal.Body>
       <Modal.Footer >
       egwwwwwwwwwwwwwwwwwwww
       </Modal.Footer>
     </Modal>


    </section>
  )
}

export default BookingPage