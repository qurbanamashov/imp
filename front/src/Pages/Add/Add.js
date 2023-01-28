import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import Navbar from '../../Leyauts/Navbar/Navbar';
import Footer from '../../Leyauts/Footer/Footer';
import "./add.scss"
import {Helmet} from "react-helmet";
function Add() {
    return (
        <>
         <Helmet>
                <meta charSet="utf-8" />
                <title>add</title>
            </Helmet>
        <Navbar/>
        <div className='Form'>
            <Formik
                initialValues={{ imgurl: '', name: '', price: '' }}
                validationSchema={Yup.object({
                    imgurl: Yup.string()
                        .max(150, 'Must be 15 characters or less')
                        .required('Required'),
                    name: Yup.string()
                        .max(200, 'Must be 20 characters or less')
                        .required('Required'),
                    price: Yup.string()
                        .max(200, 'Must be 20 characters or less')
                        .required('Required'),
                })}
                onSubmit={(values) => {
                    alert(JSON.stringify(values));
                    axios.post("http://localhost:7676/users", values)
                }}
            >
                <Form>
                    <h1> Admin panel</h1>
                    <Field name="imgurl" type="text" className="inputformik"  placeholder='ImgUrl'/>
                    <ErrorMessage name="imgurl" />
                    <Field name="name" type="text" className="inputformik"  placeholder='Name'/>
                    <ErrorMessage name="name" />
                    <Field name="price" type="text" className="inputformik"  placeholder='Price'/>
                    <ErrorMessage name="price" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            </div>
            <Footer/>
        </>
    )
}

export default Add