import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import aboutImg from "../.././assests/about-us.png"
import CountUp from 'react-countup';
import "./aboutUs.css"


const AboutUs = () => {
  return (
    <div id='about'>
      <section>
        <Container>
            <Row>
                <Col lg="6" md="6">
                <div className="aboutImg">
                    <img src={aboutImg} alt="" className='w-100' />
                </div>
                </Col>
                <Col lg="6" md="6">
                    <div className="aboutContent">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vel ullam perferendis pariatur? Nobis possimus, nam recusandae sapiente quia obcaecati?</p>

                        <div className="aboutCounter">
                            <div className='d-flex gap-5 align-items-center'>
                                <div className="singleCounter">
                                    <span className="counter">
                                        <CountUp
                                            start={0}
                                            end={25}
                                            duration={2}
                                            suffix='K'
                                        />
                                    </span>

                                    <p className='counterTitle'>Completed Projects</p>
                                </div>
                                <div className="singleCounter">
                                    <span className="counter">
                                        <CountUp
                                            start={0}
                                            end={12}
                                            duration={2}
                                            suffix='M'
                                        />
                                    </span>
                                    <p className='counterTitle'>Patient Around World</p>
                                </div>
                            </div>

                            <div className='d-flex gap-5 align-items-center'>
                                <div className="singleCounter">
                                    <span className="counter">
                                        <CountUp
                                            start={0}
                                            end={95}
                                            duration={2}
                                            suffix='M'
                                        />
                                    </span>

                                    <p className='counterTitle'>Ideas Raised Funds</p>
                                </div>
                                <div className="singleCounter">
                                    <span className="counter">
                                        <CountUp
                                            start={0}
                                            end={5}
                                            duration={2}
                                            suffix='K'
                                        />
                                    </span>
                                    <p className='counterTitle'>Categories Served</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default AboutUs
