import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home.js";
import LoginSignUp from './component/User/LoginSignUp.js';
import Assesment from './components/Asssesment/Assesment';
// import Service from './components/ServiceList/Service';
import Main from './components/Main/Main';
import AssesmentSuccess from './components/AssesmentSuccess/AssesmentSuccess';
import StudentList from './components/mentor/StudentList';
import MentorLogin from './components/MentorLogin/MentorLogin';
import Tracks from './components/Tracks/Tracks.js';

const App = () => {
  return (

    <Router>
    <Navbar />
    {/* {isAuthenticated && <UserOptions user={user} />} */}
    <Routes>
    <Route exact path="/" Component={Home} />
    <Route exact path="/login" Component={LoginSignUp} />
    <Route exact path="/mentor" Component={MentorLogin} />
    <Route exact path="/students" Component={StudentList} />
    <Route exact path="/assesment" Component={Assesment} />
    <Route exact path="/services" Component={Main} />
    <Route exact path="/track" Component={Tracks} />
    <Route exact path="/success" Component={AssesmentSuccess} />
    {/* <Route exact path="/mentor/student" Component={StudentList} /> */}
    </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App

