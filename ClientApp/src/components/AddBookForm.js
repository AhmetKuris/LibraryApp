import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form'
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBook} from '@fortawesome/free-solid-svg-icons'

function AddBookForm(props)
{
    const [authors, setAuthors] = useState();
    const [loaded, setLoaded] = useState(false);

    async function populateAuthorsData()
    {
        const response = await fetch('library/author');
        const data = await response.json();
        console.log(data);
        setAuthors(data);
        setLoaded(true)
    }

    useEffect(() =>
    {
        populateAuthorsData();
    }, [])


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
    } = props;

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Row className="justify-content-center mb-3">
                <FontAwesomeIcon
                    style={{fontSize: '400%'}}
                    icon={faBook} size="lg"
                />
            </Form.Row>
            <Form.Row className="justify-content-center">
                <Form.Group as={Col} md="4" >
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
                <Form.Group as={Col} md="4" >
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
                <Form.Group as={Col} md="4" >
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        id="author"
                        as="select"
                        value={author}
                        onChange={handleChange}
                        defaultValue="..."
                        isInvalid={touched.author && !!errors.author}
                        >
                        <option>...</option>
                        {loaded && authors.map(item =>
                            <option key={item.id}>{item.fullName}</option>)}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{errors.author}</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            <Form.Row className="justify-content-center">
                <Button type="submit">Add Book</Button>
            </Form.Row>
        </Form>

    );
}

export default AddBookForm;