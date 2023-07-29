import React, { useState } from "react";
import classes from "./passRegistr.module.css";

const PassRegistration = () => {
  const [errors, setErrors] = useState({});
  const persones = [];
  const [state, setState] = useState({
    fullname: "",
    number: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", state);
    }
    persones.push(state);
    console.log(persones);
    setState({
      fullname: "",
      number: "",
      password: "",
    });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const validateForm = () => {
    let errors = {};

    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!state.fullname.match(nameRegex)) {
      errors.fullName =
        "Please enter a valid full name (letters and spaces only).";
    }

    if (!state.number.match(phoneRegex)) {
      errors.phoneNumber = "Please enter a valid phone number (10 digits).";
    }

    if (!state.password.match(passwordRegex)) {
      errors.password =
        "Password must be at least 8 characters long and contain at least one letter and one number.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  return (
    <div className={classes.general}>
      <form className={classes.resepList} onSubmit={handleSubmit}>
        <div className={classes.context}>
          <h1>Registration</h1>
        </div>
        <div className={classes.info}>
          <div className={classes.inpname}>
            <label htmlFor="fullname">Full name</label>
            <br />
            <input
              id="fullname"
              name="fullname"
              type="text"
              value={state.fullname}
              onChange={handleChange}
            />
            {errors.fullname && (
              <span className="error">{errors.fullname}</span>
            )}
          </div>
          <div className={classes.inpnumber}>
            <label htmlFor="number">PhonNum</label>
            <br />
            <input
              id="number"
              name="number"
              type="tel"
              value={state.number}
              onChange={handleChange}
            />
            {errors.number && <span className="error">{errors.number}</span>}
          </div>
          <div className={classes.inppassword}>
            <label htmlFor="myPassword">Password</label>
            <br />
            <input
              id="myPassword"
              name="password"
              type="password"
              value={state.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
        </div>
        <div className={classes.setbtn}>
          <button type="submit" id="mybtn">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default PassRegistration;
