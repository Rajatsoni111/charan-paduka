import React, { useEffect, useState } from 'react'
import './stylesheet/login.css'

const Login = () => {
    const [display, setDispay] = useState('none')

    useEffect (()=>{
        let displayout = setTimeout(() => {
            setDispay('flex')
            clearInterval(displayout)
        }, 10000);
        },[display])
  return (
    <div className='login' style={{display:display}}>
        <div className='form-div'>
        <form action="submit" className='form'>
            <div className='user-label'>
            <label htmlFor="">Username</label>
            <input type="text" placeholder='enter username' required />
            </div>
            <div className='pass-label'>
            <label htmlFor="">password</label>
            <input type="password" placeholder='enter password' required />
            </div>
            <div className='form-button'>
            <button>login</button>
            <button>signup</button>
            </div>
        </form>
        </div>
    </div>

  )
}

export default Login