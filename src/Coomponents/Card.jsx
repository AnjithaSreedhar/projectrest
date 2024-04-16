import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image=""
          alt="error"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
            "Rain or shine,its a fine time to dine"

                We have room service and a small restaurant which you can taste tradional kera,north indian,Continental and even Chinese food items.Here,We are providing a online page for enjoy the finer things in life.So enjoy it........
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

);
}
