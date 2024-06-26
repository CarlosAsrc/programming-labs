import { useState } from "react";
import Input from "./form/Input";
import { useOutletContext, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setJwtToken, setAlertMessage, setAlertClassName } =
    useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "admin@example.com") {
      setJwtToken("123");
      setAlertClassName("d-none");
      setAlertMessage("");
      navigate("/");
    } else {
      setAlertClassName("alert-danger");
      setAlertMessage("Invalid Credentials");
    }
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <hr />

        <form onSubmit={handleSubmit}>
          <Input
            title="Email Address"
            type="email"
            className="form-control"
            name="email"
            autoComplete="email-new"
            onChange={(event) => setEmail(event.target.value)}
          />

          <Input
            title="Password"
            type="password"
            className="form-control"
            name="password"
            autoComplete="password-new"
            onChange={(event) => setPassword(event.target.value)}
          />

          <hr />

          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;
