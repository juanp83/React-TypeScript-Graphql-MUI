import React from 'react'
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import CenteredForm from 'shared-components/layout/CenteredForm'
import SplitScreen from 'shared-components/layout/SplitScreen'
import { Button, Typography, Divider } from 'shared-components/material'
import { TextInput, PasswordInput } from 'shared-components/inputs'

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    firmName: yup.string().required(),
    email: yup.string().email("please enter a valid email").required(),
    password: yup
        .string()
        .required()
        .matches(
            // eslint-disable-next-line no-useless-escape
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
    confirmPassword: yup
        .string()
        .when("password", {
            is: (val: string) => (val && val.length > 0 ? true : false),
            then: yup.string().oneOf(
                [yup.ref("password")],
                "Passwords must match"
            ),
        })
        .required("Confirm Password Required"),
  }).required()

type FormData = {
    firstName: string;
    lastName: string;
    firmName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

function Register() {
    const methods = useForm({
        defaultValues: { //create empty init values to avoid uncontrolled to controlled warning
            firstName: '',
            lastName: '',
            firmName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        resolver: yupResolver(schema),
    });

    const { handleSubmit, formState: { errors }} = methods

    const onSubmit = (data: FormData) => console.log({ data })

    return (
        <FormProvider {...methods} >
            <SplitScreen>
                <div />
                <CenteredForm>
                    <Typography variant="h2" component="h2" textAlign='left'>
                        Register
                    </Typography>
                    <TextInput
                        name="firstName"
                        label="First Name"
                        required
                        error={errors.firstName !== undefined ? true : false }
                        errorMessage={errors.firstName ? errors.firstName.message : undefined}
                    />
                    <TextInput
                        name="lastName"
                        label="Last Name"
                        required
                        error={errors.lastName !== undefined ? true : false }
                        errorMessage={errors.lastName ? errors.lastName.message : undefined}
                    />
                    <TextInput
                        name="firmName"
                        label="Firm Name"
                        required
                        error={errors.firmName !== undefined ? true : false }
                        errorMessage={errors.firmName ? errors.firmName.message : undefined}
                    />
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
                    <PasswordInput
                        name={"confirmPassword"}
                        label={"Confirm Password"}
                        error={errors.confirmPassword != undefined ? true : false }
                        errorMessage={errors.confirmPassword ? errors.confirmPassword.message : undefined}
                    />
                    <Button
                        variant="contained"
                        size="large"
                        onClick={handleSubmit(onSubmit)}
                    >
                        Register
                    </Button>
                    <Divider sx={{ m: '1rem' }} />
                    <Typography variant="body1" component="p" textAlign='center'>
                        Already have an account?
                    </Typography>
                    <Button variant="text" size="small" href="/login">Login</Button>
                </CenteredForm>
            </SplitScreen>
        </FormProvider>
    )
}

export default Register
