import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCards, EffectCoverflow, Pagination } from "swiper";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import Page from '../components/Page'
import grid from "../assets/projects-grid.png"

function Projects() {

  const CardContent = ({ heading, techStack, roles, description, githubLink, liveSite }) => {
    return (
      <div className='flex content-center flex-col p-8'>
        <div className='mb-3'>
          <span className='text-lg font-nunito text-white font-bold'>{heading}</span>
        </div>
        <div className='mb-3'>
          {techStack.map((tech, index) => {
            return (
              <span key={index} className='text-xs font-nunito font-light text-light-purple bg-white rounded-full py-1 px-2 mr-2'>{tech}</span>
            )
          })}
        </div>
        <div className='mb-3'>
          <span className='text-sm font-nunito font-bold text-white mr-2'>My Role:</span>
          {roles.map((role, index) => {
            return (
              <span key={index} className='text-xs font-nunito font-light text-white border border-white rounded-full py-1 px-2 mr-2'>{role}</span>
            )
          })}
        </div>
        <div className='mb-3'>
          <p className='text-xs font-nunito text-white leading-tight'>{description}</p>
        </div>
        <div className='flex justify-end'>
          <button className="mr-4" onClick={() => {
            window.open(githubLink, '_blank')
          }}>
            <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} />
          </button>
          <button onClick={() => {
            window.open(liveSite, '_blank')
          }}>

            <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ color: "#ffffff" }} />
          </button>
        </div>

      </div>
    )
  }
  return (
    <Page
      children={
        <div className="w-screen h-screen flex flex-col items-center justify-center relative">
          <div className='mb-6'>
            <span className='text-xs sm:text-sm font-nunito text-gray font-bold'>My Projects 🚀</span>
          </div>
          <div className='mb-6'>
            <span className='text-xl sm:text-2xl font-nunito text-indigo font-bold'>This is what I have so far...</span>
          </div>
          <div className='container'>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide><CardContent heading="Slide 1" techStack={['html', 'css']} roles={["UI/UX", "Developer"]} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet orci imperdiet, elementum dui nec, ullamcorper magna. Vestibulum eu aliquet diam. Etiam sem ante, dapibus a neque nec, egestas luctus mi. Fusce vitae consectetur urna, non mattis elit. Nullam aliquam erat eget orci molestie convallis. Ut convallis pellentesque leo, a sodales arcu maximus in." /></SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
          <img
              className='w-full h-full object-cover absolute'
              src={grid}
              alt="grid-bg"
            />
        </div>
      }
      id='projects'
    />
  )
}

export default Projects