import React from 'react'
import { Container,Row ,Carousel} from 'react-bootstrap'
import img1 from "../../assets/userreview/user1.jpg"
import img2 from "../../assets/userreview/user2.jpg"
import img3 from "../../assets/userreview/user3.jpg"
import img4 from "../../assets/userreview/user4.jpg"


const mockdata=[

   {
    id:"0001",
    name:"John Doe",
    image:img1,
    paragraph:" Etiam sapien sem at sagittis congue augue massa variu sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque ", 
    star:5
   },
   {
    id:"0002",
    name:"John Doe",
    image:img2,
    paragraph:" Etiam sapien sem at sagittis congue augue massa variu sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque ", 
    star:3
   },
   {
    id:"0003",
    name:"John Doe",
    image:img3,
    paragraph:" Etiam sapien sem at sagittis congue augue massa variu sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque ", 
    star:4
   },
   {
    id:"0004",
    name:"John Doe",
    image:img4,
    paragraph:" Etiam sapien sem at sagittis congue augue massa variu sodales sapien undo tempus dolor egestas magna suscipit magna tempus aliquet porta sodales augue suscipit luctus neque ", 
    star:3.5
   },


]

function Section7() {
  const handlestar=(star)=>{
    const icons = [];
    for (let i = 1; i <= 5; i++) {
      if(star>0.5){
        icons.push(<i key={i} className="bi bi-star-fill"></i>);
      }else if(star>0){
        icons.push(<i key={"half"} className="bi bi-star-half"></i>);
      }else{
        icons.push(<i key={`empty${i}`} className="bi bi-star"></i>);
      }
      star--;
    }
    return icons

  }
  return (
    <section className='review_section'>
    <Container>
      <Row>
        <Carousel fade>
        {mockdata.map((item, index) => (
          <Carousel.Item key={index} className='carousel_item_container'>
    <div className="user_img d-flex justify-content-center">
      <img src={item.image} className="img-fluid" alt="user-3" />
    </div>
      <Carousel.Caption>
      <p>{item.paragraph}</p>
    <div className="item_rating mb-2">
         {handlestar(item.star)}
    </div>
    <h5>{item.name}</h5>
      </Carousel.Caption>
    </Carousel.Item>
        ))}

        </Carousel>
      </Row>
    </Container>
  </section>
  )
}

export default Section7