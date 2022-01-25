import React from "react"
import { Controller, Control } from "react-hook-form"
import { TextField } from "../material"

const TextInput = 
    ({ name, control, label, required=false, error=false, errorMessage, defaultValue }: 
        { 
            name: string, 
            control: any,
            label: string,
            required?: boolean,
            error?: boolean,
            errorMessage?: string, 
            defaultValue?: string,
        }) => {
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
                    required={required}
                    type="text"
                    helperText={errorMessage}
                    error={error}
                    defaultValue={defaultValue}
                />
            )}
        />
    )
}

export default TextInput
