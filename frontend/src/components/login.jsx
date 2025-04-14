import React, { useEffect, useState } from 'react'
import './stylesheet/login.css'
import { RxCross2 } from "react-icons/rx";


const Login = () => {
    // document.body.style.overflow = 'visible'

    // const [display, setDisplay] = useState('none')
    const [ifdisplay, setIfDispay] = useState(false)

    useEffect(() => {
            let displayout = setTimeout(() => {
                setIfDispay(true)
                document.body.style.overflow = 'hidden'
            }, 10000);

            return () => clearTimeout(displayout )
    }, [])
    return (
        <div className='login' style={{ display: ifdisplay ? 'flex' : 'none' }}>
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
                <div className='form-side-box'>
                    <div onClick={() => setIfDispay(false, document.body.style.overflow = 'visible')}>
                        <RxCross2 style={{ color: 'white' }} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login