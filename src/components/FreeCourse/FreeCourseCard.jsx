import React from 'react'

const FreeCourseCard = ({title,imgUrl,students,rating}) => {
  return (
    <div className="singleFreeCourse">
                        <div className="freeCourseImg mb-5">
                            <img src={imgUrl} alt="" className='w-100' />
                            <button className='btn freeBtn'>
                                Free
                            </button>
                        </div>

                        <div className='freeCourseDetail'>
                            <h6>{title}</h6>

                            <div className='d-flex align-items-center gap-5'>
                                <span className='d-flex align-items-center gap-2'>
                                    <i class="ri-user-line"></i>{students}k
                                </span>

                                <span className='d-flex align-items-center gap-2'>
                                    <i class="ri-star-fill"></i>{rating}k
                                </span>
                            </div>
                        </div>
                    </div>
  )
}

export default FreeCourseCard
