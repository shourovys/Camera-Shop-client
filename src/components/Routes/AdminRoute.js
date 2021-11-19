import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const {
    user: { userInfo },
  } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
      userInfo.isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default AdminRoute;
