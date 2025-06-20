import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { useId } from 'react';
import { ContactSchema } from '../ContactSchema';
import { addContact } from '../../redux/contacts/operations';

import clsx from "clsx";
import css from "./ContactForm.module.css";
import { useAppDispatch } from '../../hooks/redux';

export default function ContactForm() {
    const nameId = useId();
    const numberId = useId();
    const dispatch = useAppDispatch();
    
    const formValues: FormValues = {
            name: '',
            number: '',
        }

    const handleSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
    dispatch(addContact(values));
    helpers.resetForm();
    };
    
    return (
        <Formik initialValues={formValues} onSubmit={handleSubmit} validationSchema={ContactSchema}>
            <Form className={clsx(css.form)}>
                <label htmlFor={nameId}>
            Name
          </label>
                <Field className={clsx(css.field)} type='text'
            name='name'
            id={nameId}/>
                    <ErrorMessage
            name='name'
            component='span'
                />
                 <label htmlFor={numberId}>
            Number
          </label>
                <Field className={clsx(css.field)} type='tel'
            name='number'
            id={numberId}/>
                    <ErrorMessage
            name='number'
            component='span'
                />
                 <button className={clsx(css.button)} type='submit'>
          Add contact
        </button>
            </Form>
            </Formik>
    );
};