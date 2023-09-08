import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import heroImg from "./../../assests/hero-img1.png"
import "./heroScetion.css"

const HeroSection = () => {
  return (
    <div id='home'>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="heroContent">
                <h2 className='mb-4'>Anytime Anywhere <br/> Learn on your <br/> Suitable Schedule</h2>

                <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
                </p>

                <div className="search">
                  <input type="text" placeholder='Search' />
                  <button className='btn'>Search</button>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
            <img src={heroImg} alt="" className='w-100' /></Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default HeroSection
