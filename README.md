# Material React Form

Material React Form is a form generator for React that
uses styles and components from
[Material UI Next](https://mate**Documentation to be written\*\*rial-ui-next.com/) ~
[Demo](https://nobobo1234.github.io/material-react-form)

### Documentation

**src\lib\UI\Input\Input.jsx**

### 1. Input

Component that is used to render all of the forms types.

Example:

```jsx
<Input formType="input" {...allYourOtherProps} />
```

| Property   | Type     | Required | Default value               | Description                                                             |
| :--------- | :------- | :------- | :-------------------------- | :---------------------------------------------------------------------- |
| style      | object   | no       | &lt;See the source code&gt; | Style to be applied to the Input Component                              |
| valid      | bool     | no       | true                        | Boolean that says whether the Input is valid                            |
| validation | objectOf | no       | &lt;See the source code&gt; | Object that gets all the validation                                     |
| touched    | bool     | no       | true                        | Boolean that says whether the Input Component is already touched or not |
| formType   | enum     | yes      |                             | The type of the Input Component                                         |
| show       | bool     | no       | true                        | Boolean that says whether the Input Component should be shown           |

---

**src\lib\index.jsx**

### 1. Form

Component that generates the form, self-closing

Example:

```jsx
<Form elements={this.state.form} onChange={this.onChange} onSubmit={this.onSubmit} />
```

| Property | Type    | Required | Default value               | Description                                                        |
| :------- | :------ | :------- | :-------------------------- | :----------------------------------------------------------------- |
| onSubmit | func    | yes      |                             | Function that is called when the form is submitted                 |
| onChange | func    | yes      |                             | Function that is called when an input in the form changes          |
| elements | arrayOf | yes      |                             | Array of elements that is used by the Component to render the form |
| style    | object  | no       | &lt;See the source code&gt; | Style to be applied to the form Component                          |
