import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    // getting form values
    const email = e.target.email.value;
    const password = e.target.password.value;

    // firebase login
    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(res.user);
      })
      .catch((err) => console.log(err.message));

    // form value reset
    e.target.reset();
  };
  return (
    <>
      <div className="container w-75 mx-auto">
        <div className="row g-4 d-flex justify-content-center align-items-center pt-5">
          <div className="col-md-6">
            <img className="img-fluid" src={login} alt="" />
          </div>
          <div className="col-md-6">
            <div className="card p-4">
              <div className="text-center">
                <h3 className="fw-semibold d-text">Welcome to Login</h3>
                <img src="" alt="" />
              </div>
              <form className="card-body" onSubmit={handleLogin}>
                <span className="fs-5 d-block pb-1">Email</span>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                    required
                  />
                </div>
                <span className="fs-5 d-block pb-1">Password</span>
                <div className="input-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    aria-label="password"
                    aria-describedby="basic-addon2"
                    required
                  />
                </div>
                <p className="text-danger pt-2">
                  {/* <small>{loginError}</small> */}
                </p>
                <div>
                  <button className="btn btn-primary mt-3 w-100 fw-bold fs-5">
                    Login
                  </button>
                </div>
              </form>
              <p className="text-center">or</p>
              <div className="pb-3">
                <Button variant="" className="w-100 btn-outline-primary">
                  <FaGoogle className="me-2" />
                  SignIn with google
                </Button>
              </div>
              <div>
                <Button variant="" className="w-100 btn-outline-primary">
                  <FaGithub className="me-2" />
                  SignIn with Github
                </Button>
              </div>
              <p className="text-center pt-4">
                Haven't an account?{" "}
                <Link
                  className="text-decoration-none d-text fw-bold"
                  to="/register"
                >
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
