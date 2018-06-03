import React, { Component } from "react";
import propTypes from "prop-types";
import {
    replaceInArray,
    checkValidity,
    formElementHelper,
    changeShow,
    getElementByName
} from "./helpers";

import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import Button from "./UI/Button/Button";
import Input from "./UI/Input/Input";
import { Send } from "@material-ui/icons";

/**
 * Component that generates the form, self-closing
 *
 * Example:
 * ```jsx
 * <Form elements={this.state.form} onChange={this.onChange} onSubmit={this.onSubmit} />
 * ```
 */
class Form extends Component {
    state = {
        formIsValid: false
    };

    onChange = name => event => {
        const { elements, onChange } = this.props;

        const value = event.target ? event.target.value : event;

        let updatedAddForm = replaceInArray(elements, name, {
            value,
            touched: true
        });

        updatedAddForm = updatedAddForm.map(item => ({
            ...item,
            valid: checkValidity(item.value, item.validation)
        }));

        let formIsValid = updatedAddForm.every(item => (item.show ? item.valid : true));

        this.setState({ formIsValid });

        onChange(updatedAddForm, name, event);
    };

    render() {
        const { onSubmit, elements, style } = this.props;
        const { formIsValid } = this.state;

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <form onSubmit={onSubmit}>
                    {elements.map(element => (
                        <Input
                            style={
                                style
                                    ? style
                                    : {
                                          width: 300,
                                          margin: 5
                                      }
                            }
                            key={element.name}
                            onChange={this.onChange(element.name)}
                            {...element}
                        />
                    ))}
                    <br />
                    <Button type="primary" submit disabled={!formIsValid}>
                        Submit &nbsp;
                        <Send />
                    </Button>
                </form>
            </MuiPickersUtilsProvider>
        );
    }
}

Form.propTypes = {
    /** Function that is called when the form is submitted */
    onSubmit: propTypes.func.isRequired,
    /** Function that is called when an input in the form changes */
    onChange: propTypes.func.isRequired,
    /** Array of elements that is used by the Component to render the form */
    elements: propTypes.arrayOf(
        propTypes.shape({
            formType: propTypes.oneOf([
                "input",
                "select",
                "multiLine",
                "timePicker",
                "datePicker",
                "colorPicker"
            ]),
            value: propTypes.oneOfType([
                propTypes.string,
                propTypes.instanceOf(Date),
                propTypes.number,
                (props, propName, componentName) => {
                    console.log(propName);
                    if (!moment.isMoment(props[propName]))
                        return new Error(
                            `Invalid prop ${propName} supplied to ${componentName}. Validation failed`
                        );
                }
            ]),
            validation: propTypes.shape({
                required: propTypes.bool,
                isEmail: propTypes.bool,
                minLength: propTypes.number,
                maxLength: propTypes.number,
                isNumeric: propTypes.bool
            }),
            show: propTypes.bool
        })
    ).isRequired,
    /** Style to be applied to the Input Component */
    style: propTypes.object
};

Form.defaultProps = {
    style: {
        width: 300,
        margin: 5
    }
};

export {
    Button,
    Input,
    replaceInArray,
    formElementHelper,
    checkValidity,
    changeShow,
    getElementByName
};

export default Form;
