import React, { useState } from "react";
import logo from "./assets/logo.png";
import AboutModal from "./components/AboutModal";
import FilterBar from "./components/FilterBar";
import MarketsMap from "./components/MarketsMap";

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
                <FilterBar />
                {toggleModal && <AboutModal setToggleModal={setToggleModal} />}
                <MarketsMap
                    containerElement={<div style={{ height: `100vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </div>
    );
}

export default App;
