import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';


class StreamCreate extends React.Component {
    renderInput = ({input, label, meta}) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    renderError({touched, error}) {
        if(touched && error) {
            return <small>{error}</small>
        }
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <br />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title = 'You must enter a title'
    }
    if(!formValues.description) {
        errors.description = 'You must enter a description'
    }

    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null , {createStream})(formWrapped);