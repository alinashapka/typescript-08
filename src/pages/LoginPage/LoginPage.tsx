import LoginForm from "../../components/LoginForm/LoginForm";
import clsx from "clsx";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div>
      <h1 className={clsx(css.title)}>Please log in</h1>
      <LoginForm />
    </div>
  );
}