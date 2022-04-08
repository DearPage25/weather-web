import React from 'react'

export const NavBar = () => {
  const handleInputChange = (e) => {
    console.log(e.target.value)
  }
  return (

        <nav className='navbar'>
        <form action="">
        <input
          type="search"
          onChange={handleInputChange}
          required />
          <i className="fa fa-search"></i>
        </form>
        </nav>
  
  )
}
  