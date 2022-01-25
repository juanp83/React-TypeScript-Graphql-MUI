import React from 'react'
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import SplitScreen from 'shared-components/layout/SplitScreen'
import CenteredForm from 'shared-components/layout/CenteredForm'
import { Typography, Button, Link, Divider } from 'shared-components/material'
import { PasswordInput, TextInput } from 'shared-components/inputs'

const schema = yup.object({
    email: yup.string().email("please enter a valid email").required(),
    password: yup
        .string()
        .required()
        .matches(
            // eslint-disable-next-line no-useless-escape
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            )
  }).required()

type FormData = {
    email: string;
    password: string;
}

function Login () {
    const methods = useForm({
        defaultValues: { //create empty init values to avoid uncontrolled to controlled warning
            email: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const { handleSubmit, formState: { errors }} = methods

    const onSubmit = (data: FormData) => console.log({ data })

    {/* Only two children allowed in splitscreen component*/}
    return (
        <FormProvider {...methods} >
            <SplitScreen> 
                <div />
                <CenteredForm>
                    <Typography variant="h2" component="h2" textAlign='left'>
                        Login
                    </Typography>
                    <TextInput
                        name="email"
                        label="E-Mail"
                        required
                        error={errors.email !== undefined ? true : false }
                        errorMessage={errors.email ? errors.email.message : undefined}
                    />
                    <PasswordInput
                        name={"password"}
                        label={"Password"}
                        error={errors.password != undefined ? true : false }
                        errorMessage={errors.password ? errors.password.message : undefined}
                    />
                    <Typography variant="caption" component="p" textAlign='left'>
                        By logging in, you agree to the <Link href='#'>User Agreement and Terms of Use</Link>.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={handleSubmit(onSubmit)}
                    >
                        Login
                    </Button>
                    <Button variant="text" size="small" href='/forgot-password'>Forgot Password</Button>
                    <Divider sx={{ m: '1rem' }} />
                    <Typography variant="body1" component="p" textAlign='center'>
                        Don&apos;t have an account?
                    </Typography>
                    <Button variant="text" size="small" href="/register">Register</Button>
                </CenteredForm>
            </SplitScreen>
        </FormProvider>
    )
}

export default Login