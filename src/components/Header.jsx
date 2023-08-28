import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <nav>
            <Link to="/pokemon">Pokemons</Link>
            <Link to="/type">Types</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
