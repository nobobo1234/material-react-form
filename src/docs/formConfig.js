import { formElementHelper } from "../../src/lib";

export default [
    formElementHelper({
        name: "input1",
        label: "Standard Input",
        formType: "input",
        validation: { required: true }
    }),
    formElementHelper({
        name: "emailInput",
        label: "Email Address",
        formType: "input",
        validation: { required: true, isEmail: true }
    }),
    formElementHelper({
        name: "valueInput",
        label: "Input with Value",
        formType: "input",
        value: "Value...",
        validation: { required: true }
    }),
    formElementHelper({
        name: "input2",
        label: "Select",
        formType: "select",
        options: ["Hello", "Welcome"],
        validation: { required: true }
    }),
    formElementHelper({
        name: "input3",
        label: "Multiline",
        formType: "multiLine",
        validation: { required: true }
    }),
    formElementHelper({
        name: "input4",
        label: "Time Picker",
        value: Date.now(),
        formType: "timePicker",
        validation: { required: true }
    }),
    formElementHelper({
        name: "input5",
        label: "Date Picker",
        value: Date.now(),
        formType: "datePicker",
        validation: { required: true }
    })
];
