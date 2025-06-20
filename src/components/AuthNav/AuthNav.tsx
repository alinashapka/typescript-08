import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

export default function AuthNav() {
    const getActiveLinkClass = ({ isActive }: {isActive: boolean}): string => {
  return clsx(css.link, isActive && css.isActive);
    };
    
    return (
        <div className={clsx(css.wrapper)}>
        <NavLink className={getActiveLinkClass} to="/register">Register</NavLink>
            <NavLink className={getActiveLinkClass} to="/login">Log In</NavLink>
            </div>
    );
}