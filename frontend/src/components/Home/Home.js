import React from 'react'
import "./Home.css"
import PersonIcon from '@mui/icons-material/Person';
import HailIcon from '@mui/icons-material/Hail';
const Home = () => {
  return (
    <>

        <div className="banner">
          <p>Welcome to ManaShakti</p>
          <h1>Uplifting Life by Empowering Minds</h1>

          <a href="#container">
            <button >
              Login/SignUp for Children <PersonIcon className='loginIcon'/>
            </button>
            <button >
            Login/SignUp for Mentors <HailIcon className='loginIcon'/>
            </button>
          </a>
        </div>
    </>
  )
}

export default Home
