import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Welcome from "./Welcome";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let mail = localStorage.getItem("Email");
    let pass = localStorage.getItem("Password");
    if(mail){
        mail = mail.replace(/"/g, "");
    }
    if(pass){
        pass = pass.replace(/"/g, "")
    }
    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }
  
  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>Login</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>
          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Welcome />
      )}
    </div>
  );
}

export default Login;