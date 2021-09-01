import React, { useState, useEffect } from "react";
import axios from "axios";
import { arcGisPostRequest } from "./utils/getMarkets";
import logo from "./assets/logo.png";
import AboutModal from "./components/AboutModal";
import { useMarketsState } from "./contexts/MarketsContext";
// import FilterBar from "./components/FilterBar";
// import PhillyMap from "./components/PhillyMap";
import "./styles/App.scss";

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  let [state, dispatch] = useMarketsState();
  let [error, setError] = useState(false);

  useEffect(() => {
    // TODO: handle errors
    const getMarkets = async () => {
      try {
        let res = await axios(arcGisPostRequest);
        if (res.status === 200) {
          dispatch({ type: "ON_SUCCESS", data: res.data.features });
          console.log(res.data.features);
        }
      } catch (error) {
        // this doesn't work
        dispatch({ type: "ON_FAILURE", data: error });
        setError(true);
        alert(error);
      }
    };
    getMarkets();
  }, []);

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
        {error && <div>ERROR</div>}
        <ul>
          {state.markets.map((market, index) => {
            return <li key={index}>{market.attributes.NAME}</li>;
          })}
        </ul>
        {/* <FilterBar /> */}
        {toggleModal && <AboutModal setToggleModal={setToggleModal} />}
        {/* <MarketsMap
                    containerElement={<div style={{ height: `100vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                /> */}
        {/* <PhillyMap /> */}
      </div>
    </div>
  );
}

export default App;
