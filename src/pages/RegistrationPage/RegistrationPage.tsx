import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import clsx from "clsx";
import css from "./RegistrationPage.module.css";

export default function RegisterPage() {
  return (
    <div>
      <h1 className={clsx(css.title)}>Register your account</h1>
      <RegistrationForm />
    </div>
  );
}