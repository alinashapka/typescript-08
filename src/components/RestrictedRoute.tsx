import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useAppSelector } from "../hooks/redux";

interface Props {
  component: React.ReactElement;
  redirectTo: string;
}

export default function RestrictedRoute({ component, redirectTo }: Props) {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};