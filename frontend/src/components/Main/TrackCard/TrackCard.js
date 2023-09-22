import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./getTrack.css"
import study from "./../../images/study.jpg"
import { useNavigate } from 'react-router-dom';


export default function TrackCard() {
    const navigate  = useNavigate();
    const directToTrack = ()=>{
        navigate('/track');
    }

  return (
    <Card className='getTrack' sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 550, height : 150 }}
        image={study}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '5 0 auto' }}>
          <Typography component="div" variant="h5" sx={{fontSize : 22, textAlign: 'center' }}>
            Tracks recommended for you
          </Typography>
        </CardContent>
        <Box sx={{ justifyContent : 'center', display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <Button variant="contained" onClick={directToTrack}>Start  </Button>
        </Box>
      </Box>
    
    </Card>
  );
}