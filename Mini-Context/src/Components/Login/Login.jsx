// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import UserContext from '../../Context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})

    }
  return (
    <div  className="container">
        <input 
            type='text'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='Username' 
            required>
        </input>
        <input 
            type='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Password'
            required >
        </input>
        <button
            onClick={handleSubmit}>Log In</button>

    </div>
  )
}

export default Login