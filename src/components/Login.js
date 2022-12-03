import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from './api/api'
import './style.css'

function Login() {
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const usernameRef = useRef(null)
    const passwordRef = useRef(null)

    function onLoginHandler() {
        loginUser({
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        })
            .then(res => {
                console.log(res.data.token)
                localStorage.setItem('AUTH_TOKEN', res.data.token)
                navigate('/bookslist')
            })
            .catch(err => {
                console.log(err.response.data.message)
                setErrMsg(err.response.data.message)
            })
    }

    return (
        <div className='container'>
            <div className='register'>
                <h1>Member Login</h1>
                <input ref={usernameRef} type='text' placeholder='Username' />
                <input ref={passwordRef} type='password' placeholder='Passowrd' />
                {errMsg ? <p>{errMsg}</p> : null}
                <button onClick={onLoginHandler}>LOGIN</button>
            </div>
        </div>
    )
}

export default Login