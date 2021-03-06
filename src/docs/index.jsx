import React, { Component } from "react";
import { render } from "react-dom";
import Form from "../../lib";
import "./styles.css";
import formConfig from "./formConfig";

class FormDemo extends Component {
    state = {
        form: formConfig
    };

    onChange = updatedForm => {
        this.setState({
            form: updatedForm
        });
    };

    onSubmit = event => {
        console.log(event);
    };

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <h1>Demo Form</h1>
                <p>
                    <a href="https://github.com/nobobo1234/material-react-form/blob/master/src/docs/index.jsx">
                        Link to source code
                    </a>
                </p>
                <Form
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    elements={this.state.form}
                />
            </div>
        );
    }
}

render(<FormDemo />, document.getElementById("app"));
