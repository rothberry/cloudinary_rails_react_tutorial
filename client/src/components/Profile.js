import React from 'react'
// import CloudinaryUpload from './CloudinaryUpload'

function Profile({currentUser, setCurrentUser}) {
  const handleUpload = (result) => {
    const body = {
      profile_picture_url: result.info.secure_url,
      profile_picture_thumbnail_url: result.info.eager[0].secure_url,
      cloudinary_public_id: 'fill me in'
    }
    fetch('/api/me', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(user => {
        console.log(user);
        setCurrentUser(user)
      })
  }

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      <div className="">
        <img src={currentUser.profile_picture_url || "https://res.cloudinary.com/dpkrqs9rs/image/upload/v1637085098/Profile_avatar_placeholder_large_ky4gfw.png"} />
        {/* <CloudinaryUpload
          preset="tl8ilpaq"
          buttonText="Update Profile Picture"
          handleUpload={handleUpload}
        /> */}
      </div>
      <div className="col-span-2">
        <h2 className="text-xl">{currentUser.username}</h2>
      </div>
    </div>
  )
}

export default Profile
