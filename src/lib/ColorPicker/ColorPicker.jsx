import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import { ChromePicker } from "react-color";

const styles = {
    popover: {
        position: "absolute",
        zIndex: 2
    },
    wrapper: {
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px"
    }
};

class ColorPicker extends Component {
    state = {
        show: false,
        lastValidInput: ""
    };

    onColorChange = color => {
        this.setState({
            lastValidInput: color.hex
        });
        this.props.onChange({
            target: {
                value: color.hex
            }
        });
    };

    onInputChange = event => {
        if (event.target.value !== "") {
            this.props.onChange({
                target: {
                    value: this.state.lastValidInput
                }
            });
        } else {
            this.setState({ lastValidInput: "" });
            this.props.onChange({
                target: {
                    value: ""
                }
            });
        }
    };

    handleClick = () => this.setState({ show: !this.state.show });

    handleClose = () => this.setState({ show: false });

    render() {
        const { show } = this.state;
        const { classes, value, onChange, ...other } = this.props;

        return (
            <div>
                <TextField
                    value={value}
                    onClick={this.handleClick}
                    onChange={this.onInputChange}
                    {...other}
                />
                {show ? (
                    <div className={classes.popover}>
                        <div className={classes.wrapper} onClick={this.handleClose} />
                        <ChromePicker color={value} disableAlpha onChange={this.onColorChange} />
                    </div>
                ) : null}
            </div>
        );
    }
}

export default withStyles(styles)(ColorPicker);
