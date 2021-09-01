import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import AboutModal from "./components/AboutModal";
// import FilterBar from "./components/FilterBar";
import PhillyMap from "./components/PhillyMap";
import "./styles/App.scss";

function App() {
  const [toggleModal, setToggleModal] = useState(false);

  const modal = () => {
    console.log("click");
    setToggleModal(!toggleModal);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="question-container" onClick={modal}>
          <i onClick={modal} className="far fa-question-circle"></i>
        </div>
      </header>
      <div>
        {/* <FilterBar /> */}
        {toggleModal && <AboutModal setToggleModal={setToggleModal} />}
        <PhillyMap />
      </div>
    </div>
  );
}

export default App;
