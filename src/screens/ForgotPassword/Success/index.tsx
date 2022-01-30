import React from 'react'
import { Typography } from 'shared-components/material/core'

function Success() {
    return (
        <>
            <Typography variant="h2" component="h2">
            Success!
            </Typography>
            <Typography variant="body1" component="p">
                If this email is registered you will receive an 
                e-mail with instructions to reset your password 
                (please check your SPAM folder if you do not see the e-mail).
            </Typography>
        </>
    )
}

export default Success