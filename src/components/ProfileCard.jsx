// name, email, image
function ProfileCard({ profileImage, profileName }) {
    return (
        <div>
            <img
                src={profileImage}
                style={{
                    height: "100px",
                    width: "100px",
                    objectFit: "cover"
                }}
            />

            <p>Name: {profileName}</p>
            <p>Email: John@gmail.com</p>
        </div>
    )
}

export default ProfileCard
