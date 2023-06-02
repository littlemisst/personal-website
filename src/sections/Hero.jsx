import React from 'react'
import { Link } from 'react-scroll';
import Spline from '@splinetool/react-spline';

import Page from '../components/Page'

function Hero() {
  return (
    <Page
      children={
        <>
          <div className="grid grid-cols-3 sm:grid-cols-5 absolute">
            <div className='px-16 col-start-1 sm:col-start-2 col-end-4 sm:px-2'>
              <div className='flex justify-start items-center pb-3'>
                <span className='text-sm font-nunito font-bold text-gray'>Hello</span><span className="wave ml-2">👋</span>
              </div>
              <div className='flex justify-start items-center pb-4'>
                <h1 className='text-2xl sm:text-3xl font-nunito font-bold text-indigo'>I’m Teofy - Software Developer and an aspiring UX/UI Designer.</h1>
              </div>
              <div className='flex justify-start items-center pb-2'>
                <span className='text-xs font-nunito text-gray'>Finding joy in solving little things like putting a semi-colon in the error found in line 32.</span>
              </div>
              <div className='flex justify-start items-center pt-8'>
                <Link to='about' smooth={true}>
                  <button className='rounded-full bg-light-purple py-2 px-4 text-xs font-bold font-nunito text-white'>
                    Get to know me</button>
                </Link>
              </div>
            </div>
          </div>
          <div className='hidden sm:block'><Spline scene="https://prod.spline.design/zORW-DjtTQQz1CJM/scene.splinecode" /></div>
        </>
      }
      id='hero'
    />
  )
}

export default Hero