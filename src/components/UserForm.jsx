import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";

class UserForm extends Component {
    render() {
        const {handleSubmit} = this.props;
        
        return (
            <form onSubmit={handleSubmit}>
                <Field name="name" component="input"/>
                <Field name="lastname" component="input"/>
                <input type="submit" value="Send"/>
            </form>
        )
    }
}

export default reduxForm({
    form: 'user',
})(UserForm);