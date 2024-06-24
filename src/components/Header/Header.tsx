import NotificationContainer from "../NotificationContainer/NotificationContainer";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <NotificationContainer />
    </div>
  );
};

export default Header;
