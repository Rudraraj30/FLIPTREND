import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';

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
      <Link underline="hover" key="1" color="inherit" href="/" onClick={handleHomeClick}>
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
      <Typography key="3" sx={{ color: 'text.primary' }}>
        MovieName
      </Typography>,
    ];
  return (
    <Box sx={{paddingTop: '70px'}}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  )
}

export default MovieReview
