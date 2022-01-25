import React, { ReactNode } from 'react'
import { Box } from 'shared-components/material/core'

function CenteredForm({ children }: { children: ReactNode[] }) {
    return (
        <Box
            component="form"
            sx={{
                m: 2,
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '30ch',
                width: '30ch',
                '& .MuiTextField-root': { m: 1 },
                '& .MuiButton-root': { m: 1 },
                '& .MuiTypography-root': { m: 1 },
                '& .MuiLink-root': { m: 0 },
            }}
        >
            {children}
        </Box>
    )
}

export default CenteredForm