import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from './api/api'
import './style.css'

function Register() {

    const navigate = useNavigate()
    let user = {}
    const [errMsg, setErrMsg] = useState('')

    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const confPasswordRef = useRef(null)

    function onRegisterHandler() {
        user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            confPassword: confPasswordRef.current.value,
        }
        registerUser(user)
            .then(res => {
                console.log(res)
                navigate('/login')
            })
            .catch(err => {
                console.log(err.response.data.message)
                setErrMsg(err.response.data.message)
            })


    }

    return (
        <div className='container'>
            <div className='register'>
                <h1>Register</h1>
                <input
                    ref={usernameRef} type='text' placeholder='Username' required />
                <input
                    ref={passwordRef} type='password' placeholder='Password' required />
                <input
                    ref={confPasswordRef} type='password' placeholder='Confirm Password' required />
                {errMsg ? <p>{errMsg}</p> : null}
                <button onClick={onRegisterHandler}>REGISTER</button>
                <Link to='/login'>Member Login</Link>
            </div>
        </div>
    )
}

export default Register