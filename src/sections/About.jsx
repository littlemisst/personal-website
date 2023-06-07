import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Page from '../components/Page'
import grid from "../assets/about-grid-stickers.png"
import meDrawing1 from "../assets/about-me-1.png"
import meDrawing2 from "../assets/about-me-2.png"
import heartSticker from "../assets/heart-sticker.png"
import starSticker from "../assets/star-sticker.png"

import data from "../data/data.json"

function About() {
  const [showRandomFact, setShowRandomFact] = useState(false);
  const [randomFact, setRandomFact] = useState("")

  const aboutData = data.about

  const redirectToLinkedIn = () => {
    window.open("https://linkedin.com/in/teofy-rabanes", '_blank')
  }

  const redirectToGithub = () => {
    window.open("https://github.com/littlemisst", '_blank')
  }

  

  const generateRandomFact = () => {
    const facts = aboutData.facts
    const factsLength = facts.length

    const randomIndex = Math.floor(Math.random() * factsLength)

    setRandomFact(facts[randomIndex])
  }

  const handleViewMoreFacts = () => {
    setShowRandomFact(!showRandomFact)
    generateRandomFact()
  }
  

  return (
    <Page
      children={
        <>
          <div className="w-screen h-screen flex items-center relative">
            <div className="grid grid-cols-12">
              <div className='flex justify-start col-start-2 lg:col-start-3 col-end-8 mb-6 lg:px-16'>
                <span className='text-xs sm:text-sm font-gochi text-pink pt-8'>About Me 👩‍💻</span>
              </div>
              <div className='flex justify-start col-start-2 lg:col-start-3 col-end-12 md:col-end-6 sm:mx-8 mb-6'>
                <h1 className='items-center text-4xl md:text-7xl font-gochi text-white md:text-right'>Hey, I'm Teofy Rabanes</h1>
              </div>
              <div className='col-start-2 md:col-start-7 lg:col-start-6 col-end-11 lg:col-end-10 sm:ml-6 z-50'>
                <p className='text-xs sm:text-sm font-gochi text-pink text-left mb-3'>My Tech Experience<span><img className="wave w-3 ml-3" src={starSticker}/></span></p>
                <p className={`text-xs sm:text-sm font-gochi text-white text-left ${showRandomFact ? 'mb-6' : 'mb-3'}`}>
                  {aboutData.description} 
                </p>
                <button className={`${showRandomFact ? 'hidden' : 'block'} font-gochi text-teal text-sm hover:underline z-50`} onClick={handleViewMoreFacts}>Know More →</button>
                {showRandomFact && <>
                  <p className='text-xs sm:text-sm font-gochi text-pink text-left mb-3'>Random Fact About Me<span><img className="wave w-3 ml-3" src={heartSticker}/></span></p>
                  <p className='text-xs sm:text-sm font-gochi text-white text-left'>
                    {/* generate a random info here */}
                    {randomFact}
                  </p>
                  <button className={' font-gochi text-teal text-sm hover:underline z-50 mt-3'} onClick={generateRandomFact}>Another Random Fact 🫣</button>
                </>}
              </div>
              <div className='flex md:justify-end col-start-2 md:col-start-3 col-end-11 md:col-end-6 mb-6 sm:mx-6 lg:mx-8 mt-6'>
                <span className='text-xs sm:text-sm font-gochi text-white text-left md:text-right '>If you want to connect with me, you can find me here👇</span>
              </div>
              <div className='flex md:justify-end col-start-2 md:col-start-3 col-end-6 mb-6 sm:mx-6 lg:mx-8 z-50'>
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