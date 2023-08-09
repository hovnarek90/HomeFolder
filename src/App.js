import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PassRegistration from "./components/Layouts/Registration/PassengerReg/PassangerRegistr";
import DriverRegistration from "./components/Layouts/Registration/DriverReg/DriverRegistr";
import Header from "./components/Layouts/Header/Header.jsx";
import Main from "./components/Layouts/Main/Main";
import Home from "./components/Sections/Home/Home";

function App() {
  function MatchAllRoute() {
    return;
  }

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PassRegistration />} />
          <Route path="DriverRegistration" element={<DriverRegistration />} />
          <Route path="/PassangerRegistr" element={<PassRegistration />} />
          <Route path="Home" element={<Home />} />
          <Route path="*" element={<MatchAllRoute />} />
          <Route path="Main" element={<Main />} />
          {/* <Route exact path="/" component={HomePage} /> */}
          {/* <Route path="/second" component={SecondPage} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
