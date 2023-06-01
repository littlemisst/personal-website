import React from 'react'
import Page from '../components/Page'

function Hero() {
    return (
        <Page 
          children={
            <div>
              this is my hero section
            </div>
          }
          id='hero'
        />
    )
}

export default Hero