import { Avatar, Box, Rating, Typography } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React from 'react'

const ReviewCard = () => {
    return (
        <Box sx={{ background: '#1e283b', width: '100%', minHeight: '150px', borderRadius: '5px', padding: '15px', margin: '15px 0px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex' }}>
                    <Avatar sx={{ bgcolor: deepPurple[500], marginRight: '10px' }}>MR</Avatar>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography >
                            Mahima Rohit
                        </Typography>
                        <Typography sx={{fontSize: '12px', color: '#8392a6'}} >
                            Posted 2 days ago
                        </Typography>
                    </Box>
                </Box>
                <Rating name="no-value" value={null} sx={{ color: '#8392a6', paddingBottom: '5px' }} />
            </Box>
            <Typography sx={{margin: '5px'}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit porro aperiam adipisci ab quo aliquam pariatur atque quis aspernatur deleniti, maiores quia officia minus possimus optio impedit magnam alias enim.
            </Typography>
        </Box>
    )
}

export default ReviewCard
