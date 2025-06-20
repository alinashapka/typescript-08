
import clsx from "clsx";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

export default function UserMenu() {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);

    const handleLogOut = () => {
        dispatch(logOut());
    };

    return (
        <div className={clsx(css.wrapper)}>
            <p className={clsx(css.greeting)}>Welcome, {user.name}</p>
            <button type="button" onClick={handleLogOut}>Log Out</button>
        </div>
    );
}