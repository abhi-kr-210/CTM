import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../assets/g1.jpg';
import img2 from '../../assets/g2.jpg';
import img3 from '../../assets/g3.jpg';
import img4 from '../../assets/g4.jpg';
import img5 from '../../assets/g5.jpg';
import img6 from '../../assets/g6.jpg';
import img7 from '../../assets/g7.jpg';

const mockData = [
  {
    id: '0001',
    image: img2,
  },
  {
    id: '0002',
    image: img1,
  },
  {
    id: '0003',
    image: img3,
  },
  {
    id: '0004',
    image: img4,
  },
  {
    id: '0005',
    image: img6,
  },
  {
    id: '0006',
    image: img5,
  },
  {
    id: '0007',
    image: img7,
  },
  {
    id: '0001',
    image: img1,
  },
];

function Section3() {
  return (
    <section className="photo_gallery_section">
      <Container>
        <Row className='d-flex justify-content-center'>
          <Col lg={11} className="text-center">
            <h2 className='mb-0' style={{fontFamily:"serif",fontWeight:600,color:"rgb(23 68 65)" ,
              textShadow: "rgba(0, 0, 0, 0.5) 1px 1px 2px"
            }}>Photo Gallery</h2>
            <p className='mb-4 mt-0' style={{color:"#949494"}}>Capturing Unforgettable Moments & Journeys</p>
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              
              slidesPerView={3}
              loop={true}
              speed={600} // Adjusting the speed for a smoother transition
              coverflowEffect={{
                rotate:9,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              className="mySwiper "
              
            breakpoints={{
              250: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 3,
              },

            }}

            >
              {mockData.map((galimage, index) => (
                <SwiperSlide key={index} className='mx-1'>
                  <div >
                    <img src={galimage.image} className="img-fluid photo_gallery_img_box "  alt="gallery item" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>

      
    </section>
  );
}

export default Section3;
