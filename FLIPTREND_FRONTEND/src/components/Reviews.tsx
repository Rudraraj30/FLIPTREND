import { Box, Typography } from '@mui/material'
import React from 'react'
import ReviewCard from './ReviewCard'

const Reviews = () => {
    return (
        <Box sx={{  }}>
            <Typography sx={{padding: '10px'}}>
                Reviews
            </Typography>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
        </Box>
    )
}

export default Reviews
