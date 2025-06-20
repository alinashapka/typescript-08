import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useAppSelector } from "../hooks/redux";

interface Props {
  component: React.ReactElement;
}

export default function PrivateRoute({ component }: Props) {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? component : <Navigate to="/login" />;
};