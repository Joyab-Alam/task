import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function AppBar() {
    return (
        <div className="appbar__parent">
           <Header/> 
           <Footer/>
        </div>
    )
}

export default AppBar
