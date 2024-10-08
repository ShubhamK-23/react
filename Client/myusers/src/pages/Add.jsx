import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


function Add() {
    
    const [user, setuser] = useState(
        { name: '', email: '', password: '' }
    );

    const navigate = useNavigate();


    const handleChange = (e) => {
        setuser((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    console.log(user)

    const submit = async e => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8888/allusers", user);
            navigate("/")
        } catch (error) {
            console.log(error)
        }
        
    }

  return (
    <div className="add">
            <h1>ADD user</h1>

            <table cellSpacing={20}>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" placeholder="Enter Name" onChange={handleChange} name="name" /></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="email" placeholder="Enter Email" onChange={handleChange} name="email" /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" placeholder="Enter Password" onChange={handleChange} name="password" /></td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" onClick={submit}>Add user</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  )
}

export default Add
