import React from "react";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const [colorMode, setColorMode] = React.useState("light");

  const toggleColorMode = () => {
    const newMode = colorMode === "light" ? "dark" : "light";
    setColorMode(newMode);

    // Toggle body class for light/dark mode
    document.body.classList.toggle("bg-dark", newMode === "dark");
    document.body.classList.toggle("text-white", newMode === "dark");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        colorMode === "light" ? "navbar-light bg-light" : "navbar-dark bg-dark"
      }`}
    >
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold text-uppercase">
          <span className="text-gradient">Product Store 🛒</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {/* Add Product Button */}
            <li className="nav-item">
              <Link to="/create" className="btn btn-primary me-2 d-flex align-items-center">
                <span className="me-1">+</span> Add Product
              </Link>
            </li>

            {/* Dark Mode Toggle Button */}
            <li className="nav-item">
              <button
                className="btn btn-secondary"
                onClick={toggleColorMode}
                style={{ cursor: "pointer" }}
              >
                {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
