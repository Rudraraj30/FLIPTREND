import React, { useState } from 'react';
import { Box, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MovieCard from './MovieCard';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#324154',
    '&:hover': {
        backgroundColor: '#4a596e',
    },
    text: 'white',
    marginLeft: 0,
    width: '30%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'white',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '20%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Movies = () => {
    const [genre, setGenre] = useState('');

    const handleChange = (event: any) => {
        setGenre(event.target.value);
    };
    return (
        <Box sx={{ paddingTop: '70px', paddingLeft: '20px', paddingRight: '20px', background: '#0f1729' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <FormControl size='small' sx={{
                    width: '30%', backgroundColor: '#324154', borderRadius: '5px', color: '#ffffff', // change this to your desired color
                    '.MuiSelect-select': {
                        color: '#ffffff', // color for the selected item
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ffffff', // optional: change border color
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#90caf9', // optional: border on focus
                    },
                }}>
                    <InputLabel id="genre-select-label" sx={{ color: 'white' }}>Genre</InputLabel>
                    <Select
                        labelId="genre-select-label"
                        id="genre-select"
                        value={genre}
                        label="Genre"
                        onChange={handleChange}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    bgcolor: '#1e293b',
                                    color: '#ffffff',
                                },
                            },
                        }}
                    >
                        <MenuItem value="all">All Genres</MenuItem>
                        <MenuItem value="action">Action</MenuItem>
                        <MenuItem value="comedy">Comedy</MenuItem>
                        <MenuItem value="drama">Drama</MenuItem>
                        <MenuItem value="thriller">Thriller</MenuItem>
                        <MenuItem value="romance">Romance</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </Box>
        </Box>
    );
};

export default Movies;
