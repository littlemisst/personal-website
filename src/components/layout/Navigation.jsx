import React from 'react'

function Navigation() {
    return (
        <nav className="sticky top-0">
          <ul className="mx-20 flex justify-end">
            <li className="mr-4">
              <a href="/about" className="block px-4 py-2 text-sm font-nunito text-gray hover:text-purple">About</a>
            </li>
            <li>
              <a href="/projects" className="block px-4 py-2 text-sm font-nunito text-gray hover:text-purple">Projects</a>
            </li>
          </ul>
        </nav>
      );
}

export default Navigation