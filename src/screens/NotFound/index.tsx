import React from 'react'
import { SplitScreen } from 'shared-components/layout'
import { Typography } from 'shared-components/material/core'
import { NotFoundSVG } from 'shared-components/svg'

function NotFound () {
    return (
        <SplitScreen svg={<NotFoundSVG width={'75%'} />}>
            <Typography variant="h2" component="h2">
                Page not found!
            </Typography>
        </SplitScreen>
    )
}

export default NotFound