import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import "./freeCourse.css"
import courseImg1 from "./../../assests/kids-learning.png"
import courseImg2 from "./../../assests/web-development.png"
import courseImg3 from "./../../assests/seo.png"
import courseImg4 from "./../../assests/ui-ux.png"
import FreeCourseCard from './FreeCourseCard'


const freeCourseData = [
    {
      id: "01",
      title: "Basic Web Development Course",
      imgUrl: courseImg1,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "02",
      title: "Coding for Junior Basic Course",
      imgUrl: courseImg2,
      students: 5.3,
      rating: 1.7,
    },
  
    {
      id: "03",
      title: "Search Engine Optimization - Basic",
      imgUrl: courseImg3,
      students: 5.3,
      rating: 1.7,
    },
  
    {
      id: "04",
      title: "Basic UI/UX Design - Figma",
      imgUrl: courseImg4,
      students: 5.3,
      rating: 1.7,
    },
  ];

const FreeCourse = () => {
  return (
    <div>
      <section>
        <Container>
            <Row>
                <Col lg="12" className="text-center mb-5">
                    <h2 className='fw-bold'>Our Free Courses</h2>
                </Col>

                {
                    freeCourseData.map((e)=>(
                        <Col lg="3" md="4" className='mb-4' key={e.id}>
                            <FreeCourseCard
                                title={e.title}
                                imgUrl={e.imgUrl}
                                students={e.students}
                                rating={e.rating}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default FreeCourse
