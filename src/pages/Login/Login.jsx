import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'


const Login = () => {
  const [signState, setSignState] = useState("Sing In")

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt=""/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState==="Sing Up"?<input type="text" placeholder='Your name'/>:<></>}
          <input type="email" placeholder='Your email'/>
          <input type="password" placeholder='Your password'/>
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sing In"?
          <p>New to Netflix?<span onClick={()=>(setSignState("Sing Up"))}>Sing Up Now</span></p>  
          :<p>Already have a count?<span onClick={()=>(setSignState("Sing Up"))}>Sing Up Now</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login
