import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get("http://localhost:8888/allusers");
                setUsers(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUsers()
    })

    const deleteUser = async (id) => {
        try {
            await axios.delete("http://localhost:8888/allusers/"+id)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='users'>
        <h1>Users</h1> 
        {users.map(user => 
            (
                <div className="user" key={user.id}>
                    <h2>User Name: {user.name}</h2>
                    <p>Email:{user.email}</p>

                    <button onClick={() => deleteUser(user.id)}>Delete User</button>
                    <button> <Link to={`/update/${user.id}`}>Update user </Link></button>
                </div>
            )
        )}
        <div className='button'>
            <button>
                <Link to="/add">Add User</Link>
            </button>
        </div>
        
    </div>
  )
}

export default Users