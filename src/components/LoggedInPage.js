import React from 'react'
import "../css/LoggedInPage.css"


const LoggedInPage = ({handleLogoutBtnClick,user}) => {
  return (
   <>
   <div id='logged-in-page'>
   <div className='logged-in-page'>

    <h1 className='user-name'>{user?.email}</h1>

    <button onClick={handleLogoutBtnClick} className='btn btn-primary btn-lg logout-btn'>Logout</button>
   </div>

   </div>
   </>
  )
}

export default LoggedInPage