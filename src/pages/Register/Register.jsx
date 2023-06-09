import React, { useContext } from "react";
import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  
  // create user
  const handleRegister = (e) => {
    e.preventDefault();

    // form values
    const name = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, email, password);

    // create user
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        // update user
        user.displayName = name;
        updateUser(name)
          .then(() => {})
          .catch((err) => console.log(err.message));
        // console.log(res.user);
      })
      .catch((err) => console.log(err.message));

    // reseting form value
    e.target.reset();
  };

  return (
    <>
      <div className="container w-75 mx-auto mb-5">
        <div className="row g-4 d-flex justify-content-center align-items-center pt-5">
          <div className="col-md-6">
            <img className="img-fluid" src={login} alt="" />
          </div>
          <div className="col-md-6">
            <div className="card p-4">
              <div className="text-center">
                <h3 className="fw-semibold d-text">Welcome to Signup</h3>
              </div>
              <form className="card-body" onSubmit={handleRegister}>
                <span className="fs-5 d-block pb-1">Username</span>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    required
                  />
                </div>
                <span className="fs-5 d-block pb-1">Email</span>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    aria-label="password"
                    aria-describedby="basic-addon2"
                    required
                  />
                </div>
                <span className="fs-5 d-block pb-1">Password</span>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    aria-label="password"
                    aria-describedby="basic-addon2"
                    required
                  />
                </div>
                {/* <p className="text-danger">
                  <small>{passwordError}</small>
                </p> */}
                <div>
                  <button className={`btn btn-primary mt-3 w-100 fw-bold fs-5`}>
                    Signup
                  </button>
                </div>
                <p className="text-center pt-4">
                  Already have an account?{" "}
                  <Link
                    className="fw-bold text-decoration-none d-text"
                    to="/login"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
