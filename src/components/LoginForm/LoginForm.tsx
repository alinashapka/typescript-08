import { Formik, Form, Field, FormikHelpers } from "formik";
import clsx from "clsx";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";
import { useAppDispatch } from "../../hooks/redux";

export default function LoginForm() {
    const dispatch = useAppDispatch();
    
    const formValues: LoginForm = {
        email: "",
        password: "",
    };

    const handleSubmit = (values: LoginForm, actions: FormikHelpers<LoginForm>) => {
        dispatch(logIn(values));
        actions.resetForm();
    };

    return (
        <Formik initialValues={formValues} onSubmit={handleSubmit}>
            <Form className={clsx(css.form)} autoComplete="off">
                <label className={clsx(css.label)}>
                    Email
                    <Field type="email" name="email" />
                </label>
                <label className={clsx(css.label)}>
                    Password
                    <Field type="password" name="password" />
                </label>
                <button type="submit">Log In</button>
            </Form>
        </Formik>
    );
}