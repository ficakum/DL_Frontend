import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

function SignUp() {
    // State for storing form data and errors
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email:'', username: '', password: '' });

    // Function to handle form submission
    const handleSubmit = () => {
        const newErrors = validateForm();
        
        if (Object.keys(newErrors).length === 0) {
            // Handle user registration here (e.g., send data to a server)
            alert('Registration successful!');
            // Reset form or redirect user after registration
        } else {
            setErrors(newErrors);
        }
    };

    // Basic validation function
    const validateForm = () => {
        const errs = { email:'', username: '', password: '' };
        if (!username.trim()) errs.username = 'Username is required';
        if (!email.trim()) errs.email = 'Email is required';
        if (!password) errs.password = 'Password is required';
        return errs;
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
                    Sign Up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
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
                        onChange={(e) => setUsername(e.target.value)}
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
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default SignUp;
