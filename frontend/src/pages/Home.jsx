import React from 'react'
import '../styles/home.css'

import { Container ,Row,Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedToursList from '../components/Featured-tours/FeaturedToursList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return <>
    <section>
      <Container>
        <Row>
          
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle Subtitle={'Book. Fly. Explore.'}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>Travel far enough to meet{" "}
                <span className='highlight'> yourself</span>
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quae. Ab similique deserunt exercitationem officiis totam velit facilis quis! Excepturi dignissimos dicta commodi adipisci alias ex fugiat explicabo voluptatibus nulla.</p>

            </div>
          </Col>
          
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <video src={heroVideo} alt="" controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box ">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          
          <SearchBar/>

        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">JETSETGO</h5>
            <h2 className="services__title">We offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>


    {/* ======================================featured tour section start================================= */}
    
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
          <Subtitle Subtitle={'Explore'}/>
          <h2 className="featured__tour-title">
            Our Featured Tours
          </h2>
          </Col>
          <FeaturedToursList />
        </Row>
      </Container>
    </section>

    {/* ======================================featured tour section end================================= */}


    {/* ============================================experience section starts=============================== */}

    <section>
      <Container>
        <Row>
          <Col lg='6'>
          
          <div className="experience__content">
            <Subtitle Subtitle={'Experience'}/>
            <h2>With all our experince <br /> we will serve you</h2>
            <p>Lorem ipsum, dolor sit ame elit Modi voluptate aperiam <br />
            iusto reiciendis aliquid kahsdka aliquam, delectus doloribus, culpa sunt.</p>
          </div>

          <div className="counter__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span>12k+</span>
              <h6>Successful Trips</h6>
            </div>
            <div className="counter__box">
              <span>2k+</span>
              <h6>Regular clients</h6>
            </div>
            <div className="counter__box">
              <span>15</span>
              <h6>Years experince</h6>
            </div>
          </div>
          </Col>
          <Col lg='6'>
            <div className='experience__img'>
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* ============================================experience section ends=============================== */}

    {/* =======================================gallery section starts==================================== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
            <Subtitle Subtitle={'Gallery'}/>
            <h2 className='gallery__title'>
              Visit our customer's tour gallery
            </h2>
            </Col>

            <Col lg='12'>
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
    {/* =======================================gallery section ends==================================== */}

    {/* ====================================testimonial section starts================================= */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'} />
            <h2 className="testimonial__title">What our fans say about us</h2>
          </Col>

          <Col lg='12'>
          <Testimonials />
          </Col>
        </Row>
      </Container>
    </section>

    {/* ====================================testimonial section ends================================= */}

    <Newsletter />
  </>
}

export default Home