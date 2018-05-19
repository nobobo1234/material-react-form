import React, { Component } from "react";
import propTypes from "prop-types";

import TextField from "material-ui/TextField";
import MenuItem from "material-ui/Menu/MenuItem";
import { TimePicker, DatePicker } from "material-ui-pickers";

/**
 * Component that is used to render all of the forms types.
 *
 * Example:
 * ```jsx
 * <Input formType="input" {...allYourOtherProps} />
 * ```
 */
class Input extends Component {
    render() {
        const {
            style = {},
            valid = true,
            validation = {},
            touched = true,
            formType,
            show = true,
            ...extraProps
        } = this.props;

        let inputElement = null;

        extraProps.error = !valid && !!validation && touched;
        extraProps.style = style;

        switch (formType) {
            case "input":
                inputElement = <TextField {...extraProps} />;
                break;
            case "select":
                inputElement = (
                    <TextField select {...extraProps}>
                        {extraProps.options.map(option => (
                            <MenuItem key={option.toLowerCase()} value={option.toLowerCase()}>
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                            </MenuItem>
                        ))}
                    </TextField>
                );
                break;
            case "multiLine":
                inputElement = <TextField multiline {...extraProps} />;
                break;
            case "timePicker":
                inputElement = (
                    <div>
                        <TimePicker ampm={false} showTodayButton todayLabel="now" {...extraProps} />
                    </div>
                );
                break;
            case "datePicker":
                inputElement = (
                    <DatePicker showTodayButton animateYearScrolling={false} {...extraProps} />
                );
                break;
            default:
                inputElement = <TextField />;
                break;
        }
        return <div>{show ? inputElement : null}</div>;
    }
}

Input.propTypes = {
    /** Style to be applied to the Input Component */
    style: propTypes.object,
    /** Boolean that says whether the Input is valid */
    valid: propTypes.bool,
    /** Object that gets all the validation */
    validation: propTypes.shape({
        required: propTypes.bool,
        minLength: propTypes.number,
        maxLength: propTypes.number,
        isEmail: propTypes.bool,
        isNumeric: propTypes.bool
    }),
    /** Boolean that says whether the Input Component is already touched or not */
    touched: propTypes.bool,
    /** The type of the Input Component */
    formType: propTypes.oneOf(["input", "select", "multiLine", "timePicker", "datePicker"])
        .isRequired,
    /** Boolean that says whether the Input Component should be shown */
    show: propTypes.bool
};

Input.defaultProps = {
    style: {},
    valid: true,
    validation: {},
    touched: true,
    show: true
};

export default Input;
