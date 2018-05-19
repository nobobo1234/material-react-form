import React from "react";

import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const button = ({
    type,
    children,
    onClick = undefined,
    disabled = false,
    submit = false,
    to = null
}) => (
    <Button
        component={to ? Link : "button"}
        to={to}
        onClick={onClick}
        variant="raised"
        color={type}
        type={submit ? "submit" : "button"}
        disabled={disabled}>
        {children}
    </Button>
);

export default button;
