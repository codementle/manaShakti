import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import music from "./music.avif";
import games from "./games.webp";
import chat from "./chat.jpg";
import community from "./community.png"
import motivation from "./motivation.jpg"
import streak from "./streak.jpg"

export default function Rooms(props) {

    const imgarray = [music,games,chat,community,motivation,streak];

  return (
    <Card sx={{ maxWidth: 250, margin: 2}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgarray[props.img]}
          alt="Fun"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
