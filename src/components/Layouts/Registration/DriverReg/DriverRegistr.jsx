import React from "react";
import { Link } from "react-router-dom";

import classes from "./driverRegistr.module.css";

const DriverRegistration = () => {
  return (
    <div className={classes.general}>
      <form className={classes.resepList}>
        <div className={classes.context}>
          <h3>Driver Registration</h3>
        </div>
        <div className={classes.info}>
          <div className={classes.inpname}>
            <input id="myName" type="text" placeholder="Enter your name" />
            <div className={classes.error}></div>
          </div>
          <div className={classes.inpemail}>
            <input id="myEmail" type="text" placeholder="Enter your email" />
            <div className={classes.error}></div>
          </div>
          <div className={classes.inppassword}>
            <input
              id="myPassword"
              type="password"
              placeholder="Enter your password"
            />
            <div className={classes.error}></div>
          </div>
          <div className={classes.inppassword2}>
            <input
              id="myPassword2"
              type="password"
              placeholder="Confirm your password"
            />
            <div className={classes.error}></div>
          </div>
        </div>
        <div className={classes.setbtn}>
          <Link to="/PassangerRegistr">
            <button type="submit" id="mybtn">
              Go Register
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default DriverRegistration;
