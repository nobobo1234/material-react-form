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
            <div style={{ textAlign: "center" }}>
                <h1>Demo Form</h1>
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
