import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {

    const [open, setOpen] = useState(false);

  return (
    <div>
      <>
        {/* Header */}
         <header className="header header-custom header-fixed inner-header relative">

      <div className="container">

        <nav className="navbar navbar-expand-lg header-nav">

          <div className="navbar-header">

            <button
              id="mobile_btn"
              type="button"
              className="border-0 bg-transparent"
              onClick={() => setOpen(!open)}
            >
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </button>

            <Link to="/" className="navbar-brand logo">
              <img
                src="/img/logo.svg"
                className="img-fluid"
                alt="Logo"
              />
            </Link>

          </div>

          <div
            className={`header-menu ${
              open ? "menu-open" : ""
            }`}
          >

            <div className="main-menu-wrapper">

              <div className="menu-header">

                <Link to="/" className="menu-logo">
                  <img
                    src="/img/logo.svg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>

                <button
                  className="menu-close border-0 bg-transparent"
                  onClick={() => setOpen(false)}
                >
                  <i className="fas fa-times" />
                </button>

              </div>

              <ul className="main-nav">

                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/doctors">
                    Doctors
                  </Link>
                </li>

                <li>
                  <Link to="/patients">
                    Patients
                  </Link>
                </li>

                <li>
                  <Link to="/pharmacy">
                    Pharmacy
                  </Link>
                </li>

                <li>
                  <Link to="/about">
                    About
                  </Link>
                </li>

                <li>
                  <Link to="/blog">
                    Blog
                  </Link>
                </li>

              </ul>
            </div>

            <ul className="nav header-navbar-rht">

              <li>
                <Link
                  to="/login"
                  className="btn btn-primary-gradient rounded-pill"
                >
                  Sign Up
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="btn btn-dark rounded-pill"
                >
                  Register
                </Link>
              </li>

            </ul>

          </div>

        </nav>

      </div>

    </header>
        {/* /Header */}
      </>
    </div>
  );
};

export default Menu;
