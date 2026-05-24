const Header = () => {
  return (
    <div>
      <div className="header-topbar">
        <div className="container">
          <div className="topbar-info">
            <div className="d-flex align-items-center gap-3 header-info">
              <p>
                <i className="isax isax-message-text5 me-1" />
                info@example.com
              </p>
              <p>
                <i className="isax isax-call5 me-1" />
                +1 66589 14556
              </p>
            </div>
            <ul>
              <li className="header-theme">
                <a
                  href="javascript:void(0);"
                  id="dark-mode-toggle"
                  className="theme-toggle"
                >
                  <i className="isax isax-sun-1" />
                </a>
                <a
                  href="javascript:void(0);"
                  id="light-mode-toggle"
                  className="theme-toggle activate"
                >
                  <i className="isax isax-moon" />
                </a>
              </li>
              <li className="d-inline-flex align-items-center drop-header">
                <div className="dropdown dropdown-country me-3">
                  <a
                    href="javascript:void(0);"
                    className="d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="/img/flags/us-flag.svg"
                      className="me-2"
                      alt="flag"
                    />
                  </a>
                  <ul className="dropdown-menu p-2 mt-2">
                    <li>
                      <a
                        className="dropdown-item rounded d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <img
                          src="/img/flags/us-flag.svg"
                          className="me-2"
                          alt="flag"
                        />
                        ENG
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item rounded d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <img
                          src="/img/flags/arab-flag.svg"
                          className="me-2"
                          alt="flag"
                        />
                        ARA
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item rounded d-flex align-items-center"
                        href="javascript:void(0);"
                      >
                        <img
                          src="/img/flags/france-flag.svg"
                          className="me-2"
                          alt="flag"
                        />
                        FRA
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown dropdown-amt">
                  <a
                    href="javascript:void(0);"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    USD
                  </a>
                  <ul className="dropdown-menu p-2 mt-2">
                    <li>
                      <a
                        className="dropdown-item rounded"
                        href="javascript:void(0);"
                      >
                        USD
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item rounded"
                        href="javascript:void(0);"
                      >
                        YEN
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item rounded"
                        href="javascript:void(0);"
                      >
                        EURO
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="social-header">
                <div className="social-icon">
                  <a href="javascript:void(0);">
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a href="javascript:void(0);">
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                  <a href="javascript:void(0);">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href="javascript:void(0);">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                  <a href="javascript:void(0);">
                    <i className="fa-brands fa-pinterest" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
