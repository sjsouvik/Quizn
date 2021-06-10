import { Navigate, Route } from "react-router-dom";

import { useAuth } from "../../providers/AuthProvider/AuthProvider";

const PrivateRoute = ({
  path,
  element,
}: {
  path: string;
  element: React.ReactElement;
}) => {
  const { authToken } = useAuth();

  return (
    <div>
      {authToken ? (
        <Route path={path} element={element} />
      ) : (
        <Navigate state={{ from: path }} replace to="/login" />
      )}
    </div>
  );
};

export default PrivateRoute;
