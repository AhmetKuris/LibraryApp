import React from 'react';
import loadjs from 'loadjs'
import Form from 'react-bootstrap/Form'
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function AddBookForm(props)
{
    loadjs('react-bootstrap')

    const {
        values: {
            email,
            password,
            firstName,
            lastName,
            username,
            recaptcha,
        },
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleBlur,
        setFieldValue,
        classes
    } = props;

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                        isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                        isValid={touched.lastName && !errors.lastName}
                    />

                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                    <Form.Label>Username</Form.Label>
                </Form.Group>
            </Form.Row>
            <Form.Group>
                <Form.Check
                    required
                    name="terms"
                    label="Agree to terms and conditions"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    id="validationFormik0"
                />
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>

    );
}


export default AddBookForm;