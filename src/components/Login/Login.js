import React from 'react'
import "./Login.css"
import LoginImg from './login_img.jpg'
import LogoRight from '../robinlogo.svg'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='login'>
      <div className='login__left'>
      <img className='login__img' src={LoginImg}  alt="logo" />
        <div className='login__title'>
           <img className='login__title__logo' src={LogoRight} width={15} alt="logo" />
           <div className='login__title__text'>Robinhood</div>
        </div>
      </div>      
      <div className='login__right'>
        <div><img className='login__right__img' src={LogoRight} width={25} alt="logo"/></div>
        <div><input className='login__input' placeholder='Email'/></div>
        <div><input className='login__input' placeholder='Password'/></div>
        {/* <div>Olvidaste tu contraseña?</div> */}
        <div>
           <Link to="/" type="submit" >
             <button to="/" type="submit" className="login__singInButton">
                Sing In
            </button>
          </Link>
        </div>
        <div className='login__footer'>Desing Agustin Vanetta</div>
      </div>
    </div>
  )
}

export default Login