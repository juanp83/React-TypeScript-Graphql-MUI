import React, { useState } from 'react'
import { CenteredForm, SplitScreen } from 'shared-components/layout'
import { ForgotPasswordSVG } from 'shared-components/svg'
import Form from './Form'
import Success from './Success'

function ForgotPassword () {
    const [ success, setSuccess ] = useState(false)
    return (
        <SplitScreen svg={<ForgotPasswordSVG width={'75%'} />}> 
            <CenteredForm>
                {success ? <Success /> : <Form setSuccess={setSuccess} />}
            </CenteredForm>
        </SplitScreen>
    )
}

export default ForgotPassword