import React from "react";

import { NavLink } from "react-router-dom";
import IconButton from "material-ui/IconButton";
import Tooltip from "material-ui/Tooltip";

const button = ({
    activeClass = "",
    label,
    children,
    onClick = undefined,
    disabled = false,
    to = null
}) => (
    <Tooltip title={label}>
        <IconButton
            component={to ? NavLink : "button"}
            to={to}
            exact={to === "/"}
            onClick={onClick}
            color="inherit"
            activeStyle={{
                backgroundColor: "skyblue"
            }}
            disabled={disabled}>
            {children}
        </IconButton>
    </Tooltip>
);

export default button;
