import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import Row from '../Row/Row'
import {FaHotel} from "react-icons/fa"

const TopBar = () => {
  return (
    <section className='topbar_section'>
            <Row>
                <nav className='topbar'>
                    <div className="logo-container">
                        <Link to="/"><FaHotel/> <span>Booking</span> </Link>
                    </div>
                    <ul className="user-info">
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </Row>
    </section>
  )
}

export default TopBar