import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import DatePicker from './DatePicker'
import "react-datepicker/dist/react-datepicker.css";

function AddBookForm(props)
{

    const {
        values: {
            title,
            page,
            author,
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
            <Form.Row className="justify-content-center">
                <Form.Group as={Col} md="3" controlId="validationFormik01">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleChange}
                        isInvalid={touched.title && !!errors.title}
                    />
                    <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik02">
                    <Form.Label>Page</Form.Label>
                    <Form.Control
                        type="text"
                        name="page"
                        value={page}
                        onChange={handleChange}
                        isInvalid={touched.page && !!errors.page}
                    />
                    <Form.Control.Feedback type="invalid">{errors.page}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormikUsername">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        id="author"
                        as="select"
                        value={author}
                        onChange={handleChange}
                        isInvalid={touched.author && !!errors.author}
                        defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{errors.author}</Form.Control.Feedback>
                </Form.Group>
            </Form.Row >
            <Form.Row className="justify-content-center">
                <Button type="submit">Submit form</Button>
            </Form.Row>
        </Form>

    );
}


export default AddBookForm;