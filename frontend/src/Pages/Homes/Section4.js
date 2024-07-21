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
import Image1 from "../../assets/o1.jpg";
import Image2 from "../../assets/o2.jpg";
import Image3 from "../../assets/o3.jpg";
import Image4 from "../../assets/o4.jpg";
import Image5 from "../../assets/o5.jpg";
import Cards from '../../Component/Cards';

// Mock Data Cards
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Photo Editing",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa quiselit maximus ullamcorper. Ut euismod, lectus nec suscipit porta",
  },
  {
    id: "0002",
    image: Image2,
    title: "Portrait Photography",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa quiselit maximus ullamcorper. Ut euismod, lectus nec suscipit porta",
  },
  {
    id: "0003",
    image: Image3,
    title: "Photo Editing",
    paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa quiselit maximus ullamcorper. Ut euismod, lectus nec suscipit porta",
  },
  {
    id: "0004",
    image: Image4,
    title: "Film Photography",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa quiselit maximus ullamcorper. Ut euismod, lectus nec suscipit porta",
  },
  {
    id: "0005",
    image: Image5,
    title: "Photo Editing",
    paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa quiselit maximus ullamcorper. Ut euismod, lectus nec suscipit porta",
  },

  // Add more mock data objects as needed
];

function Section4() {
  return (
    <section className='our_services'>
      <div className='text-center mb-5' style={{ color: "white" }}>
        <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "20px" }} className='mb-0'>Our Services</p>
        <h1 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>WHAT WE OFFER</h1>
      </div>
      <Container>
        <Row>
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
                <Cards
                  image={cardData.image}
                  title={cardData.title}
                  paragraph={cardData.paragraph}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
    </section>
  );
}

export default Section4;
