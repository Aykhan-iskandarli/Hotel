import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from './index'

const Navbar = () => {
  return (
    <div className='navbar_section'>
      <nav className='navbar'>
         <ul className='menu-list'>
         {
                menu.map(men =>(
                    <li key={men.id}>
                        <Link to={men.url}>{men.icon} <span>{men.title}</span> </Link>
                    </li>
                ))
            }
         </ul>

        </nav>
    </div>
  )
}

export default Navbar