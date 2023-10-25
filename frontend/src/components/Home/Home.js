import React from 'react'
import "./Home.css"
import PersonIcon from '@mui/icons-material/Person';
import HailIcon from '@mui/icons-material/Hail';
import { redirect, useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const redirectToChildren = ()=>{
    navigate('/login');
  }
  const redirectToMentor = ()=>{
    navigate('/mentor');
  }
  return (
    <>
      <div className="banner">
        <p>Welcome to ManoVan</p>
        <h1>Uplifting Life by Empowering Minds</h1>
        <div className="btns">
            <button onClick={redirectToChildren}>
              Login/SignUp for Children <PersonIcon className='loginIcon' />
            </button>
            <button onClick={redirectToMentor} >
              Login/SignUp for Mentors <HailIcon className='loginIcon' />
            </button>
            </div>
      </div>
    </>
  )
}

export default Home
