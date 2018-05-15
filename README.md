# Material React Form

Material React Form is a form generator for React that
uses styles and components from
[Material UI Next](https://material-ui-next.com/) ~
[Demo](https://nobobo1234.github.io/material-react-form)

## Documentation

**src\lib\index.jsx**

#### Form

Component that generates the form, self-closing

Example:

```jsx
<Form elements={this.state.form} onChange={this.onChange} onSubmit={this.onSubmit} />
```

| Property | Type    | Required | Default value         | Description                                                        |
| :------- | :------ | :------- | :-------------------- | :----------------------------------------------------------------- |
| onSubmit | func    | yes      |                       | Function that is called when the form is submitted                 |
| onChange | func    | yes      |                       | Function that is called when an input in the form changes          |
| elements | arrayOf | yes      |                       | Array of elements that is used by the Component to render the form |
| style    | object  | no       | width: 300, margin: 5 | Style to be applied to the form Component                          |

##### elements[]

As you can see, the form requires an element array.
This array must be made in a certain pattern. For this the library
provides helper functions. This helper function is named `formElementHelper`.
The helper function can be used like this:

```jsx
import { formElementHelper } from "material-react-form";

const formElement = formElementHelper({
    name: "myinput",
    label: "My Input",
    formType: "input",
    validation: { required: true }
});
```

Next to those 'required' props, you can pass on extra props that will be passed to the component that belongs
to the `formType` you passed on. The current version supports 5 formTypes: `input`, `select`, `multiLine`,
`timePicker`, and `datePicker`. Please note that the `timePicker` and `datePicker` form types need default values.

The validation object supports the following 5 properties: `required`, `minLength`, `maxLength`, `isEmail`, and `isNumeric`.

_If you want more formTypes or validation options please make an issue or make a PR on my github_.

##### onChange(updatedForm, event)

This function is called when any of the input values changed. This function directly gives you the updated form array
with all the updated values and validation as the first value, the second value is the event that was given to the
original onChange function.

---

**src\lib\UI\Input\Input.jsx**

### Input

Component that is used to render all of the forms types.

Example:

```jsx
<Input formType="input" {...allYourOtherProps} />
```

| Property   | Type     | Required | Default value | Description                                                             |
| :--------- | :------- | :------- | :------------ | :---------------------------------------------------------------------- |
| style      | object   | no       | {}            | Style to be applied to the Input Component                              |
| valid      | bool     | no       | true          | Boolean that says whether the Input is valid                            |
| validation | objectOf | no       | {}            | Object that gets all the validation                                     |
| touched    | bool     | no       | true          | Boolean that says whether the Input Component is already touched or not |
| formType   | enum     | yes      |               | The type of the Input Component                                         |
| show       | bool     | no       | true          | Boolean that says whether the Input Component should be shown           |

---
