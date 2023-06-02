import React, { useState } from 'react'
import { Link } from 'react-scroll';
import logo from '../../assets/teofy-logo.png'
import logoMobile from '../../assets/logo-white.png'

function Navigation() {
	const navLinks = [
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


	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="fixed py-3 w-full">
			<div className="flex justify-between mx-2 sm:mx-12">
				<div className="flex items-center mr-4">
					<Link to="hero" smooth={true}>
						<button className="block px-4 py-2" onClick={() => handleClick(0)}>
							<img src={currentSectionOnClick === 1 || currentSectionOnScroll === 'about' ? logoMobile : logo} className="w-20" />
						</button>
					</Link>
				</div>
				<div className='flex flex-grow' />
				<div className="mr-4 hidden sm:block">
					<Link to='about' smooth={true}>
						<button className={`font-nunito text-sm block px-4 py-2 ${currentSectionOnClick === 1 || currentSectionOnScroll === 'about' ? 'text-white font-bold' : 'text-gray'}`} onClick={() => handleClick(1)}>
							About
						</button>
					</Link>
				</div>
				<div className="mr-4 hidden sm:block">
					<Link to='projects' smooth={true}>
						<button className={`font-nunito text-sm block px-4 py-2 ${currentSectionOnClick === 2 || currentSectionOnScroll === 'projects' ? 'text-purple font-bold' : 'text-gray'}`} onClick={() => handleClick(2)}>
							Projects
						</button>
					</Link>
				</div>

				<div className="-mr-2 flex sm:hidden">
					<button
						onClick={toggleMenu}
						type="button"
						className={`inline-flex items-center justify-center p-2 rounded-md ${currentSectionOnClick === 1 || currentSectionOnScroll === 'about' ? 'text-white' : 'text-purple'}  hover:text-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-light focus:ring-light-purple`}
						aria-controls="mobile-menu"
						aria-expanded={isOpen}
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className={`${isOpen ? 'hidden' : 'block'} h-5 w-5`}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
						<svg
							className={`${isOpen ? 'block' : 'hidden'} h-5 w-5`}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
			<div className={`${isOpen ? 'block' : 'hidden'} sm:hidden flex justify-center bg-light-purple drop-shadow-md`} id="mobile-menu">
				<div className="grid justify-items-center px-2 pt-2 pb-3 sm:px-3">
					{navLinks.map((link) => {
						return (
							<Link key={link.id} to={link.sectionName} smooth={true}>
								<button className={`font-nunito text-xs text-center block px-4 py-2 ${currentSectionOnClick === link.id || currentSectionOnScroll === link.sectionName ? 'text-white font-bold' : 'text-white'}`} onClick={() => handleClick(link.id)}>
									{link.label}
								</button>
							</Link>
						)
					})}
				</div>
			</div>
		</nav>
	);
}

export default Navigation