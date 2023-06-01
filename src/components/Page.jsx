import React from 'react'

function Page({ children, id}) {
    const pageBg = {
      hero: 'bg-white',
      about: 'bg-purple',
      projects: 'bg-white'}
     //put bg for each section

    return (
        <section className={pageBg[id]} id={id}>
          <div className="flex items-center justify-center h-screen">
            {children}
          </div>
        </section>
    
    )
}

export default Page