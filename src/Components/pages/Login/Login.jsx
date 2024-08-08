import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
const [data, setData] = useState({
username: "",
password: "",
});

const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate();

const getInputData = (e) => {
const { name, value } = e.target;
setData((old) => ({
...old,
[name]: value,
}));
};

const postData = async (e) => {
e.preventDefault();
try {
const response = await fetch("/user", {
method: "GET", // Ensure this method matches your API's expectation
headers: {
"Content-Type": "application/json",
},
});

if (!response.ok) {
throw new Error("Network response was not ok");
}

const responseData = await response.json();
console.log("Response Data:", responseData); // Log for debugging

// Find the user with matching credentials
const item = responseData.find(
(user) =>
user.username === data.username && user.password === data.password
);

if (item) {
// Store user information in localStorage
localStorage.setItem("login", "true");
localStorage.setItem("name", item.name); // Corrected to item.name
localStorage.setItem("username", data.username);
localStorage.setItem("userid", item.id);
localStorage.setItem("role", item.role);

// Redirect based on user role
if (item.role === "Admin") {
navigate("/AdminHome");
} else {
navigate("/Profile");
}
} else {
alert("Invalid username or password!");
}
} catch (error) {
alert(error.message); // Show error message to user
}
};

const handleTogglePassword = () => {
setShowPassword(!showPassword);
};

return (
<>
  <section className="bg01">
    <video id="bgVideo" autoPlay muted loop playsInline>
      <source src="./img/loging2.mp4" type="video/mp4" />
    </video>
    <div className="container pt-5 mt-5">
      <div className="row">
        <div className="col-md-8 p-4 border rounded fs-66 mt-5 m-auto">
          <h4 className="text-center fw-bold mb-4 bg-dark py-3 mt-4">
            <span className="text-secondary rounded-2 fs-3">Welcome Back!</span><br />
            <span className="text-white fs-6"> Don't have an account?
              <Link to="/Signup"> Register now</Link>
            </span>
          </h4>
          <div className="row">
            <div className="col-md-6 col-sm-12" data-aos="fade-up">
              <h5 className="text-center fw-bold mb-4 p-1 mt-4">
                <span className="text-secondary rounded-2">Sign In</span>
                <span className="text-dark"> with Social Account</span>
              </h5>
              <div className="text-center mb-4 px-5">
                {/* Social login buttons (placeholders) */}
                <button type="button" className="w-100 mb-3 btn btn-link btn-floating mx-2 border-secondary">
                  <i className="fab fa-google"> Sign in with Google</i>
                </button>
                <button type="button" className="w-100 mb-3 btn btn-link btn-floating mx-2 border-secondary">
                  <i className="fab fa-facebook-f"> Sign in with Facebook</i>
                </button>
                <button type="button" className="w-100 mb-3 btn btn-link btn-floating mx-2 border-secondary">
                  <i className="fab fa-twitter"> Sign in with Twitter</i>
                </button>
                <button type="button" className="w-100 mb-3 btn btn-link btn-floating mx-2 border-secondary">
                  <i className="fab fa-apple"> Sign in with Apple</i>
                </button>
              </div>
            </div>
            <div className="col-md-6 col-sm-12" data-aos="fade-up">
              <form onSubmit={postData}>
                <h5 className="text-center fw-bold mb-4 p-1 mt-4">
                  <span className="text-secondary rounded-2">Sign In</span>
                  <span className="text-dark"> with Username</span>
                </h5>
                <div className="mb-4 px-3">
                  <input type="text" name="username" value={data.username} onChange={getInputData}
                    className="form-control controls" placeholder="Username" />
                </div>
                <div className="mb-1 px-3 input-group">
                  <input type={showPassword ? 'text' : 'password' } name="password" value={data.password}
                    onChange={getInputData} className="form-control controls fs-6 testes2" placeholder="Password" />
                  <span className="input-group-text testes1 controls" onClick={handleTogglePassword} style={{ cursor: 'pointer' }}>
                    <i className={`far ${showPassword ? 'fa-eye' : 'fa-eye-slash' }`}></i>
                  </span>
                </div>
                <div className="mb-3 px-3">
                <span className="text-secondary float-end mb-3">
                    <Link to="/" className="fw-bold text-secondary">
                    Forgot Password?
                    </Link>
                  </span>
                </div>
                <div className="mb-3 m-auto px-3">
                  <button type="submit" className="btn btn-primary text-center w-100 m-auto p-1">
                    Sign in
                  </button>
                </div>
                <div className="mb-2 text-center px-3">
                  <p className="text-dark text-center login-bottom">
                    By creating an account, you agree to
                    <Link className="text-upper fw-bold"> JANNAT'S Terms of Use</Link> and
                    <Link className="fw-bold"> Privacy Policy</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
);
}