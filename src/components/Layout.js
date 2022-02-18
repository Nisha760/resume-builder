import React from 'react'
import '../styles/global.css'
import Header from './subcomponents/Header'

function Layout({children}) {
  return (
    <div className='container'>
        <div className='header'>
            <Header/>
        </div>
        <div className='main'>
            {children}
        </div>
        <div className='footer'>
            Resume Builder
        </div>
    </div>
  )
}

export default Layout