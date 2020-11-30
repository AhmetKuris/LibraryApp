import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import AddBookForm from "./AddBookForm";
import Container from "react-bootstrap/Container";


const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Required'),
    username: yup
        .string()
        .min(3, 'Username must be at least 3 characters')
        .required('Required'),
    firstName: yup
        .string()
        .required('Required'),
    lastName: yup
        .string()
        .required('Required'),
    recaptcha: yup
        .bool()
        .oneOf([true], 'Please verify reCaptcha'),
});

const AddBookPage = () =>
{

    function handleSubmit(values)
    {
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
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        username: '',
        recaptcha: false,
    };

    return (
        <Container>
                <Formik
                    render={props => <AddBookForm{...props} />}
                    initialValues={values}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                />
        </Container>
    );
};

export default AddBookPage;