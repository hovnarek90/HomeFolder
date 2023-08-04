import React from "react";
import classes from './menuInfo.module.css';

function ShowMenu() {
    return (
    <div className={classes.container}>
        <div className={classes.textInfo}>
            <h4>Home</h4>
        </div>
        <div className={classes.textInfo}>
            <h4>About</h4>
        </div>
        <div className={classes.textInfo}>
            <h4>Contact</h4>
        </div>
    </div>
    );
}

export default ShowMenu;