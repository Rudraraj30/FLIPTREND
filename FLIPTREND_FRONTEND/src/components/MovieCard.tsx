import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Movie from '../assets/Movie.jpeg'
import { useNavigate } from 'react-router-dom';

export default function MovieCard() {
  const navigate = useNavigate();
  const handleMovieCardClick = () => {
    navigate('/movie/1');
  }
  return (
    <Card sx={{ maxWidth: 345, margin: '10px', flex: '0 0 33%' }} onClick={
      () => handleMovieCardClick()
    }>
      <CardMedia
        sx={{ height: 400 }}
        image={Movie}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hello
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus velit itaque sed sunt amet pariatur voluptate tempora sint, nobis natus ex aspernatur dolorum impedit necessitatibus eius repellat, rem ullam! Exercitationem in ea ad laudantium quisquam odio laboriosam repellendus accusamus natus?ver 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
