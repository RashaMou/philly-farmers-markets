import logo from "../assets/logo.png";

export const Header = ({ handleModalClick }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="question-container" onClick={handleModalClick}>
        <i onClick={handleModalClick} className="far fa-question-circle"></i>
      </div>
    </header>
  );
};
