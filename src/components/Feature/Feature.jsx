import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import "./feature.css"


const FeatureData = [
    {
      title: "Quick Learning",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
      icon: "ri-draft-line",
    },
  
    {
      title: "All Time Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
      icon: "ri-discuss-line",
    },
  
    {
      title: "Certification",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
      icon: "ri-contacts-book-line",
    },
  ];

const Feature = () => {
  return (
    <div>
      <section>
        <Container>
            <Row>
                {
                    FeatureData.map((e,i)=>(
                        <Col lg="4" md="6" key={i}>
                            <div className="singleFeature text-center px-4">
                                <h2 className='mb-3'>
                                    <i class={e.icon}></i>
                                </h2>
                                <h6>{e.title}</h6>
                                <p>{e.desc}</p>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Feature
