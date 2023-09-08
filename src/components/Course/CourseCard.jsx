import React from 'react'

const CourseCard = ({title,imgUrl,lesson,rating,students}) => {
  return (
    <div className="singleCourseItem">
      <div className="courseImg">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="courseDetails">
        <h6 className="courseTitle mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i class="ri-book-open-line"></i> {lesson} Lessons
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {students}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {rating}K
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <a href="#enroll"> Enroll Now</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
