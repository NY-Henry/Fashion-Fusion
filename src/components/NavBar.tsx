import { ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Fashion-Fusion");
  };

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-50 flex h-14 items-center justify-between bg-gray-800 px-4 py-2 text-white shadow md:h-16 md:px-6"
      aria-label="Main navigation"
    >
      <div className="flex items-center space-x-2 md:space-x-4">
        <h1
          onClick={handleClick}
          className="heading cursor-pointer text-lg md:text-base lg:text-2xl"
        >
          Fashion Fusion
        </h1>
        <ShoppingBag
          onClick={handleClick}
          className="h-5 w-5 cursor-pointer text-white md:h-6 md:w-6"
          role="button"
          aria-label="Home"
        />
      </div>

      <div>
        <ul className="flex space-x-4 text-sm md:space-x-6 md:text-base lg:space-x-12 lg:text-xl">
          <li>
            <Link to="/Fashion-Fusion/products">Products</Link>
          </li>
          <li>
            <Link to="/Fashion-Fusion/register">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
