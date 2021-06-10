import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../server/serverUpdates";

import "../Login/Login.css";

import { useAuth } from "../../providers/AuthProvider/AuthProvider";

export type FormError = {
  firstNameError?: string;
  lastNameError?: string;
  emailError?: string;
  passwordError?: string;
};

const Signup = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState<FormError>({});

  const { login } = useAuth();

  const handleFormValidation = () => {
    let isFormValid = true;
    let formErrors: FormError = {};

    if (firstName.trim().length < 3) {
      isFormValid = false;
      formErrors["firstNameError"] =
        "First name must contain min. 3 characters";
    }
    if (lastName.trim().length === 0) {
      isFormValid = false;
      formErrors["lastNameError"] = "Last name must contain min. 1 character";
    }
    if (password.length < 5 || !/\d/.test(password)) {
      isFormValid = false;
      formErrors["passwordError"] =
        "Password must contain min. 5 characters and 1 number";
    }

    setFormErrors(formErrors);

    return isFormValid;
  };

  const signupHandler = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (handleFormValidation()) {
      const response = await signup(firstName, lastName, email, password);

      if (response.error) {
        return setFormErrors({ emailError: response.message });
      }

      login(email, password);
    }
  };

  const { firstNameError, lastNameError, emailError, passwordError } =
    formErrors;

  return (
    <form className="form" onSubmit={signupHandler}>
      <h3>Create your account</h3>
      <input
        type="text"
        className="form-control"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      {firstNameError !== undefined && (
        <p className="input-error">{firstNameError}</p>
      )}

      <input
        type="text"
        className="form-control"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      {lastNameError !== undefined && (
        <p className="input-error">{lastNameError}</p>
      )}

      <input
        type="email"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {emailError !== undefined && <p className="input-error">{emailError}</p>}

      <div className="password">
        <input
          type={showPassword ? "text" : "password"}
          className="form-control password-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {password && (
          <div
            className="show-password"
            onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </div>
        )}
      </div>
      {passwordError !== undefined && (
        <p className="input-error">{passwordError}</p>
      )}

      <button className="btn btn-primary form-button">SIGNUP</button>
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
