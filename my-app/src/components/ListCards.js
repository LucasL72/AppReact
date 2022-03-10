import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ListCards() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./img/licorn.jpeg"
          alt="paysage"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Titre
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Description
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}