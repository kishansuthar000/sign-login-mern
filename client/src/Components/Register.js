import React, { useState } from "react";
import axios from "../Services/axiosInterceptor";
import { useNavigate, Link } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("api/auth/users/register", input);
      debugger
      if (response.status === 201) {
        alert(response?.data?.message);
        navigate("/login");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="data:image/png;base64,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"
                    alt="login form"
                    className="img-fluid"
                    style={{height:"100%", borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleRegister}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: " #ff6219" }}
                        ></i>
                        <span className="h1 fw-bold mb-0">Logo</span>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Create A New Account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          placeholder="Enter Your Name"
                          type="text"
                          className="form-control form-control-lg"
                          name="name"
                          value={input.name}
                          onChange={(e) =>
                            setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          placeholder="Enter Valid Email Address"
                          type="email"
                          className="form-control form-control-lg"
                          name="email"
                          value={input.email}
                          onChange={(e) =>
                            setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          placeholder="Enter Password"
                          type="password"
                          className="form-control form-control-lg"
                          name="password"
                          value={input.password}
                          onChange={(e) =>
                            setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>

                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Already Have an Account?
                        <Link to="/login" style={{ color: "#393f81" }}>
                          Login Here
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
