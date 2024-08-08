import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

export default function Signup() {
const [data, setData] = useState({
  name: "",
  email: "",
  password: "",
  username: "",
  number: "",
  cpassword: "",
});
const navigate = useNavigate();
function getInputData(e) {
  setData((prevData) => ({
    ...prevData,
    [e.target.name]: e.target.value,
  }));
}

// async function postData(e) {
//   e.preventDefault();

//   // Check if username already exists
//   const response = await fetch("/user");
//   const users = await response.json();
//   if (users.find((user) => user.username === data.username)) {
//     alert("User already exists");
//   } else {
//     // Prepare data for POST request
//     const item = {
//       name: data.name,
//       email: data.email,
//       password: data.password,
//       username: data.username,
//       number: data.number,
//       cpassword: data.cpassword, // Fixed: should be data.cpassword
//       role:"Buyer"
//     };

//     // Send POST request to create new user
//     const response = await fetch("/user", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(item),


//     });

//     // Handle response
//     const result = await response.json();
//     navigator("/Profile");
//     console.log(result); // Log or handle response as needed
//     alert("User created successfully");
//   }

// }


// Ensure you call `useNavigate` hook at the top level of your component


async function postData(e) {
  e.preventDefault();

  try {
    // Check if username already exists
    let response = await fetch("/user");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const users = await response.json();

    if (users.some((user) => user.username === data.username)) {
      alert("User already exists");
      return; // Exit function if user exists
    }

    // Prepare data for POST request
    const item = {
      name: data.name,
      email: data.email,
      password: data.password,
      username: data.username,
      number: data.number,
      cpassword: data.cpassword, // Ensure this field is needed or remove it
      role: "Buyer"
    };

    // Send POST request to create new user
    response = await fetch("/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const result = await response.json();
    console.log(result); // Log or handle response as needed
    alert("User created successfully");

    // Navigate to Profile page
    navigate("/Profile");

  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  }
}

return (
<>
    <br /> <br />
    <section className="bg-pink">
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 col-sm-12 m-auto border rounded-2 p-4 mt-5 bg-light">
                    <h4 className="text-center fw-bold mb-4 bg-dark p-1 mt-4">
                        <span className="text-secondary rounded-2">Create</span>
                        <span className="text-white"> a free Account</span>
                    </h4>
                    <form onSubmit={postData}>
                        <div className="row g-2">
                            <div className="col-sm-6">
                                <div className="mb-4">
                                    <input type="text" name="name" onChange={getInputData}
                                        className="form-control controls" placeholder="Enter Name :" required />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-4">
                                    <input type="text" name="username" onChange={getInputData}
                                        className="form-control controls" placeholder="Username :" required />
                                </div>
                            </div>
                        </div>
                        <div className="row g-2">
                            <div className="col-sm-6">
                                <div className="mb-4">
                                    <input type="email" name="email" onChange={getInputData}
                                        className="form-control controls" placeholder="Enter Email :" required />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-4">
                                    <input type="number" name="number" onChange={getInputData}
                                        className="form-control controls" placeholder="Enter Number :" required />
                                </div>
                            </div>
                        </div>
                        <div className="row g-2">
                            <div className="col-sm-6">
                                <div className="mb-4">
                                    <input type="password" name="password" onChange={getInputData}
                                        className="form-control controls" placeholder="Enter Password :" required />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-4">
                                    <input type="password" name="cpassword" onChange={getInputData}
                                        className="form-control controls" placeholder="Confirm Password :" required />
                                </div>
                            </div>
                        </div>
                        <div className="text-center mb-4">
                            {/* Social login buttons (placeholders) */}
                            <button type="button"
                                className="btn btn-link btn-floating mx-2 rounded-circle border-secondary">
                                <i className="fab fa-facebook-f"></i>
                            </button>
                            <button type="button"
                                className="btn btn-link btn-floating mx-2 rounded-circle border-secondary">
                                <i className="fab fa-google"></i>
                            </button>
                            <button type="button"
                                className="btn btn-link btn-floating mx-2 rounded-circle border-secondary">
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button type="button"
                                className="btn btn-link btn-floating mx-2 rounded-circle border-secondary">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>
                        <div className="mb-4">
                            <input type="submit" name="submit" className="btn btn-primary w-100 p-1" value="Signup" />
                        </div>
                    </form>
                    <div className="fw-bold d-flex justify-content-between mb-3 px-2">
                        <span className="text-secondary">
                            <Link to="/Login" className="text-secondary">Already Have an Account?</Link>
                        </span>
                        <Link to="/Login">Login Here</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
);
}