import React from 'react'
import Logo from '../img/robinlogo.svg'
import "./Header.css"

function Header() {
  return (
    <div className='header__wrapper'>
        {/*logo*/}
        <div className='header__logo'>
            <img src={Logo} width={25} alt="logo" />
        </div>
        {/*search*/}
        <div className='header__search'>
            <div className='header_searchContainer'>
                <input placeholder='Search' type='text' />
            </div>
        </div>
        {/*menuitems*/}
        <div className='header__menuItems'>
            <a href='a'>Free stocks</a>
            <a href='a'>Portfolio</a>
            <a href='a'>Cash</a>
            <a href='a'>Messages</a>
            <a href='a'>Account</a>
        </div>
    </div>
  )
}

export default Header