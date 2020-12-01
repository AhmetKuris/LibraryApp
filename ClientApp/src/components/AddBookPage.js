﻿import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import AddBookForm from "./AddBookForm";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";


const validationSchema = yup.object({
    title: yup
        .string('Enter your email')
        .required('Required'),
    page: yup
        .number('Enter your password')
        .required('Required'),
    author: yup
        .string()
        .required('Required'),
});

const AddBookPage = () =>
{

    function handleSubmit(values)
    {
        alert(JSON.stringify(values))

        const Request = Axios.CancelToken.source();

        async function fetchResults()
        {
            try
            {
                const response = await Axios.post('/api/user',
                    values, {cancelToken: Request.token});
                console.log(response.data)
            } catch (e)
            {
                console.log('There was a problem or the request cancelled.');
                console.log(e.response);
            }
        }

        fetchResults();
        return () => Request.cancel();
    }

    const values = {
        title: '',
        page: '',
        author: ''
    };

    return (
        <Container className="py-5 my-5">
            <Row>
                <Col className="justify-content-center">
                    <Formik
                        render={props => <AddBookForm{...props} />}
                        initialValues={values}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    />
                </Col>
            </Row>

        </Container>
    );
};

export default AddBookPage;