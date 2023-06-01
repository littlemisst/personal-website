import React, {useState} from 'react'
import { Link } from 'react-scroll';

function Navigation() {
    const navLinks = [
        {
          id: 0,
          sectionName: 'hero',
          label: "Home",
        },
        {
          id: 1,
          sectionName: 'about',
          label: "About",
        },
        {
          id: 2,
          sectionName: 'projects',
          label: "Projects",
        }
    ]

    const sections = document.querySelectorAll('section')

    const [currentSectionOnScroll, setCurrentSectionOnScroll] = useState('') //scroll
    const [currentSectionOnClick, setCurrentSectionOnClick] = useState(0) //clicked

    const handleClick = (id) => {
        setCurrentSectionOnClick(id)
    }

  window.addEventListener('scroll', () => {
    let current = ''
    sections.forEach((section) => {
      const sectionTop = section.offsetTop

      if (scrollY >= sectionTop) {
        current = section.getAttribute('id')

      }
    })
    setCurrentSectionOnScroll(current)
    setCurrentSectionOnClick(null)
  })


    return (
        <nav className="sticky top-0">
          <ul className="mx-20 flex justify-end">
            {navLinks.map((link) => {
                return (
                <li key={link.id} className="mr-4">
                    <Link to={link.sectionName} smooth={true}>
                        <button className={`font-nunito text-sm block px-4 py-2 ${currentSectionOnClick === link.id || currentSectionOnScroll === link.sectionName ? 'text-purple font-bold' : 'text-gray'} hover:text-purple`} onClick={() => handleClick(link.id)}>
                            {link.label}
                        </button>
                    </Link>
                </li>
                )
            })}
            
          </ul>
        </nav>
      );
}

export default Navigation

{/* <button className={`rounded-full p-3 border-2 border-pink hover:bg-dark-purple ${currentSectionOnClick === link.id || currentSectionOnScroll === link.sectionName ? 'bg-dark-purple text-white' : 'bg-white text-pink'}`} onClick={() => handleClick(link.id)} */}

// className="block px-4 py-2 text-sm font-nunito text-gray hover:text-purple"