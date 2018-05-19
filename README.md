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
    name: "myInputName",
    label: "My Input",
    formType: "input",
    validation: { required: true }
});
```

Next to those 'required' props, you can pass on extra props that will be passed to the component that belongs
to the `formType` you passed on. The current version supports 5 formTypes: `input`, `select`, `multiLine`,
`timePicker`, and `datePicker`. Please note that the `timePicker` and `datePicker` form types need default values.
The select propType accepts an options property that contains an array with all the to be shown options

The validation object supports the following 5 properties: `required`, `minLength`, `maxLength`, `isEmail`, and `isNumeric`.

_If you want more formTypes or validation options please make an issue or make a PR on my github_.

##### onChange = inputIdentifier => (updatedForm, event) => { }

This function is called when any of the input values changed. This function directly gives you the updated formArray
with all the updated values and validation as the first value, the second value is the event that was given to the
original onChange function. You also directly get the inputIdentifier (your element.name)

##### getElementByName(array, elName)

This is a helper function that you can use to easily get an item out of your array of formElements.

_Example:_

```jsx
import { getElementByName } from "material-react-form";

const element = getElementByName(myFormElements, "myInputName");
```

##### changeShow(array, whatToShow, show)

This is a helper function that you can use to easily change the show property of an element in your form.
The second argument is able to receive a string and an array.

_Example:_

```jsx
import { changeShow } from "material-react-form";

const updatedFormElements = changeShow(myFormElements, "myInputName", false);
```

##### replaceInArray(array, name, newValues)

This helper function immutably changes one specific item in the array and then returns the new array.

_Example:_
`

```jsx
import { replaceInArray } from "material-react-form";

const updatedFormElements = replaceInArray(myFormElements, "myInputName", { value: "Hello..." });
```

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
