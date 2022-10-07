import React from 'react'
import "../css/Login.css"

const LogIn = ({setLoginEmail,setLoginPass,handleLoginBtnClick,handleRegisterBtnClick}) => {
  return (
    <>
    
       <div id='login'>
       <h1 className='login-heading-text'>Log In</h1>
            <div className='login'>
            <input onChange={(e)=>setLoginEmail(e.target.value)} type="email" name='login-email' id='login-email' placeholder='Email' required/>
            <input onChange={(e)=>setLoginPass(e.target.value)} type="password" name='login-pass' id='login-pass' placeholder='Password' required />
            <button onClick={handleLoginBtnClick} id='login-button' className='btn btn-lg btn-primary'>Login</button>
            <p className='login-text'>Don't Have a Account? <span onClick={handleRegisterBtnClick} className='login-textt'>Register</span></p>
            </div>
        </div>
        </>
  )
}

export default LogIn