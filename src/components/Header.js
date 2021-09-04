import logo from "../assets/logo.png";
import { FilterChips } from "./FilterChips";

export const Header = (props) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="question-container">
        <i
          onClick={props.handleModalClick}
          className="far fa-question-circle"
        ></i>
      </div>
      <FilterChips />
    </header>
  );
};
