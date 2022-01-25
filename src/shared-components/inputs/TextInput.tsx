import React from "react"
import { useFormContext, Controller } from "react-hook-form"
import { TextField } from "../material/core"

type FormValues = {
    name: string, 
    label: string,
    required?: boolean,
    error?: boolean,
    errorMessage?: string, 
    defaultValue?: string,
}

const TextInput = ({ 
    name, 
    label, 
    required=false, 
    error=false, 
    errorMessage, 
    defaultValue 
}: FormValues) => {
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
