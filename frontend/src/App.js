import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home.js";
import LoginSignUp from './component/User/LoginSignUp.js';


const App = () => {
  return (

    <Router>
    <Navbar />
    {/* {isAuthenticated && <UserOptions user={user} />} */}
    <Routes>
    <Route exact path="/" Component={Home} />
    <Route exact path="/login" Component={LoginSignUp} />
    </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App

