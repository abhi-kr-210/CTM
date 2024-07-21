import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination, Autoplay } from 'swiper/modules';
import { Col, Container, Row } from 'react-bootstrap';
import Image1 from "../../assets/post-1.jpg";
import Image2 from "../../assets/post-2.jpg";
import Image3 from "../../assets/post-3.jpg";
import Image4 from "../../assets/post-4.jpg";
import Cardsteam from '../../Component/Cardsteam';

// Mock Data Cards
const mockData = [
  {
    id: "0001",
    name:"John Doe ",
    image: Image1,
    title: "CEO,Photographer",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: "0002",
    name:"Rosy Jane",
    image: Image2,
    title: "Photographer",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "0003",
    name:"Camelia Peter",
    image: Image3,
    title: "Photographer",
    paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: "0004",
    name:"Alexa Peter",
    image: Image4,
    title: "Photographer",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },


  // Add more mock data objects as needed
];

function Section6() {
  return (
    <section className='team_section'>
     <div className='team_section_container'> 
     
     <div className='text-center mb-5' style={{ color: "white" }}>
     <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "20px" }} className='mb-0'>Who We Are</p>
     <h1 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>MEET OUR TEAM</h1>
   </div>
   <Container>
     <Row >
       <Swiper
         spaceBetween={50}
         loop={true}
         speed={600} // Adjusting the speed for a smoother transition
         autoplay={{
          delay: 3500,
           disableOnInteraction: false,
         }}
         pagination={{ clickable: true }}
         modules={[Pagination, Autoplay]}
         className="mySwiper"
         breakpoints={{
           550: {
             slidesPerView: 2,
           },
           992: {
             slidesPerView: 3,
           },

         }}
       >
         {mockData.map((cardData, index) => (
           <SwiperSlide key={index}>
             <Cardsteam
               image={cardData.image}
               name={cardData.name}
               title={cardData.title}
               paragraph={cardData.paragraph}
             />
           </SwiperSlide>
         ))}
       </Swiper>
     </Row>
   </Container>
     
     </div>
    </section>
  );
}

export default Section6;