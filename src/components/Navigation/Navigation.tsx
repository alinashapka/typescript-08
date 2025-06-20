import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useAppSelector } from "../../hooks/redux";

export default function Navigation() {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    const getActiveLinkClass = ({ isActive }: {isActive: boolean}): string => {
  return clsx(css.link, isActive && css.isActive);
};

    return (
        <nav className={clsx(css.wrapper)}>
            <NavLink className={getActiveLinkClass} to="/">Home</NavLink>
            {isLoggedIn && (
                <NavLink className={getActiveLinkClass} to="/contacts">Contacts</NavLink>
            )}
        </nav>
    );
}