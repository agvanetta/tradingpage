import React from 'react'
import "./Bannermid.css"

function Bannermid() {
  return (
    <div className='bannermid'>
        <div>
            <img
            className="banner__image"
            src="https://www.larepublica.com/wp-content/uploads/2021/02/Robinhood.png"
            alt=""
            />
        </div>
        <div className='bannermid__text'>
            <p>Investing is simple here</p>
        </div>
    </div>
  )
}

export default Bannermid