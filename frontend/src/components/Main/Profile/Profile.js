import React from 'react';
import "./Profile.css"
import chat from "./../chat.jpg"
import profile from "./../../images/profilePng.png"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


function createData(name, calories) {
    return { name, calories };
  }

const rows = [
    createData('Name', 'Ross'),
    createData('Class', 12),
    createData('Section', 'A'),
    createData('Age', 17),
    createData('Youtube', 'Linked'),
    createData('Instagram', 'Linked'),
    createData('Facebook', 'nthng'),
    createData('Twitter', 'Linked'),
  ];

const Profile = () => {
  return (
    <div>
    <figure className="snip1336">
      <img src={profile} alt="sample87" />
      <figcaption>
        {/* <img src={p} alt="profile-sample4" className="profile" /> */}
        <h2 className='ross'>Ross Taylor<span>Engineer</span></h2>
        {/* <p>I'm looking for something that can deliver a 50-pound payload of snow on a small feminine target. Can you suggest something? Hello...? </p> */}
        <TableContainer elevation={0} style={{ minWidth: 200 }} component={Paper}>
      <Table sx={{ color:'red', minWidth: 50, border : 'none', bgcolor : '#a8d0e6' }} aria-label="simple table">
        <TableBody>
          {rows.map((row,key) => (
            <TableRow
              key={row.name} 
            >
              <TableCell scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{key==6 ?<Button>Link</Button> : row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div>
    <Button variant="contained">Add Parent Details</Button>
    </div>
      </figcaption>
    </figure>
  </div>
  )
}

export default Profile
