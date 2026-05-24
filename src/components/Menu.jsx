const Menu = () => {
  return (
    <div>
      <>
        {/* Header */}
        <header className="header header-custom header-fixed inner-header relative">
          <div className="container">
            <nav className="navbar navbar-expand-lg header-nav">
              <div className="navbar-header">
                <a id="mobile_btn" href="javascript:void(0);">
                  <span className="bar-icon">
                    <span />
                    <span />
                    <span />
                  </span>
                </a>
                <a href="index.html" className="navbar-brand logo">
                  <img src="/img/logo.svg" className="img-fluid" alt="Logo" />
                </a>
              </div>
              <div className="header-menu">
                <div className="main-menu-wrapper">
                  <div className="menu-header">
                    <a href="index.html" className="menu-logo">
                      <img
                        src="/img/logo.svg"
                        className="img-fluid"
                        alt="Logo"
                      />
                    </a>
                    <a
                      id="menu_close"
                      className="menu-close"
                      href="javascript:void(0);"
                    >
                      <i className="fas fa-times" />
                    </a>
                  </div>
                  <ul className="main-nav">
                    <li className="has-submenu megamenu active">
                      <a href="javascript:void(0);">Home</a>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">
                        Doctors <i className="fas fa-chevron-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="doctor-dashboard.html">Doctor Dashboard</a>
                        </li>
                        <li>
                          <a href="appointments.html">Appointments</a>
                        </li>

                        <li>
                          <a href="doctor-register.html">Doctor Register</a>
                        </li>
                        <li className="has-submenu">
                          <a href="doctor-blog.html">Blog</a>
                          <ul className="submenu">
                            <li>
                              <a href="doctor-blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog view</a>
                            </li>
                            <li>
                              <a href="doctor-add-blog.html">Add Blog</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">
                        Patients <i className="fas fa-chevron-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="patient-dashboard.html">Patient Dashboard</a>
                        </li>
                        <li className="has-submenu">
                          <a href="javascript:void(0);">Doctors</a>
                          <ul className="submenu inner-submenu">
                            <li>
                              <a href="map-grid.html">Map Grid</a>
                            </li>
                            <li>
                              <a href="map-list.html">Map List</a>
                            </li>
                            <li>
                              <a href="map-list-availability.html">
                                Map with Availability
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">
                        Pharmacy <i className="fas fa-chevron-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="pharmacy-index.html">Pharmacy</a>
                        </li>
                        <li>
                          <a href="pharmacy-details.html">Pharmacy Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">
                        Pages <i className="fas fa-chevron-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="contact-us.html">Contact Us</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="#">
                        Blog <i className="fas fa-chevron-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="blog-list.html">Blog List</a>
                        </li>
                        <li>
                          <a href="blog-grid.html">Blog Grid</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="#">
                        Admin <i className="fas fa-chevron-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="admin/index.html" target="_blank">
                            Admin
                          </a>
                        </li>
                        <li>
                          <a href="pharmacy/index.html" target="_blank">
                            Pharmacy Admin
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <ul className="nav header-navbar-rht">
                  <li className="searchbar">
                    <a href="javascript:void(0);">
                      <i className="feather-search" />
                    </a>
                    <div className="togglesearch">
                      <form action="search.html">
                        <div className="input-group">
                          <input type="text" className="form-control" />
                          <button type="submit" className="btn">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </li>
                  <li>
                    <a
                      href="login.html"
                      className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                    >
                      <i className="isax isax-lock-1 me-1" />
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a
                      href="register.html"
                      className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                    >
                      <i className="isax isax-user-tick me-1" />
                      Register
                    </a>
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
