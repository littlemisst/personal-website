import React from 'react'
import grid from "../assets/about-grid.png"

function Page({ children, id }) {

  return (
    <section className={id !== 'about' ? 'bg-white' : 'bg-indigo'} id={id}>
      <div className="flex items-center justify-center h-screen">
        {children}
      </div>
    </section>

  )
}

export default Page