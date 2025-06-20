import { Formik, Form, Field, FormikHelpers } from "formik";
import clsx from "clsx";
import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";
import { useAppDispatch } from "../../hooks/redux";

export default function RegistrationForm() {
    const dispatch = useAppDispatch();
    
    const formValues: RegistrationForm = {
        name: "",
        email: "",
        password: "",
    };

    const handleSubmit = (values: RegistrationForm, actions: FormikHelpers<RegistrationForm>) => {
        console.log(values);
        dispatch(register(values));
        actions.resetForm();
    };

    return (
        <Formik initialValues={formValues} onSubmit={handleSubmit}>
            <Form className={clsx(css.form)} autoComplete="off">
                <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
                <label className={clsx(css.label)}>
                    Email
                    <Field type="email" name="email" />
                </label>
                <label className={clsx(css.label)}>
                    Password
                    <Field type="password" name="password" />
                </label>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
}