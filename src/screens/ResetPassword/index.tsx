import React from 'react'
import { useForm, FormProvider } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { CenteredForm, SplitScreen } from 'shared-components/layout'
import { Button, Typography } from 'shared-components/material/core'
import { PasswordInput } from 'shared-components/inputs'
import { ResetPasswordSVG } from 'shared-components/svg'

const schema = yup.object({
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
    password: string;
    confirmPassword: string;
}

function ResetPassword() {
    const methods = useForm({
        defaultValues: { //create empty init values to avoid uncontrolled to controlled warning
            password: '',
            confirmPassword: '',
        },
        resolver: yupResolver(schema),
    });

    const { handleSubmit, formState: { errors }} = methods

    const onSubmit = (data: FormData) => console.log({ data })

    return (
        <FormProvider {...methods} >
            <SplitScreen svg={<ResetPasswordSVG width="75%" />}>
                <CenteredForm>
                    <Typography variant="h2" component="h2" textAlign='left'>
                        Reset Password
                    </Typography>
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
                        Reset Password
                    </Button>
                </CenteredForm>
            </SplitScreen>
        </FormProvider>
    )
}

export default ResetPassword
