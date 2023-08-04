import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PassRegistration from "./components/Layouts/Registration/PassengerReg/PassangerRegistr";
import Header from "./components/Layouts/Header/Header.jsx";
import Main from "./components/Layouts/Main/Main";

function App() {
  function MatchAllRoute() {
    return ;
  }

  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/PassangerRegistr" element={<PassRegistration />} />
        <Route path="*" element={<MatchAllRoute />} />
        <Route path="Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
