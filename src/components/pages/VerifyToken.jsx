import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { authContext } from '../../contexts/AuthContexts'

const style = { textAlign: "center", margin: "4rem auto" }

const VerifyToken = () => {
    // collect token
    const { token } = useParams()
    const { verifyToken, verifyingToken, verificationData } = useContext(authContext)

    // send to backend
    useEffect(() => {
        verifyToken(token)
    }, [])

    if (verifyingToken) {
        return (
            <h2 style={{ textAlign: "center", margin: "4rem auto" }}>Verifying you account....</h2>
        )
    }

    // display message based on response
    return (
        <div>
            {
                verificationData.status == "success" ? (
                    <div style={style}>
                        <h2>Welcome to Temu!</h2>
                        <p>Your account has been verified</p>
                    </div>
                ) : verificationData.status == "error" ?
                    (
                        <div style={style}>
                            <h2>Sorry oh!</h2>
                            <p>Your verification has either expired or invalid</p>
                            <button>Request verification again</button>
                        </div>
                    )
                    : (
                        <div style={style}>
                            <h1>Verification page</h1>
                        </div>
                    )
            }
        </div>
    )
}

export default VerifyToken