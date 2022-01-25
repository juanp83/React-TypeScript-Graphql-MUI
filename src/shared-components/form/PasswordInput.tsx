import React from "react"
import { Controller, Control } from "react-hook-form"
import { TextField } from "../material"

const TextInput = 
    ({ name, control, label, error=false, errorMessage }: 
        { name: string, control: any, label: string, error?: boolean, errorMessage?: string }) => {
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
                />
            )}
        />
    )
}

export default TextInput
