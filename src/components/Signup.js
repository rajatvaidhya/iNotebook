import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, password } = credentials;

    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success === true) {
      localStorage.setItem("token", json.authtoken);
      history.push("/");
      props.showAlert("Account Created Successfully", "success");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div class="background" style={{ zIndex: "-2" }}>
        <div class="shape"></div>
        <div class="shape"></div>
      </div>

      <form onSubmit={handleSubmit} style={{ zIndex: "-1" }}>
        <h3 style={{ marginBottom: "1.5rem" }}>Create an account</h3>
        <div>
          <input
            required
            type="text"
            onChange={onChange}
            name="name"
            id="username"
            aria-describedby="emailHelp"
            placeholder="Full name"
          />

          <input
            required
            type="email"
            onChange={onChange}
            name="email"
            id="username"
            aria-describedby="emailHelp"
            placeholder="Email address"
          />

          <input
            required
            type="password"
            onChange={onChange}
            name="password"
            id="username"
            minLength={5}
            placeholder="Password"
          />

          <input
            required
            type="password"
            onChange={onChange}
            name="cpassword"
            id="username"
            minLength={5}
            placeholder="Confirm Password"
          />
        </div>
        <button style={{marginTop:"2rem"}} type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default Signup;
