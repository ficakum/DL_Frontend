import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function SignIn() {
    // State for storing username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' });

    // Function to handle form submission
    const handleSubmit = () => {
        let hasErrors = false;
        const newErrors = { username: '', password: '' };

        // Simple validation: Check if the fields are not empty
        if (!username.trim()) {
            newErrors.username = 'Username is required';
            hasErrors = true;
        }
        if (!password) {
            newErrors.password = 'Password is required';
            hasErrors = true;
        }

        // Set errors if any
        setErrors(newErrors);

        // If no errors, log the username and password
        if (!hasErrors) {
            console.log('User Signed In:', { username, password });
            // You might want to reset fields or redirect the user here
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={username}
                        onChange={(e)=>setPassword(e.target.value)}
                        error={!!errors.username}
                        helperText={errors.username}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e)=>setUsername(e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default SignIn;
