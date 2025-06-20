import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./AppBar.module.css";
import { useAppSelector } from "../../hooks/redux";

export default function AppBar() {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    return (
        <header className={clsx(css.header)}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}