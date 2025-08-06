import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    const [loadingUsers, setLoadingUsers] = useState(false)

    useEffect(() => {
        fetchUsers()
    }, [])

    //fetch users
    const fetchUsers = async () => {
        try {
            setLoadingUsers(true)
            const res = await fetch('https://fakestoreapi.com/users')
            const data = await res.json()
            setUsers(data)
            console.log(data)
        } catch (error) {

        } finally {
            setLoadingUsers(false)
        }
    }
    return (
        <div>
            <div>users</div>
            {
                loadingUsers ? (
                    <h1>loading...</h1>
                ) :
                    <>
                        {
                        
                                users.map((ele, index) => (
                                    <div key={index}>
                                        <h2>{ele.email}</h2>
                                        <p>{ele.username}</p>
                                        <p>{ele.phone}</p>
                                        <p>{ele.name.firstname}</p>
                                        <p>{ele.address.city}</p>
                                    </div>
                                ))
                    
                        }
                    </>
            }
        </div>
    )
}

export default Users