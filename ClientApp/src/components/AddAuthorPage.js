import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import AddAuthorForm from './AddAuthorForm'
import Axios from "axios";
import {NotificationManager, NotificationContainer} from "react-notifications";
import 'react-notifications/lib/notifications.css';


const validationSchema = yup.object({
    firstName: yup
        .string('Enter your email')
        .required('Required'),
    lastName: yup
        .string('Enter your password')
        .required('Required'),
});

const AddAuthorPage = () =>
{
    function handleSubmit(values)
    {
        async function addAuthor(values)
        {

            const Request = Axios.CancelToken.source()

            async function fetchResults()
            {
                try
                {
                    console.log(JSON.stringify(values))
                    const response = await Axios.post("library/author",
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

        addAuthor(values)
        console.log(JSON.stringify(values))
    }


    const values = {
        firstName: '',
        lastName: '',
    };

    return (
        <Container className="py-5 my-5">
            <Row>
                <Col className="justify-content-center">
                    <Formik
                        render={props => <AddAuthorForm{...props} />}
                        initialValues={values}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    />
                </Col>
            </Row>
            <NotificationContainer/>
        </Container>
    );
};

export default AddAuthorPage;