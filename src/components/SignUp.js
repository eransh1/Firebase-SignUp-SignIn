import React from 'react'
import "../css/SignUp.css"

const SignUp = ({handleRegisterBtnClick,setRegisterEmail,setRegisterPass,handleLoginBtnClick}) => {
  return (
    <>
        <div id='signup'>
        <h1 className='signup-heading-text'>Register</h1>
            <div className='signup'>
            <input onChange={(e)=>{setRegisterEmail(e.target.value)}} type="email" name='email' id='email' placeholder='Email' required/>
            <input onChange={(e)=>{setRegisterPass(e.target.value)}} type="password" name='pass' id='pass' placeholder='Password' required />
            <button onClick={handleRegisterBtnClick} id='register-button' className='btn btn-lg btn-primary'>Register</button>
            <p className='signup-text'>Already Have a Account ?  <span onClick={handleLoginBtnClick} className='signup-textt'> Log In</span></p>
            </div>
        </div>
    </>
  )
}

export default SignUp