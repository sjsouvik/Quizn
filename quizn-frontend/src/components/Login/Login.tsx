import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../providers/AuthProvider/AuthProvider";

const Login = () => {
  const { setUserLoggedIn } = useAuth();

  const navigate = useNavigate();

  const loginHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // e.preventDefault();
    setUserLoggedIn(true);
    localStorage?.setItem("login", JSON.stringify({ userLoggedIn: true }));
    navigate("/");
  };

  return (
    <form style={{ width: "40%", margin: "auto" }}>
      <h3>LOGIN</h3>
      <div>
        {/* <label for="formControlEmail" className="form-label">
          Email
        </label> */}
        <input
          type="text"
          id="formControlEmail"
          className="form-control"
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        {/* <label for="formControlPassword" className="form-label">
          Password
        </label> */}
        <input
          type="password"
          id="formControlPassword"
          className="form-control"
          placeholder="Enter your password"
          required
        />
      </div>

      <button
        className="btn btn-primary"
        style={{ width: "80%" }}
        onClick={(e) => loginHandler(e)}
        // onSubmit={(e) => loginHandler(e)}
      >
        LOGIN
      </button>
      <p>
        Not an user yet? <Link to="/signup">Create your account</Link>
      </p>
    </form>
  );
};

export default Login;
