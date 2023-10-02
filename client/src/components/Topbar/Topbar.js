import { Link } from "react-router-dom";

import "./Topbar.css";

const Topbar = () => {
  const user = true;

  return (
    <div className="topbar">
      <div className="top-left">
        <i className="top-icon fa-brands fa-square-facebook"></i>
        <i className="top-icon fa-brands fa-square-twitter"></i>
        <i className="top-icon fa-brands fa-square-pinterest"></i>
        <i className="top-icon fa-brands fa-square-instagram"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="top-list-item">ABOUT</li>
          <li className="top-list-item">CONTACT</li>
          <li className="top-list-item">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="top-list-item">LOGOUT</li>}
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="top-image"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="top-list-item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
