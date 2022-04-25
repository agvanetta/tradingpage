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
            <a href='tradingpage'>Free stocks</a>
            <a href='tradingpage'>Portfolio</a>
            <a href='tradingpage'>Cash</a>
            <a href='tradingpage'>Messages</a>
            <a href='tradingpage'>Account</a>
        </div>
    </div>
  )
}

export default Header