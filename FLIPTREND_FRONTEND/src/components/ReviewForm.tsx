import { Box, Button, CardActions, CardContent, Rating, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'

const ReviewForm = () => {
    return (
        <Box sx={{ background: '#1e283b', color: 'white', width: '100%', borderRadius: '5px', padding: '15px', height: '20%', marginTop: '9px' }}>
            <CardContent>
                <Typography gutterBottom sx={{ fontSize: 14, paddingBottom: '5px' }}>
                    Share Your Review
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', paddingBottom: '5px' }}>
                    <Typography component="div" >
                        Your Rating
                    </Typography>
                    <Rating name="no-value" value={null} sx={{ color: '#8392a6', paddingBottom: '5px' }} />
                </Box>
                <Typography sx={{ paddingBottom: '10px' }}>Your Review</Typography>
                <Box sx={{ display: 'flex', color: '#8392a6', flexDirection: 'column',  }}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Share your thoughts above this movie"
                        // background: '#334055'
                        // sx={{width: 500, background: '#323f54', }}
                    />
                    <Typography variant="body2" >
                        Your review will be visible to other users
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{background: '#2d569a', color: 'black', padding: '10px', borderRadius: '0px'}}>Submit Review</Button>
            </CardActions>

        </Box>
    )
}

export default ReviewForm
