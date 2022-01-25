import React from 'react'
import AuthForm from 'shared-components/layout/AuthForm'
import SplitScreen from 'shared-components/layout/SplitScreen'
import { TextField, Button, Typography, Divider } from 'shared-components/material'

function Register() {
    return (
        <SplitScreen>
            <div />
            <AuthForm>
                <Typography variant="h2" component="h2" textAlign='left'>
                    Register
                </Typography>
                <TextField
                    required
                    id="firstName"
                    label="First Name"
                    placeholder="First Name"
                    size="small"
                />
                <TextField
                    required
                    id="lastName"
                    label="Last Name"
                    placeholder="Last Name"
                    size="small"
                />
                <TextField
                    required
                    id="firmName"
                    label="Firm Name"
                    placeholder="Firm Name"
                    size="small"
                />
                <TextField
                    required
                    id="email"
                    label="E-Mail"
                    placeholder="E-Mail"
                    size="small"
                />
                <TextField
                    required
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    size="small"
                />
                <TextField
                    required
                    id="confirm-password"
                    label="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                    size="small"
                />
                <Button variant="contained" size="large">Register</Button>
                <Divider sx={{ m: '1rem' }} />
                <Typography variant="body1" component="p" textAlign='center'>
                    Already have an account?
                </Typography>
                <Button variant="text" size="small" href="/login">Login</Button>
            </AuthForm>
        </SplitScreen>
    )
}

export default Register
