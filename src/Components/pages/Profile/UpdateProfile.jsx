import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function getInputData(e) {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function getInputFile(e) {
    const { name, files } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: files[0].name,
      // If you need to store the file itself, use FormData:
      // [name]: files[0],
    }));
  }

  async function postData(e) {
    e.preventDefault();
    try {
      const response = await fetch(`/user/${localStorage.getItem("userid")}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        navigate("/login");
      } else {
        setMessage(data.message); // Handle error message from backend
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Failed to update profile. Please try again."); // Generic error message
    }
  }

  async function getApiData() {
    var response = await fetch(`/user/${localStorage.getItem("userid")}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setUser(response);
  }
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <section className="bg-pink p-3">
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">
            Update Your Profile
          </h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/Profile">
                {localStorage.getItem("role") === "Admin"
                  ? "Profile"
                  : "Your Profile"}
              </Link>
            </li>
            <li className="breadcrumb-item active text-white">
              <Link to="/UpdateProfile" className="text-white">
                Update Profile
              </Link>
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-pink">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-8 m-auto p-4 border rounded-3 bg-light">
              <h5 className="bg-primary text-center p-2 fw-bold border rounded">
                Update Your Profile
              </h5>
              <form onSubmit={postData}>
                <div className="row g-2">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label m-0 ps-2">
                        Your Name:
                      </label>
                      <input
                        type="text"
                        className="form-control controls"
                        id="name"
                        name="name"
                        value={user.name || ""}
                        onChange={getInputData}
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label m-0 ps-2">
                        Your Email:
                      </label>
                      <input
                        type="email"
                        className="form-control controls"
                        id="email"
                        name="email"
                        value={user.email || ""}
                        onChange={getInputData}
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row g-2">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label m-0 ps-2">
                        Phone Number:
                      </label>
                      <input
                        type="text"
                        className="form-control controls"
                        id="phone"
                        name="phone"
                        value={user.number || ""}
                        onChange={getInputData}
                        placeholder="Enter Phone Number"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label m-0 ps-2">
                        Address:
                      </label>
                      <input
                        type="text"
                        className="form-control controls"
                        id="address"
                        name="address"
                        value={user.address || ""}
                        onChange={getInputData}
                        placeholder="Enter Address"
                      />
                    </div>
                  </div>
                </div>
                <div className="row g-2">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="pin" className="form-label m-0 ps-2">
                        PIN Code:
                      </label>
                      <input
                        type="text"
                        className="form-control controls"
                        id="pin"
                        name="pin"
                        value={user.pin || ""}
                        onChange={getInputData}
                        placeholder="Enter PIN Code"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="city" className="form-label m-0 ps-2">
                        City:
                      </label>
                      <input
                        type="text"
                        className="form-control controls"
                        id="city"
                        name="city"
                        value={user.city || ""}
                        onChange={getInputData}
                        placeholder="Enter City"
                      />
                    </div>
                  </div>
                </div>
                <div className="row g-2">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="state" className="form-label m-0 ps-2">
                        State:
                      </label>
                      <input
                        type="text"
                        className="form-control controls"
                        id="state"
                        name="state"
                        value={user.state || ""}
                        onChange={getInputData}
                        placeholder="Enter State"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="country" className="form-label m-0 ps-2">
                        Country:
                      </label>
                      <input
                        type="text"
                        className="form-control controls"
                        id="country"
                        name="country"
                        value={user.country || ""}
                        onChange={getInputData}
                        placeholder="Enter Country"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="pic" className="form-label m-0 ps-2">
                    Profile Picture:
                  </label>
                  <input
                    type="file"
                    className="form-control controls mb-2"
                    id="pic"
                    name="pic"
                    onChange={getInputFile}
                  />
                </div>
                <div className="d-flex justify-content-center px-3">
                  <Link to="/Profile" className="btn btn-secondary w-100">
                    Back to Profile
                  </Link>
                  <button
                    type="submit"
                    className="btn btn-primary m-auto w-100 ms-2"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
              {message && (
                <div className="alert alert-info mt-3">{message}</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
