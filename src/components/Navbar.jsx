import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar App">
      <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
