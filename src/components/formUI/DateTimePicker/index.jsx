import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const DateTimePicker = ({
    name,
    ...otheProps
}) => {
    const [field, metaData] = useField(name);

    const configDateTimePicker = {
        ...field,
        ...otheProps,
        type: 'date',
        fullWidth: true,
        variant: 'outlined',
        // inputFormat: 'DD/MM/YYYY',
        InputLabelProps: {
            shrink: true
        }
    };

    if(metaData && metaData.touched && metaData.error) {
        configDateTimePicker.error = true;
        configDateTimePicker.helperText = metaData.error;
    }

    return (
        <TextField {...configDateTimePicker}/>
    );
};

    export default DateTimePicker;