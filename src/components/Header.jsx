import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loggedin, setLoggedin] = useState(true);
  const status = useOnlineStatus();

  const data = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="bg-red-300 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="">
          <img
            src="https://logo.com/image-cdn/images/kts928pd/production/7ab5def0ab1dad26a90bc35cb7eed9e628f7f201-430x430.png?w=1080&q=72"
            alt="app-logo"
            className="w-20 h-full "
          />
        </Link>

        <div className="flex items-center space-x-4">
          <div className="text-white">
            Online Status: {status ? "✅" : "🔴"}
          </div>

          <nav className="text-white">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:underline">
                  🛒 -({cartItems.length})
                </Link>
              </li>
              <li>
                <Link to="/Grocery" className="hover:underline">
                  Grocery
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => {
              setLoggedin(!loggedin);
            }}
          >
            {loggedin ? "Login" : "Logout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
