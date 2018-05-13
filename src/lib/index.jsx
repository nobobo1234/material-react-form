import React, { Component } from "react";
import propTypes from "prop-types";
import { replaceInArray, checkValidity, formElementHelper } from "./helpers";

import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import MomentUtils from "material-ui-pickers/utils/moment-utils";
import Button from "./UI/Button/Button";
import IconButton from "./UI/Button/IconButton";
import Input from "./UI/Input/Input";
import Spinner from "./UI/Spinner/Spinner";
import { Send } from "@material-ui/icons";

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

        onChange(updatedAddForm, event);
    };

    render() {
        const { onSubmit, elements, style } = this.props;
        const { formIsValid } = this.state;

        return (
            <MuiPickersUtilsProvider utils={MomentUtils}>
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
    formIsValid: propTypes.bool,
    elements: propTypes.arrayOf(
        propTypes.shape({
            formType: propTypes.oneOf("input", "select", "multiLine", "timePicker", "datePicker")
                .required,
            value: propTypes.oneOfType([propTypes.string, propTypes.instanceOf(Date)]),
            validation: propTypes.objectOf(
                propTypes.shape({
                    required: propTypes.bool,
                    isEmail: propTypes.bool,
                    minLength: propTypes.number,
                    maxLength: propTypes.number,
                    isNumeric: propTypes.bool
                })
            ),
            show: propTypes.bool
        })
    ).isRequired,
    style: propTypes.object
};

export { Button, Input, IconButton, Spinner, replaceInArray, formElementHelper, checkValidity };

export default Form;
