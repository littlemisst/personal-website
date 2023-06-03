import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Page from '../components/Page'
import grid from "../assets/about-grid-stickers.png"
import meDrawing1 from "../assets/about-me-1.png"
import meDrawing2 from "../assets/about-me-2.png"

function About() {

  const [showTechExperience, setShowTechExperience] = useState(false);
  const [showLeadExperience, setShowLeadExperience] = useState(false);

  const redirectToLinkedIn = () => {
    window.open("https://linkedin.com/in/teofy-rabanes", '_blank')
  }

  const redirectToGithub = () => {
    window.open("https://github.com/littlemisst", '_blank')
  }

  const handleViewMoreTech = () => {
    setShowTechExperience(!showTechExperience)
  };

  const handleViewMoreLead = () => {
    setShowLeadExperience(!showLeadExperience)
  }


  return (
    <Page
      children={
        <>
          <div className="w-screen h-screen flex items-center relative">
            <div className="grid grid-cols-12">
              <div className='flex justify-start sm:mx-8 mb-6 lg:px-16 col-start-2 lg:col-start-3 col-end-8 '>
                <span className='text-xs sm:text-sm font-gochi text-pink pt-8'>About Me 👩‍💻</span>
              </div>
              <div className='sm:mx-8 col-start-2 lg:col-start-3 col-end-12 md:col-end-6 flex justify-start mb-6'>
                <h1 className='text-4xl md:text-7xl font-gochi text-white md:text-right items-center'>Hey, I'm Teofy Rabanes</h1>
              </div>
              <div className='sm:ml-6 col-start-2 md:col-start-7 lg:col-start-6 col-end-11 lg:col-end-10 z-50'>
                <p className='text-xs sm:text-sm font-gochi text-white text-left mb-3'>An Overview</p>
                <p className={`text-xs sm:text-sm font-gochi text-white text-left ${showTechExperience ? 'mb-6' : 'mb-3'}`}>
                  I am a software developer based in Iloilo City, Philippines. I am a problem solver who specializes in frontend development, and also an active member of tech communities.
                </p>
                <button className={`${showTechExperience ? 'hidden' : 'block'} font-gochi text-teal text-sm hover:underline z-50`} onClick={handleViewMoreTech}>Know More →</button>
                {showTechExperience && <>
                  <p className='text-xs sm:text-sm font-gochi text-white text-left mb-3'>Tech Experience</p>
                  <p className={`text-xs sm:text-sm font-gochi text-white text-left ${showLeadExperience ? 'mb-6' : 'mb-3'}`}>
                  In college, I explored full-stack development and gained a good understanding of server-side and client-side technologies. While my focus is on front-end web development, I'm adaptable to different technologies required for projects. Lately, I've been learning and implementing UX principles and enhancing my UI design skills. I'm eager to expand my knowledge in this area.
                  </p>
                  <button className={`${showLeadExperience ? 'hidden' : 'block'} font-gochi text-teal text-sm hover:underline z-50`} onClick={handleViewMoreLead}>Know More →</button>
                </>}
                {showLeadExperience && <>
                  <p className='text-xs sm:text-sm font-gochi text-white text-left mb-3'>Leadership Experience</p>
                  <p className='text-xs sm:text-sm font-gochi text-white text-left'>
                  When I was a student, I held leadership roles to build tech communities at my university. I led the Google Developer Student Clubs - CPU chapter in 2019 and currently serve as the Vice President for Programs and Outreach in the DEVCON - Iloilo Chapter.
                  </p>
                </>}

              </div>
              <div className='col-start-2 md:col-start-3 col-end-11 md:col-end-6 flex md:justify-end mb-6 sm:mx-6 lg:mx-8 mt-6'>
                <span className='text-xs sm:text-sm font-gochi text-white text-left md:text-right '>If you want to connect with me, you can find me here👇</span>
              </div>
              <div className='col-start-2 md:col-start-3 col-end-6 flex md:justify-end mb-6 sm:mx-6 lg:mx-8 z-50'>
                <button className="pr-4 " onClick={redirectToGithub}>
                  <FontAwesomeIcon icon={faGithub} bounce style={{ color: "#ffffff", }} />
                </button>
                <button onClick={redirectToLinkedIn}>
                  <FontAwesomeIcon icon={faLinkedin} bounce style={{ color: "#ffffff", }} />
                </button>
              </div>
            </div>
            <img
              className='w-full h-full object-cover absolute'
              src={grid}
              alt="grid-bg"
            />
            <img
              className='w-6/12 sm:w-2/12 top-0 left-0 absolute'
              src={meDrawing1}
              alt="self drawing 1"
            />
            <img
              className='w-6/12 sm:w-2/12 absolute bottom-0 right-0 absolute'
              src={meDrawing2}
              alt="self drawing 2"
            />

          </div>
        </>

      }
      id='about'
    />
  )
}

export default About