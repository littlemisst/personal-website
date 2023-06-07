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

import data from "../data/data.json"

function Projects() {

  const projects = data.projects

  console.log()
  const CardContent = ({ heading, techStack, roles, description, githubLink, liveSite }) => {
    return (
      <div className='flex content-center flex-col p-8'>
        <div className='mb-3'>
          <span className='text-lg font-nunito text-white font-bold'>{heading}</span>
        </div>
        <div className='mb-3'>
          {techStack.map((tech, index) => {
            return (
              <span key={index} className='text-xs font-nunito font-light text-light-purple bg-white rounded-full py-1 px-2 mr-1'>{tech}</span>
            )
          })}
        </div>
        <div className='grid grid-flow-col auto-cols-max mb-3'>
          <div className='text-sm font-nunito font-bold text-white mr-2'>My Role:</div>
          {roles.map((role, index) => {
            return (
              <div key={index} className='text-xs font-nunito font-light text-white border border-white rounded-full py-1 px-2 mr-1'>{role}</div>
            )
          })}
        </div>
        <div className='mb-3'>
          <p className='text-xs font-nunito text-white leading-tight'>{description}</p>
        </div>
        <div className='flex justify-end'>
          {githubLink !== "" && <button className="mr-4" onClick={() => {
            window.open(githubLink, '_blank')
          }}>
            <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} />
          </button>}

          {liveSite !== "" &&
            <button onClick={() => {
              window.open(liveSite, '_blank')
            }}>

              <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ color: "#ffffff" }} />
            </button>
          }
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
              {projects.map((project) => {
                return (
                  <SwiperSlide key={project.id}>
                    <CardContent
                      heading={project.title}
                      techStack={project.techStack}
                      roles={project.roles}
                      description={project.description}
                      githubLink={project.githubLink}
                      liveSite={project.liveLink}
                    />
                  </SwiperSlide>)
              })}
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