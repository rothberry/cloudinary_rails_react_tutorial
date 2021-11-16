## Add tailwindCSS

```html
<!-- client/public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    
  </body>
</html>

```

## Update Body background in index.css

```css
/* client/src/index.css */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(242, 242, 242);
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
```

## Update .App styles in App.css

```css
/* client/src/App.css */
.App {
  width: 80%;
  margin: 1em auto;
  padding: 2em;
  min-height: 100vh;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

## Add Styles to Login Component

```js
// client/src/components/Login.js
import React, { useState } from 'react'
import { Redirect, useHistory, Link } from 'react-router-dom'

function Login({ setCurrentUser }) {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            history.push('/')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <Redirect to="/" />
      <form className="w-2/3 bg-white p-8 max-w-md space-y-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl text-center font-bold mb-2">Log In</h1>
        <p>
          <label 
            className="block text-lg font-semibold"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border"
          />
        </p>
        <p>
          <label 
            className="block text-lg font-semibold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border"
          />
        </p>
        <p><button className="w-full bg-green-500 py-2 mt-4" type="submit">Log In</button></p>
        <p className="text-center">-- or --</p>
        <p className="text-center"><Link className="py-4 px-6" to="/signup">Sign Up</Link></p>
      </form>
    </div>
  )
}

export default Login
```

## Add Styles to Signup Component

```js
// client/src/components/Signup.js
// client/src/components/Signup.js
import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

function Signup({ setCurrentUser }) {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            history.push('/')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-2/3 bg-white p-8 max-w-md space-y-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl text-center font-bold mb-2">Sign Up</h1>
        <p>
          <label
            className="block text-lg font-semibold"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border"
          />
        </p>
        <p>
          <label
            className="block text-lg font-semibold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border"
          />
        </p>
        <p>
          <label 
            htmlFor="password_confirmation"
            className="block text-lg font-semibold"
          >
            Password Confirmation
          </label>
          <input
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="w-full p-2 border"
          />
        </p>
        <p><button className="w-full bg-green-500 py-2 mt-4" type="submit">Sign Up</button></p>
        <p className="text-center">-- or --</p>
        <p className="text-center"><Link className="py-4 px-6" to="/login">Log In</Link></p>
      </form>
    </div>
  )
}

export default Signup
```

## Add Navbar Component

```js
// src/components/Navbar.js
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
```

## Render Navbar from AuthenticatedApp

We're also going to add some routes here for Profile and Posts

```js
// client/src/AuthenticatedApp.js
import './App.css';
import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Profile from './components/Profile';

function AuthenticatedApp({ currentUser, setCurrentUser }) {
  const history = useHistory()
  
  const handleLogout = () => {
    fetch('/api/logout', {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          history.push('/')
        }
      })
  }

  return (
    <div className="App max-w-5xl">
      <Navbar 
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;
```

## Add the Posts Component

```js
// client/src/components/Posts.js
import React, { useState, useEffect } from 'react';


function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => setPosts(posts))
  }, [])

  return (
    <div>
      <h1 className="font-bold text-2xl">Posts</h1>
      {posts.map(post => (
        <div className="my-4" key={post.id}>
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))
      }
    </div>
  )
}

export default Posts
```

## Add the Profile Component

```js
// client/src/components/Profile.js
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
```