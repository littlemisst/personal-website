import React from 'react'

function Page({ children, id}) {
    const pageBg = [] //put bg for each section

    return (
        <section id={id}>
          <div className="flex items-center justify-center h-screen">
            {children}
          </div>
        </section>
    
    )
}

export default Page