import React from 'react'
import SplitScreen from 'shared-components/layout/SplitScreen' // Only two children allowed
import { TextField, Button, Typography } from 'shared-components/material'
import AuthForm from 'shared-components/layout/AuthForm'

function ForgotPassword () {
    return (
        <SplitScreen> 
            <div>Div 1</div>
            <AuthForm>
                <Typography variant="h2" component="h2">
                Password Reset
                </Typography>
                <Typography variant="body1" component="p">
                Enter your E-Mail below to reset your password.
                </Typography>
                <TextField
                    required
                    id="email"
                    label="E-Mail"
                    placeholder="E-Mail"
                    size="small"
                />
                <Button variant="contained" size="large">Reset Password</Button>
                <Button variant="text" size="small" href='/login'>Back to Login</Button>
            </AuthForm>
        </SplitScreen>
    )
}

export default ForgotPassword