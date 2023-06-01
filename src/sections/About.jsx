import React from 'react'
import Page from '../components/Page'

function About() {
  return (
    <Page 
      children={
        <div>
          this is my about me section
        </div>
      }
      id='about'
    />
  )
}

export default About