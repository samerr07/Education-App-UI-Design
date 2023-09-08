import React from 'react'
import courseImg1 from "./../../assests/graphics-design.png"
import courseImg2 from "./../../assests/web-development.png"
import courseImg3 from "./../../assests/ui-ux.png"
import { Container, Row,Col } from 'reactstrap'
import CourseCard from './CourseCard'
import "./course.css"

const Course = () => {

    const coursesData = [
        {
          id: "01",
          title: "Web Design BootCamp-2022 for Beginners",
          lesson: 12,
          students: 12.5,
          rating: 5.9,
          imgUrl: courseImg1,
        },
      
        {
          id: "02",
          title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
          lesson: 12,
          students: 12.5,
          rating: 5.9,
          imgUrl: courseImg2,
        },
      
        {
          id: "03",
          title: "UI/UX BootCamp for Beginners in 2022",
          lesson: 12,
          students: 12.5,
          rating: 5.9,
          imgUrl: courseImg3,
        },
      ];
  return (
    <div id='courses'>
      <section>
        <Container>
            <Row>
                <Col lg="12" className='mb-5'>
                    <div className="courseTop d-flex justify-content-between align-items-center">
                        <div className="courseTopLeft w-50">
                            <h2>Our Popular Courses</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero sunt beatae repellat veniam quidem facere autem aliquam maxime amet facilis!
                            </p>
                        </div>

                        <div className='w-50 text-end'>
                            <button className='btn'>See All</button>
                        </div>
                    </div>
                </Col>
                {
                    coursesData.map((e)=>(
                        <Col lg="4" md="6">
                            <CourseCard key={e.id}
                                imgUrl={e.imgUrl}
                                title={e.title}
                                rating={e.rating}
                                students={e.students}
                                lesson={e.lesson}
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

export default Course
