import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

 

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

 

  return (
    <>
        <h2>Sign Up</h2>
        <form onSubmit={navigate("/login")}>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Enter Phone Number"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
          />
          <input type="submit"  />
        </form>
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
        </>
  );
};