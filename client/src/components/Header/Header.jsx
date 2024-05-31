import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Wealthsimple.png";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <img src={logo} className="header__logo" />
        </Link>
        <NavLink to={"/tracker"} className="header__tracker">
          <button className="header__tracker-button">Game History</button>
        </NavLink>
      </div>
    </>
  );
};

export default Header;
