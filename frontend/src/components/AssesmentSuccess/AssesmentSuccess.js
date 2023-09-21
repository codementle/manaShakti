import React from 'react';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./AssesmentSuccess.css";
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


const AssesmentSuccess = () => {
  return (
    <div className="orderSuccess">
        <CheckCircleIcon />
        <Typography>Well Done! Your Response is Successfully Recorded</Typography>
        <Link to="/" >Home Page</Link>
    </div>
  )
}

export default AssesmentSuccess;
