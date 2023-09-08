import React, { useState } from 'react'
import { Container, Row,Col } from 'reactstrap'
import "./chooseUs.css"
import chooseUs from "./../../assests/why-choose-us.png"
import ReactPlayer from 'react-player'

const ChooseUs = () => {

    const [showVideo,setShowVideo] = useState(false)
  return (
    <section>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="chooseContent">
                        <h2>Why Choose Us?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sunt fugiat, dignissimos laborum sed quaerat vel, modi quam soluta, non excepturi possimus. Id corrupti, magni ducimus culpa rem alias molestias! Cupiditate neque ullam eius, earum quibusdam deserunt, nihil, illum inventore rem consequatur animi hic recusandae ex architecto doloribus ratione. Delectus, id ex. Ipsam, sint velit.</p>
                    </div>
                </Col>

                <Col lg="6">
                    <div className="chooseImg">

                        {
                            showVideo ? (
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=kf6yyxMck8Y"
                                    controls
                                    width="100%"
                                    height="300px"
                                />
                            ) : (
                                <img src={chooseUs} alt="" className='w-100' />
                            )
                        }
                        

                        {
                            !showVideo && <span className="playIcon">
                            <i class="ri-play-circle-line"
                                onClick={()=>setShowVideo(!showVideo)}
                            ></i>
                        </span>
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ChooseUs
