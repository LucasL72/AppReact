import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://pixabay.com/get/g465db033f86cf11a585d630ed03276f0265a7738a0512d31d9e5d0cc13d45218c5fac53a2762735f5071296c2564ecc42d9b1fa71747dc6b4791260d7c9c85b1_1920.jpg"
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