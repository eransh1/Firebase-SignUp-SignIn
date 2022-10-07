import React,{useState} from 'react'
import SignUp from './SignUp'
import LogIn from './LogIn'
import LoggedInPage from './LoggedInPage'
import {createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "./FirebseConfig"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = () => {

const[id,setId]=useState(0)

const[registerEmail,setRegisterEmail]=useState("")
const[registerPass,setRegisterPass]=useState("")
const[loginEmail,setLoginEmail]=useState("")
const[loginPass,setLoginPass]=useState("")
const[user,setUser]=useState({})

onAuthStateChanged(auth,(currentUser)=>{
  if(currentUser){ 
    setUser(currentUser)
    setId(2)
}
  
})

const Register =async ()=>{  
    
    try {
        const user =await createUserWithEmailAndPassword(auth,registerEmail,registerPass)
        setId(1)
        console.log(user)
    } catch (error) {
        console.log("Register error are "+error.message)
        toast(error.message)
    }

}

const Login =async ()=>{   
    
    try {
        const user =await signInWithEmailAndPassword(auth,loginEmail,loginPass)
        console.log(user)
        setId(2)
    } catch (error) {
        console.log("login error are "+error.message)
        toast(error.message)
    }

}

const LogOut=async ()=>{ 
    
try {
    await signOut(auth);
    setId(3)
    
} catch (error) {
    console.log("logout error is "+error.message)
    toast(error.message)
}
}

const LoginLink=()=>{
    setId(4)
}

const RegisterLink=()=>{
setId(5)
}

  return (
    <div>
  <ToastContainer />
    {id===5||id===0?<SignUp handleLoginBtnClick={LoginLink} handleRegisterBtnClick={Register} setRegisterEmail={setRegisterEmail} setRegisterPass={setRegisterPass} />:null}
    {id===1||id===2?<LoggedInPage handleLogoutBtnClick={LogOut} user={user} />:null}
    {id===4||id===3?<LogIn setLoginEmail={setLoginEmail} setLoginPass={setLoginPass} handleLoginBtnClick={Login} handleRegisterBtnClick={RegisterLink} />:null}
    </div>
  )
}

export default Home