import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=c2bbb093651d43f999d789c27b4c9075&response_type=code&redirect_uri=http://127.0.0.1:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const Login: React.FC = () => {
  return (
    <div className=' hover:scale-105 duration-100'>
      <a className='py-3 px-6 bg-white rounded-3xl text-black font-bold' href={AUTH_URL}>Log in </a>
    </div>
  )
}

export default Login