import { useState } from "react";
import PassRegistration from "./components/Layouts/Registration/PassengerReg/PassangerRegistr";
import DriverRegistration from "./components/Layouts/Registration/DriverReg/DriverRegistr";
 
// import Header from "./components/Layouts/Header/Header.jsx";
// import Main from "./components/Layouts/Main/Main";

function App() {
  const [pass, setPass] = useState(false);
  const [driver, setDriver] = useState(false);

  return (
    <>
    <button type="button" onClick={()=>{setDriver(!driver)}}>Driver</button>
      {driver ? <DriverRegistration /> : null }
    <button type="button" onClick={()=>{setPass(!pass)}}>Passenger</button>
      {pass ? <PassRegistration /> : null }

      {/* <Header />
      <Main /> */}
    </>
  );
}

export default App;
