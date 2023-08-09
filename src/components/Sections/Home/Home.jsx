import React from "react";

import classes from "./home.module.css";
import RepeatSvg from "../../Svg/repeatSvg";
import From from "../../Svg/fromLogo";
import To from "../../Svg/toLogo";
import Date from "../../Svg/dateTime";
import User from "../../Svg/person";

const Home = () => {
  const array = [
    "Yerevan",
    "Gyumri",
    "Ashtarak",
    "Goris",
    "Abaran",
    "Avan",
    "Ijevan",
    "Artashat",
    "Sasunik",
    "Talin",
  ];

  const search = () => {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();

    return array.includes(input);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.fromNav}>
          <From />
          <input
            id="searchbar"
            type="text"
            placeholder="From"
            className={classes.fromText}
          />
        </div>
        <div className={classes.repeat}>
          <RepeatSvg />
        </div>
        <div className={classes.toNav}>
          <To />
          <input type="text" placeholder="To" className={classes.toText} />
        </div>
        <div className={classes.info}>
          <div className={classes.dateTime}>
            <Date />
            <input
              type="date"
              placeholder="Time/Date"
              className={classes.dateText}
            />
          </div>
          <div className={classes.passengers}>
            <User />
            <input
              type="submit"
              placeholder="Passengers"
              className={classes.passenText}
            />
          </div>
        </div>
        <div className={classes.bttns}>
          <button className={classes.offer} onClick={search}>
            Offer a ride
          </button>
          <button className={classes.find}>Find a ride</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
