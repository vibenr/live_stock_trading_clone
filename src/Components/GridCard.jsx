import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BoxSx({title, article_link, url}) {
  return (
    
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="140"
      image={url}
    />
    <CardContent>

      <Typography variant="body2" color="text.secondary">
      {title}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small"><a href = {article_link}>View More</a></Button>
    </CardActions>
  </Card> 
  
    

   
  );
}