import { useAuth } from "../../providers/AuthProvider/AuthProvider";

const Profile = () => {
  const { logout, authUser } = useAuth();

  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <h3>Welcome, {authUser?.firstName + " " + authUser?.lastName}</h3>
      <div>
        First Name:{"   "}
        <input
          type="text"
          className="form-control"
          value={authUser?.firstName}
          readOnly
        />
      </div>

      <div>
        Last Name:{"   "}
        <input
          type="text"
          className="form-control"
          value={authUser?.lastName}
          readOnly
        />
      </div>

      <div>
        Email:{"   "}
        <input
          type="text"
          className="form-control"
          value={authUser?.email}
          readOnly
        />
      </div>

      <button className="btn btn-primary" onClick={logout}>
        LOGOUT
      </button>
    </div>
  );
};

export default Profile;
