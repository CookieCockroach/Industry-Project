import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Wealthsimple.png";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} className="header__logo" />
      </div>
    </>
  );
};

export default Header;
