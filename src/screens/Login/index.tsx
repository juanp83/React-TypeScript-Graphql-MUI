import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import SplitScreen from 'shared-components/layout/SplitScreen' // Only two children allowed
import AuthForm from 'shared-components/layout/AuthForm'
import { Typography, Button, Link, Divider } from 'shared-components/material'
import { PasswordInput, TextInput } from 'shared-components/form'

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

function Login () {
    const { handleSubmit, reset, control, formState: { errors } } = useForm({
        // defaultValues: { /////////////////////////////////////add this to initiate values
        //     email: 'juan@goowee.io',
        //     password: 'Test123!',
        // },
        resolver: yupResolver(schema),
    })
    const onSubmit = (data: any) => console.log({ data })

    return (
        <SplitScreen> 
            <div />
            <AuthForm>
                <Typography variant="h2" component="h2" textAlign='left'>
                    Login
                </Typography>
                <TextInput
                    name="email"
                    control={control}
                    label="E-Mail"
                    required
                    error={errors.email != undefined ? true : false }
                    errorMessage={errors.email ? errors.email.message : undefined}
                />
                <PasswordInput
                    name={"password"}
                    control={control}
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
            </AuthForm>
        </SplitScreen>
    )
}

export default Login