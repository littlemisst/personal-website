import React from 'react'
import { Link } from 'react-scroll';
import Spline from '@splinetool/react-spline';

import Page from '../components/Page'

function Hero() {
  return (
    <Page
      children={
        <div className='grid grid-cols-12 flex justify-start items-center'>
          <div className="col-start-2 sm:col-start-3 xl:col-start-4 col-end-12 md:col-end-8">
            <div className='flex justify-start items-center mb-3 '>
              <span className='text-sm font-nunito font-bold text-gray'>Hello</span><span className="wave ml-2 mb-1">👋</span>
            </div>
            <div className='flex justify-start items-center mb-4 '>
              <h1 className='text-2xl sm:text-3xl font-nunito font-bold text-indigo'>I'm Teofy - Software Developer and an aspiring UX/UI Designer.</h1>
            </div>
            <div className='flex justify-start items-center mb-2'>
              <span className='text-xs font-nunito text-gray'>Finding joy in solving little things like putting a semi-colon in the error found in line 32.</span>
            </div>
            <div className='flex justify-start items-center mt-8'>
              <Link to='about' smooth={true}>
                <button className='rounded-full bg-light-purple py-2 px-4 text-xs font-bold font-nunito text-white'>
                  Get to know me</button>
              </Link>
            </div>
          </div>
          <div className='hidden md:block col-start-8 col-end-12'><Spline scene="https://prod.spline.design/zORW-DjtTQQz1CJM/scene.splinecode" /></div>
        </div>
      }
      id='hero'
    />
  )
}

export default Hero