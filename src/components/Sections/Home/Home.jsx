import React, { useState } from "react";
import classes from "./home.module.css";
import RepeatSvg from "../../svgs/repeatSvg";
import From from "../../svgs/fromLogo";
import To from "../../svgs/toLogo";
import Date from "../../svgs/dateTime";
import User from "../../svgs/person";

const Home = () => {
  const [searching, setSearching] = useState("");
  const array = [
    "Yerevan", "Gyumri", "Ashtarak",
    "Goris", "Abaran", "Avan", "Ijevan",
    "Artashat", "Sasunik","Talin"
  ];

  const search = () => {
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();

    // return array.includes(input);

    for (let i = 0; i < array.length; i++) {
      if (array[i].toLowerCase() === input) {
        console.log("hello");
      }
      console.log("Error");
    }
  }

  return <div className={classes.root}>
    <div className={classes.container}>
      <div className={classes.fromNav}>
        <From />
        <input id="searchbar" type="text" placeholder="From" className={classes.fromText}/> 
      </div>
      <div className={classes.repeat}>
        <RepeatSvg />
      </div>
      <div className={classes.toNav}>
          <To />
          <input type="text" placeholder="To" className={classes.toText}/>
      </div>
      <div className={classes.info}>
        <div className={classes.dateTime}>
          <Date />
          <input type="date" placeholder="Time/Date" className={classes.dateText} />
        </div>
        <div className={classes.passengers}>
          <User />
          <input type="submit" placeholder="Passengers" className={classes.passenText} />
        </div>
      </div>
      <div className={classes.bttns}>
        <button className={classes.offer} onClick={search}>Offer a ride</button>
        <button className={classes.find}>Find a ride</button>
      </div>
    </div>
  
</div>;
};

export default Home;
