import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <form style={{ width: "40%", margin: "auto" }}>
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
        placeholder="john.cena@gmail.com"
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
        Already have an account? <Link to="/login">LOGIN</Link>
      </p>
    </form>
  );
};

export default Signup;
