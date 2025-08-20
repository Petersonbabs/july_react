import React, { useContext } from 'react'
import Form from '../Form'
import { authContext } from '../../contexts/AuthContexts'

const Signup = () => {
    const { user } = useContext(authContext)
    console.log(user)
    return (
        <div>
            <Form />
        </div>
    )
}

export default Signup