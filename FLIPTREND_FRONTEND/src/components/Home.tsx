import React from 'react';
import HomeBackground from '../assets/HomeBackground.avif'
import { Box, Button, Typography } from '@mui/material';
import MovieCard from './MovieCard';

const Home = () => {
    return (
        <Box sx={{background: '#0f1729'}}>
            <Box position="relative" display="inline-block" sx={{ backgroundColor: 'black' }}>
                <Box
                    component="img"
                    src={HomeBackground}
                    alt="Example"
                    sx={{ width: '100%', height: 'auto', display: 'block', opacity: 0.2}}
                />
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textShadow: '0 0 8px black',
                    textAlign: 'center'

                }}>
                    <Typography
                        variant="h5"
                        sx={{ fontSize: '50px', color: '#1774d1', fontWeight: 'bold', }}
                    >
                        Discover & Review
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ fontSize: '50px', fontWeight: 'bold', }}
                    >
                        Your Favorite Media
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ fontSize: '25px', fontWeight: 'bold', }}
                    >
                        Explore movies and Books. Share your opinion with the community
                    </Typography>
                    <Button variant="contained" sx={{ margin: "10px", padding: "10px" }}>Start Exploring</Button>
                </Box>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography sx={{color: 'white', fontWeight: 'bold', fontSize: '25px'}}>
                    Recent Highlights
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                </Box>
                
            </Box>
        </Box>
    )
}

export default Home
