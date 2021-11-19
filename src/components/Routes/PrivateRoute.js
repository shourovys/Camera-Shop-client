import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const {
    user: { token },
  } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth/signIn",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
