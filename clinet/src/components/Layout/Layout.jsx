import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = ({children,className}) => {
  return (
    <div className='layout'>
       <Header/>
        <div className="main-content">
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout