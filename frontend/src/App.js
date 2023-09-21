import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home.js";
import LoginSignUp from './component/User/LoginSignUp.js';
import Assesment from './components/Asssesment/Assesment';
// import Service from './components/ServiceList/Service';
import Main from './components/Main/Main';
import AssesmentSuccess from './components/AssesmentSuccess/AssesmentSuccess';


const App = () => {
  return (

    <Router>
    <Navbar />
    {/* {isAuthenticated && <UserOptions user={user} />} */}
    <Routes>
    <Route exact path="/" Component={Home} />
    <Route exact path="/login" Component={LoginSignUp} />
    <Route exact path="/assesment" Component={Assesment} />
    <Route exact path="/services" Component={Main} />
    <Route exact path="/success" Component={AssesmentSuccess} />
    </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App

