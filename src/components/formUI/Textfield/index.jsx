import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const TextfieldWrapper = ({
    name,
    ...otheProps
}) => {
    const [field, metaData] = useField(name);

    const configTextfield = {
        ...field,
        ...otheProps,
        fullWidth: true,
        variant: 'outlined'
    };

    if(metaData && metaData.touched && metaData.error) {
        configTextfield.error = true;
        configTextfield.helperText = metaData.error;
    }

    return (
        <TextField {...configTextfield}/>
    );
};

    export default TextfieldWrapper;