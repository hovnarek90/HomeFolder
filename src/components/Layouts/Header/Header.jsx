import React, { useState } from "react";
import classes from "./header.module.css";
import ShowMenu from "./MenuBar/MenuInfo";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [ show, setShow ] = useState(false);

  const handleShow = () => {
    setShow(!show);
  }

  return (
    <>
    <header className={classes.root}>
      <div className={classes.logoComponent}>
        <img src="" alt="Logo" />
      </div>
      <div className={classes.menuButtonComponent} onClick={handleShow}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </header>
    {show ? <ShowMenu /> : null}
    </>
  );
};

export default Header;