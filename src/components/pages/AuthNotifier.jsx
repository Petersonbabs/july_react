

const AuthNotifier = () => {
    const params = new URLSearchParams(window.location.search)
    const email = params.get("email")

    const handleOpenGmail = () => {
        window.open("https://mail.google.com", "_blank")
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "4rem 0 7rem"
        }}>
            <h1>Check You Mail</h1>
            <p>A verification link has been sent to {email}</p>
            <button onClick={handleOpenGmail}>Take me to gmail</button>
        </div>
    )
}

export default AuthNotifier