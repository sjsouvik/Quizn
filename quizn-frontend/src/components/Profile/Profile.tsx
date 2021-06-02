import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider/AuthProvider";

const Profile = () => {
  const navigate = useNavigate();
  const { setUserLoggedIn } = useAuth();

  const logout = () => {
    localStorage?.removeItem("login");
    setUserLoggedIn(false);
    navigate("/");
  };

  return (
    <div>
      <h3>Profile</h3>
      <button className="btn btn-primary" onClick={logout}>
        LOGOUT
      </button>
    </div>
  );
};

export default Profile;
