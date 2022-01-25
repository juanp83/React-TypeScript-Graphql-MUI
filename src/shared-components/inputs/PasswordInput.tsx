import React from "react"
import { Controller, useFormContext } from "react-hook-form"
import { TextField } from "../material"

type FormValues = {
    name: string, 
    label: string, 
    error?: boolean, 
    errorMessage?: string
}

const TextInput = ({ name, label, error=false, errorMessage }: FormValues) => {
    const { control } = useFormContext()
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
                <TextField
                    size="small"
                    onChange={onChange}
                    value={value}
                    label={label}
                    placeholder={label} 
                    type="password"
                    helperText={errorMessage}
                    error={error}
                    required
                />
            )}
        />
    )
}

export default TextInput
