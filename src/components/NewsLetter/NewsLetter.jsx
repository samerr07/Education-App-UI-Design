import React from 'react'
import { Container, Row,Col } from 'reactstrap'
import "./newsLetter.css"

const NewsLetter = () => {
  return (
    <section>
        <Container className='newsLetter'>
            <Row>
                <Col lg="12" className="text-center">
                    <h2 className='mb-4'>Subscribe Our Newsletter</h2>
                    <div className="subscribe">
                        <input type='text' placeholder='Email'/>
                        <button className='btn'>Subscribe</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewsLetter
