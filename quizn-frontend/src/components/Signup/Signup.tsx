import { Link } from "react-router-dom";

import "../Login/Login.css";

const Signup = () => {
  return (
    <form className="form">
      <h3>SIGN UP</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Enter your first name"
        required
      />
      <input
        type="text"
        className="form-control"
        placeholder="Enter your last name"
        required
      />
      <input
        type="text"
        className="form-control"
        placeholder="Enter your email"
        required
      />
      <input
        type="password"
        className="form-control"
        placeholder="Enter your password"
        required
      />

      <button className="btn btn-primary" style={{ width: "80%" }}>
        REGISTER
      </button>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="link">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Signup;
