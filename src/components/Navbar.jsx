import React from 'react'

function Navbar() {
  return (
    <div className='navbar-wrapper'>
        <h1 className='navbar-logo'>LOGO</h1>
        <nav className='navbar-menu'>
            <a href='#'>Home</a>
            <a href='#'>Browse</a>
            <a href='#'>Contact</a>
        </nav>
    </div>
  )
}

export default Navbar