// import React, { useEffect, useState } from "react"
// import ReactStars from "react-rating-stars-component"

// import { Swiper, SwiperSlide } from "swiper/react"

// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"

// import "../../App.css"

// import { FaStar } from "react-icons/fa"

// import { Autoplay, FreeMode, Pagination } from "swiper/modules"

// import { apiConnector } from "../../services/apiConnector"
// import { ratingsEndpoints } from "../../services/apis"
// const reviews = [ { id: 1, user: { firstName: "Aarav", lastName: "Sharma", image: "", }, course: { courseName: "MERN Stack Development", }, rating: 5, review: "This course is amazing and very easy to understand. The concepts are explained clearly with practical examples.", }, { id: 2, user: { firstName: "Priya", lastName: "Verma", image: "", }, course: { courseName: "Web Development", }, rating: 4, review: "Really helpful course for beginners. The content is well structured and easy to follow.", }, { id: 3, user: { firstName: "Rahul", lastName: "Kumar", image: "", }, course: { courseName: "React Development", }, rating: 5, review: "I really enjoyed this course. The explanations are simple and the practical examples helped me a lot.", }, { id: 4, user: { firstName: "Ananya", lastName: "Gupta", image: "", }, course: { courseName: "JavaScript Mastery", }, rating: 4, review: "Good course with useful content. I learned many new concepts and improved my development skills.", }, { id: 5, user: { firstName: "Vikram", lastName: "Singh", image: "", }, course: { courseName: "Full Stack Development", }, rating: 5, review: "One of the best courses I have taken. Everything is explained step by step in a beginner friendly way.", }, { id: 6, user: { firstName: "Neha", lastName: "Patel", image: "", }, course: { courseName: "Frontend Development", }, rating: 4, review: "The course is very informative and the examples make difficult topics much easier to understand.", }, ]

// function ReviewSlider() {
//   const [reviews, setReviews] = useState([])
//   const truncateWords = 15

//   useEffect(() => {
//     ;(async () => {
//       const { data } = await apiConnector(
//         "GET",
//         ratingsEndpoints.REVIEWS_DETAILS_API
//       )
//       if (data?.success) {
//         setReviews(data?.data)
//       }
//     })()
//   }, [])

//   // console.log(reviews)

//   return (
//     <div className="text-white">
//       <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
//         <Swiper
//           slidesPerView={4}
//           spaceBetween={25}
//           loop={true}
//           freeMode={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           modules={[FreeMode, Pagination, Autoplay]}
//           className="w-full "
//         >
//           {reviews.map((review, i) => {
//             return (
//               <SwiperSlide key={i}>
//                 <div className="flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25">
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={
//                         review?.user?.image
//                           ? review?.user?.image
//                           : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
//                       }
//                       alt=""
//                       className="h-9 w-9 rounded-full object-cover"
//                     />
//                     <div className="flex flex-col">
//                       <h1 className="font-semibold text-richblack-5">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
//                       <h2 className="text-[12px] font-medium text-richblack-500">
//                         {review?.course?.courseName}
//                       </h2>
//                     </div>
//                   </div>
//                   <p className="font-medium text-richblack-25">
//                     {review?.review.split(" ").length > truncateWords
//                       ? `${review?.review
//                           .split(" ")
//                           .slice(0, truncateWords)
//                           .join(" ")} ...`
//                       : `${review?.review}`}
//                   </p>
//                   <div className="flex items-center gap-2 ">
//                     <h3 className="font-semibold text-yellow-100">
//                       {review.rating.toFixed(1)}
//                     </h3>
//                     <ReactStars
//                       count={5}
//                       value={review.rating}
//                       size={20}
//                       edit={false}
//                       activeColor="#ffd700"
//                       emptyIcon={<FaStar />}
//                       fullIcon={<FaStar />}
//                     />
//                   </div>
//                 </div>
//               </SwiperSlide>
//             )
//           })}
//           {/* <SwiperSlide>Slide 1</SwiperSlide> */}
//         </Swiper>
//       </div>
//     </div>
//   )
// }

// export default ReviewSlider








import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

import "../../App.css"

import { FaStar } from "react-icons/fa"

import { Autoplay } from "swiper/modules"

const reviews = [
  {
    id: 1,
    user: {
      firstName: "Aarav",
      lastName: "Sharma",
      image: "",
    },
    course: {
      courseName: "MERN Stack Development",
    },
    rating: 5,
    review:
      "This course is amazing and very easy to understand. The concepts are explained clearly with practical examples.",
  },
  {
    id: 2,
    user: {
      firstName: "Priya",
      lastName: "Verma",
      image: "",
    },
    course: {
      courseName: "Web Development",
    },
    rating: 4,
    review:
      "Really helpful course for beginners. The content is well structured and easy to follow.",
  },
  {
    id: 3,
    user: {
      firstName: "Rahul",
      lastName: "Kumar",
      image: "",
    },
    course: {
      courseName: "React Development",
    },
    rating: 5,
    review:
      "I really enjoyed this course. The explanations are simple and the practical examples helped me a lot.",
  },
  {
    id: 4,
    user: {
      firstName: "Ananya",
      lastName: "Gupta",
      image: "",
    },
    course: {
      courseName: "JavaScript Mastery",
    },
    rating: 4,
    review:
      "Good course with useful content. I learned many new concepts and improved my development skills.",
  },
  {
    id: 5,
    user: {
      firstName: "Vikram",
      lastName: "Singh",
      image: "",
    },
    course: {
      courseName: "Full Stack Development",
    },
    rating: 5,
    review:
      "One of the best courses I have taken. Everything is explained step by step in a beginner friendly way.",
  },
  {
    id: 6,
    user: {
      firstName: "Neha",
      lastName: "Patel",
      image: "",
    },
    course: {
      courseName: "Frontend Development",
    },
    rating: 4,
    review:
      "The course is very informative and the examples make difficult topics much easier to understand.",
  },
]

function ReviewSlider() {
  const truncateWords = 15

  return (
    <div className="w-full py-10 text-white">

      <Swiper
        spaceBetween={25}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="w-full"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>

            <div className="min-h-[180px] rounded-lg bg-richblack-800 p-4">

              {/* User */}
              <div className="flex items-center gap-4">

                <img
                  src={
                    review.user.image
                      ? review.user.image
                      : `https://api.dicebear.com/5.x/initials/svg?seed=${review.user.firstName}%20${review.user.lastName}`
                  }
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div className="flex flex-col">

                  <h1 className="font-semibold text-richblack-5">
                    {review.user.firstName} {review.user.lastName}
                  </h1>

                  <h2 className="text-xs font-medium text-richblack-400">
                    {review.course.courseName}
                  </h2>

                </div>
              </div>

              {/* Review */}
              <p className="mt-4 min-h-[60px] text-sm font-medium text-richblack-25">
                {review.review.split(" ").length > truncateWords
                  ? `${review.review
                      .split(" ")
                      .slice(0, truncateWords)
                      .join(" ")} ...`
                  : review.review}
              </p>

              {/* Rating */}
              <div className="mt-3 flex items-center gap-2">

                <span className="font-semibold text-yellow-100">
                  {review.rating.toFixed(1)}
                </span>

                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={
                        star <= review.rating
                          ? "text-yellow-100"
                          : "text-richblack-500"
                      }
                    />
                  ))}
                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default ReviewSlider

