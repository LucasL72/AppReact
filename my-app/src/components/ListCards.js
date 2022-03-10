import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ListCards = (props) => {
  const { list } = props;
  {list.map((item) => {
    return (
      <Card sx={{ maxWidth: 345 }} key={item.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./img/licorn.jpeg"
          alt="paysage"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { item.title }
          </Typography>
          <Typography variant="body2" color="text.secondary">
          { item.content }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    );
  })}
}

export default ListCards