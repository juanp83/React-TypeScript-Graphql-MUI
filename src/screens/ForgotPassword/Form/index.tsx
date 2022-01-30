import React, { Dispatch, SetStateAction } from 'react'
import PropTypes from 'prop-types'
import { useForm, FormProvider } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { Typography, Button } from 'shared-components/material/core'
import { TextInput } from 'shared-components/inputs'

const schema = yup.object({
    email: yup.string().email("please enter a valid email").required(),
  }).required()

type FormData = {
    email: string;
}

function Form ({ setSuccess } : { setSuccess: Dispatch<SetStateAction<boolean>>}) {
    const methods = useForm({
        defaultValues: { //create empty init values to avoid uncontrolled to controlled warning
            email: '',
        },
        resolver: yupResolver(schema),
    })

    const { handleSubmit, formState: { errors }} = methods

    const onSubmit = (data: FormData) => {
        console.log({ data })
        setSuccess(true)
    }
    return (
        <FormProvider {...methods} >
            <Typography variant="h2" component="h2">
                Password Reset
            </Typography>
            <Typography variant="body1" component="p">
                Enter your E-Mail below to reset your password.
            </Typography>
            <TextInput
                name="email"
                label="E-Mail"
                required
                error={errors.email !== undefined ? true : false }
                errorMessage={errors.email ? errors.email.message : undefined}
            />
            <Button
                variant="contained"
                size="large"
                onClick={handleSubmit(onSubmit)}
            >
                Reset Password
            </Button>
            <Button variant="text" size="small" href='/login'>Back to Login</Button>
        </FormProvider>
    )
}

Form.proptypes = {
    setSuccess: PropTypes.func.isRequired,
}

export default Form