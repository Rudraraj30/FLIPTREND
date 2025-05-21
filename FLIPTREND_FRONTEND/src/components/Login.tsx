import React, { useRef, useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import HomeBackground from '../assets/HomeBackground.avif'

export default function AuthForm() {
    const [isLogInForm, setIsLogInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleLogInForm = () => {
        setIsLogInForm(!isLogInForm);
        setErrorMessage('');
    };

    const handleButtonClick = () => {
        // Add your form validation logic here
        const enteredEmail = email.current?.value;
        const enteredPassword = password.current?.value;

        if (!enteredEmail || !enteredPassword) {
            setErrorMessage('Please fill all fields');
            return;
        }
        let enteredName = null;
        if(!isLogInForm){
            enteredName = name.current?.value;
            if(!enteredName){
                setErrorMessage('Please enter your name')
            }
        }

        console.log({
            name: enteredName,
            email: enteredEmail,
            password: enteredPassword,
        });

        // Add your auth logic here
    };

    return (
        <Box sx={{backgroundColor: 'black'}}>
            <Box
                component="img"
                src={HomeBackground}
                alt="Example"
                sx={{ width: '100%', height: 'auto', display: 'block', opacity: 0.2 }}
            />
            <Paper
                elevation={6}
                sx={{
                    p: 4,
                    bgcolor: '#0f1729',
                    color: 'white',
                    width: '30%',
                    position: 'absolute',
                    top: '20%',
                    left: '35%',
                }}
                component="form"
                onSubmit={(e) => e.preventDefault()}
            >
                <Typography variant="h6" fontWeight="bold" mb={2} sx={{justifyContent: 'center'}}>
                    {isLogInForm ? 'Log In' : 'Sign Up'}
                </Typography>

                {!isLogInForm && (
                    <TextField
                        inputRef={name}
                        variant="filled"
                        fullWidth
                        label="Name"
                        sx={{ mb: 2, color: 'white' }}
                        InputProps={{ style: { backgroundColor: '#1e283b', color: 'white' } }}
                        // InputLabelProps={{ style: { color: '#aaa' } }}
                    />
                )}

                <TextField
                    inputRef={email}
                    variant="filled"
                    fullWidth
                    label="Email"
                    sx={{ mb: 2 }}
                    InputProps={{ style: { backgroundColor: '#1e283b', color: 'white' } }}
                    // InputLabelProps={{ style: { color: '#aaa' } }}
                />

                <TextField
                    inputRef={password}
                    type="password"
                    variant="filled"
                    fullWidth
                    label="Password"
                    sx={{ mb: 2 }}
                    InputProps={{ style: { backgroundColor: '#1e283b', color: 'white' } }}
                    // InputLabelProps={{ style: { color: '#aaa' } }}
                />

                {errorMessage && (
                    <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                        {errorMessage}
                    </Typography>
                )}

                <Button
                    fullWidth
                    variant="contained"
                    sx={{  mb: 2 }}
                    onClick={handleButtonClick}
                >
                    {isLogInForm ? 'Log In' : 'Sign Up'}
                </Button>

                <Typography
                    variant="body2"
                    onClick={toggleLogInForm}
                    sx={{ cursor: 'pointer', textAlign: 'center' }}
                >
                    {isLogInForm
                        ? `Don't have an account? Sign up Now`
                        : 'Already have an account? Log In Now'}
                </Typography>
            </Paper>
        </Box>
    );
}
