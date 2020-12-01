import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import AddBookForm from "./AddBookForm";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Axios from "axios";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


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
        async function addBook(values)
        {

            const Request = Axios.CancelToken.source()

            async function fetchResults()
            {
                try
                {
                    const response = await Axios.post("library/book",
                        values, {cancelToken: Request.token})

                    console.log(response.data)
                    NotificationManager.success(response.data, 'Success!');
                    console.log(response)

                } catch (e)
                {
                    console.log("There was a problem or the request cancelled.")
                    console.log(e.response);
                    NotificationManager.error(e.response.data, 'Error!');
                    console.log(e.message);
                }
            }

            fetchResults();
            return () => Request.cancel();
        }

        addBook(values)
        console.log(JSON.stringify(values))
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
            <NotificationContainer />
        </Container>
    );
};

export default AddBookPage;