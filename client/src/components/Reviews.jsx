/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Review.css";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa6";
import profilePic from "../assets/profilePic.jpg";
import { Avatar } from "flowbite-react";

const Reviews = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customer
      </h2>
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7 flex flex-col justify-center items-center">
                <p className="mb-5 text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus nihil veniam ut similique pariatur provident ipsa
                  deserunt culpa tenetur quos!
                </p>
                <Avatar
                  alt="Avatar of User"
                  img={profilePic}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Nazeed Khan</h5>
                <p className="text-base">Software Developer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7 flex flex-col justify-center items-center">
                <p className="mb-5 text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus nihil veniam ut similique pariatur provident ipsa
                  deserunt culpa tenetur quos!
                </p>
                <Avatar
                  alt="Avatar of User"
                  img={profilePic}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Nazeed Khan</h5>
                <p className="text-base">Software Developer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7 flex flex-col justify-center items-center">
                <p className="mb-5 text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus nihil veniam ut similique pariatur provident ipsa
                  deserunt culpa tenetur quos!
                </p>
                <Avatar
                  alt="Avatar of User"
                  img={profilePic}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Nazeed Khan</h5>
                <p className="text-base">Software Developer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7 flex flex-col justify-center items-center">
                <p className="mb-5 text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus nihil veniam ut similique pariatur provident ipsa
                  deserunt culpa tenetur quos!
                </p>
                <Avatar
                  alt="Avatar of User"
                  img={profilePic}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Nazeed Khan</h5>
                <p className="text-base">Software Developer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7 flex flex-col justify-center items-center">
                <p className="mb-5 text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus nihil veniam ut similique pariatur provident ipsa
                  deserunt culpa tenetur quos!
                </p>
                <Avatar
                  alt="Avatar of User"
                  img={profilePic}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Nazeed Khan</h5>
                <p className="text-base">Software Developer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7 flex flex-col justify-center items-center">
                <p className="mb-5 text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus nihil veniam ut similique pariatur provident ipsa
                  deserunt culpa tenetur quos!
                </p>
                <Avatar
                  alt="Avatar of User"
                  img={profilePic}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Nazeed Khan</h5>
                <p className="text-base">Software Developer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7 flex flex-col justify-center items-center">
                <p className="mb-5 text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus nihil veniam ut similique pariatur provident ipsa
                  deserunt culpa tenetur quos!
                </p>
                <Avatar
                  alt="Avatar of User"
                  img={profilePic}
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Nazeed Khan</h5>
                <p className="text-base">Software Developer</p>
              </div>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
