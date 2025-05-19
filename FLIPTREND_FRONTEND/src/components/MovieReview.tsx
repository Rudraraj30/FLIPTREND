import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';


const MovieReview = () => {
  const navigate = useNavigate();

   function handleHomeClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    navigate('/');
    console.info('You clicked a breadcrumb.');
  }

  function handleMoviesClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    navigate('/movies');
    console.info('You clicked a breadcrumb.');
  }

  const breadcrumbs = [
      <Link underline="hover" key="1" color="white" href="/" onClick={handleHomeClick}>
        Home
      </Link>,
      <Link
        underline="hover"
        key="2"
        color="inherit"
        href="/material-ui/getting-started/installation/"
        onClick={handleMoviesClick}
      >
        Movies
      </Link>,
      <Typography key="3" color='inherit'>
        MovieName
      </Typography>,
    ];
  return (
    <Box sx={{padding: '50px', paddingTop: '70px', background: '#0f1729', color: 'white'}}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{color: 'white'}}
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Box sx={{display: 'flex', }}>
        <MovieCard/>
        <Box sx={{display: 'flex', flexDirection: 'column', height: '70%', width: '70%'}}>
        <ReviewForm/>
        <Reviews/>
        </Box>
      </Box>
    </Box>
  )
}

export default MovieReview
