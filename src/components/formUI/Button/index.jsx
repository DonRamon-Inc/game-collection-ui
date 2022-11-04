import React from "react";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

const ButtonWrapper = ({
    children,
    ...otheProps
}) => {
    const {submitForm} = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    const configButton = {
        ...otheProps,
        variant: 'contained',
        color: 'secondary',
        onClick: handleSubmit,
    };

    return (
       <Button
       {...configButton}
       >
        {children}
       </Button>
    );
};

    export default ButtonWrapper;