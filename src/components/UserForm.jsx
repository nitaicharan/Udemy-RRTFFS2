import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import CustomInput from './CustomInput';

const validate = values => {
    let errors = {};
    if (!values.name) {
        errors.name = "Required filed"
    }
    if (!values.lastName) {
        errors.lastName = "Required filed"
    }

    return errors;
}

class UserForm extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Field name="name" component={CustomInput} placeholder="Name" title="Name" />
                <Field name="lastName" component={CustomInput} placeholder="Last name" title="Last name" />
                <input type="submit" value="Send" />
            </form>
        )
    }
}

export default reduxForm({
    form: 'user',
    validate,
})(UserForm);