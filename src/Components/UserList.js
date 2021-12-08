import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';

function UserList() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setData(res.data))
        .catch(err=>setError(true))
    },[]);
    return (
        <div className="List" >
            {data.map(user => (
                <UserCard user={user} key={user.id} /> 
            ))}
        </div>
    )
}

export default UserList
