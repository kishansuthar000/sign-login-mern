import React, { useState } from "react";
import axios from "../Services/axiosInterceptor";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/auth/users/login", input);
      if (response.status === 200) {
        alert(response.data.message);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        navigate("/");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <section class="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style={{ borderRadius: "1rem" }}>
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="data:image/png;base64,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"
                    alt="login form"
                    class="img-fluid"
                    style={{height:"100%", borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleLogin}>
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <i
                          class="fas fa-cubes fa-2x me-3"
                          style={{ color: " #ff6219" }}
                        ></i>
                        <span class="h1 fw-bold mb-0">Logo</span>
                      </div>
                      <h5
                        class="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>
                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id=""
                          placeholder="Enter Email"
                          class="form-control form-control-lg"
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
                      <div class="form-outline mb-4">
                        <input
                          placeholder="Enter Password"
                          type="password"
                          id="form2Example27"
                          class="form-control form-control-lg"
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
                      <div class="pt-1 mb-4">
                        <button
                          class="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                      Forget Password ?
                      <Link to={"/reset-password"}>Click Here</Link>
                      <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <Link to="/register" style={{ color: "#393f81" }}>
                          Register here
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

export default Login;
