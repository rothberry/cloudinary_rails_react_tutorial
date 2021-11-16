import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({currentUser, handleLogout}) {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const profilePic = () => {
    if (currentUser.profile_picture_thumbnail_url) {
      return (
        <img
          src={currentUser.profile_picture_thumbnail_url}
          alt={currentUser.username}
          className="rounded-full ml-auto"
        />
      )
    } else {
      return `Logged in as ${currentUser.username}`
    }
    
  }

  return (
    <nav className="flex items-center justify-between text-2xl border-black border-b-2 pb-2 mb-4">
      <div className="">
        <NavLink className="pr-6 py-6" to="/posts">Posts</NavLink>
        <NavLink className="pr-2 py-6" to="/profile">Profile</NavLink>
      </div>
      <div className="flex flex-col">
        <button className="text-right" onClick={() => setNavbarOpen(!navbarOpen)}>
          {profilePic()}
        </button>
        <div className="relative w-52">
          <div className={`flex flex-col w-52 bg-white shadow overflow-hidden absolute space-y-3 text-lg ${navbarOpen ? 'p-4 max-h-screen' : 'p-0 max-h-0'}`}>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar