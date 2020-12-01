import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "react-datepicker/dist/react-datepicker.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUserCircle} from "@fortawesome/free-solid-svg-icons";

function AddBookForm(props)
{

    const {
        values: {
            firstName,
            lastName
        },
        errors,
        touched,
        handleChange,
        handleSubmit,
    } = props;

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Row className="justify-content-center mb-3">
            <FontAwesomeIcon
                style={{fontSize: '400%'}}
                icon={faUserCircle} size="lg"
                />
        </Form.Row>
            <Form.Row className="justify-content-center">
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                        isInvalid={touched.firstName && !!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                        isInvalid={touched.lastName && !!errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                </Form.Group>
            </Form.Row >
            <Form.Row className="justify-content-center">
                <Button type="submit">Add Author</Button>
            </Form.Row>
        </Form>

    );
}


export default AddBookForm;