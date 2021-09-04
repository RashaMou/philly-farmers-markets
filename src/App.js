import React, { useState } from "react";
import AboutModal from "./components/AboutModal";
import { Header } from "./components/Header";
import PhillyMap from "./components/PhillyMap";
import ClickAwayListener from "react-click-away-listener";
import "./styles/App.scss";

function App() {
  const [toggleModal, setToggleModal] = useState(false);

  const handleModalClick = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <div className="App">
      <Header handleModalClick={handleModalClick} />
      <div>
        {toggleModal && (
          <ClickAwayListener onClickAway={() => setToggleModal(false)}>
            <AboutModal setToggleModal={setToggleModal} />
          </ClickAwayListener>
        )}
        <PhillyMap />
      </div>
    </div>
  );
}

export default App;
