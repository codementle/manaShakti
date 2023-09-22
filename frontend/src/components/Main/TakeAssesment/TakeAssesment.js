import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import test from "./../../images/test.jpg"
import { useNavigate } from 'react-router-dom';


export default function TakeAssesment(props) {
    const navigate  = useNavigate();
    const directToTrack = ()=>{
        navigate('/assesment');
    }

  return (
    <Card className='getTrack' sx={{ transition: '0.8s ease', margin : "5rem 0px",display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 100, height : 100 }}
        image={test}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '5 0 auto' }}>
          <Typography component="div" variant="h5" sx={{fontSize : 22, textAlign: 'center' }}>
            {props.name}
          </Typography>
        </CardContent>
        <Box sx={{ justifyContent : 'center', display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        </Box>
      </Box>
    
    </Card>
  );
}