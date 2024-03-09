import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import pageIcon from "../../assets/logoH.png";
import { LanguageSelector } from "../../App";
import { FormattedMessage } from "react-intl";

const Header = () => {
  const { setLanguage } = useContext(LanguageSelector);

  return (
    <div className="header">
      <div className="header__links">
        <NavLink to="/" className="header__links-image">
          <img className="header__links-image" src={pageIcon} />
        </NavLink>
        <NavLink className="header__link" to="/"><FormattedMessage id="home:link-home"/></NavLink>
        <NavLink className="header__link" to="/quiz">Quiz</NavLink>
      </div>
      <div className="header__lang">
        <button onClick={() => setLanguage("es-ES")} className="header__lang-btn">
          ES
        </button>
        <button onClick={() => setLanguage("en-EN")} className="header__lang-btn">
          EN
        </button>
      </div>
    </div>
  );
};

export default Header;
