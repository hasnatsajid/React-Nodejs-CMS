import ProfilePic1 from '../assets/img/team/profile-picture-1.jpg';
import ProfilePic2 from '../assets/img/team/profile-picture-2.jpg';
import ProfilePic3 from '../assets/img/team/profile-picture-3.jpg';
import ProfilePic4 from '../assets/img/team/profile-picture-4.jpg';
import ProfilePic5 from '../assets/img/team/profile-picture-5.jpg';

const Settings = () => {
  return (
    <>
      <nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
        <div className="container-fluid px-0">
          <div className="d-flex justify-content-between w-100" id="navbarSupportedContent">
            <div className="d-flex align-items-center">
              {/* <!-- Search form --> */}
              <form className="navbar-search form-inline" id="navbar-search-main">
                <div className="input-group input-group-merge search-bar">
                  <span className="input-group-text" id="topbar-addon">
                    <svg
                      className="icon icon-xs"
                      x-description="Heroicon name: solid/search"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="topbarInputIconLeft"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="topbar-addon"
                  />
                </div>
              </form>
              {/* <!-- / Search form --> */}
            </div>
            {/* <!-- Navbar links --> */}
            <ul className="navbar-nav align-items-center">
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-dark notification-bell unread dropdown-toggle"
                  data-unread-notifications="true"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                >
                  <svg className="icon icon-sm text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                  </svg>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                  <div className="list-group list-group-flush">
                    <a href="/#" className="text-center text-primary fw-bold border-bottom border-light py-3">
                      Notifications
                    </a>
                    <a href="/#" className="list-group-item list-group-item-action border-bottom">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          {/* <!-- Avatar --> */}
                          <img alt="pretty" src={ProfilePic1} className="avatar-md rounded" />
                        </div>
                        <div className="col ps-0 ms-2">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h4 className="h6 mb-0 text-small">Jose Leos</h4>
                            </div>
                            <div className="text-end">
                              <small className="text-danger">a few moments ago</small>
                            </div>
                          </div>
                          <p className="font-small mt-1 mb-0">Added you to an event "Project stand-up" tomorrow at 12:30 AM.</p>
                        </div>
                      </div>
                    </a>
                    <a href="/#" className="list-group-item list-group-item-action border-bottom">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          {/* <!-- Avatar --> */}
                          <img alt="pretty" src={ProfilePic2} className="avatar-md rounded" />
                        </div>
                        <div className="col ps-0 ms-2">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h4 className="h6 mb-0 text-small">Neil Sims</h4>
                            </div>
                            <div className="text-end">
                              <small className="text-danger">2 hrs ago</small>
                            </div>
                          </div>
                          <p className="font-small mt-1 mb-0">You've been assigned a task for "Awesome new project".</p>
                        </div>
                      </div>
                    </a>
                    <a href="/#" className="list-group-item list-group-item-action border-bottom">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          {/* <!-- Avatar --> */}
                          <img alt="pretty" src={ProfilePic3} className="avatar-md rounded" />
                        </div>
                        <div className="col ps-0 m-2">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h4 className="h6 mb-0 text-small">Roberta Casas</h4>
                            </div>
                            <div className="text-end">
                              <small>5 hrs ago</small>
                            </div>
                          </div>
                          <p className="font-small mt-1 mb-0">Tagged you in a document called "Financial plans",</p>
                        </div>
                      </div>
                    </a>
                    <a href="/#" className="list-group-item list-group-item-action border-bottom">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          {/* <!-- Avatar --> */}
                          <img alt="pretty" src={ProfilePic4} className="avatar-md rounded" />
                        </div>
                        <div className="col ps-0 ms-2">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h4 className="h6 mb-0 text-small">Joseph Garth</h4>
                            </div>
                            <div className="text-end">
                              <small>1 d ago</small>
                            </div>
                          </div>
                          <p className="font-small mt-1 mb-0">New message: "Hey, what's up? All set for the presentation?"</p>
                        </div>
                      </div>
                    </a>
                    <a href="/#" className="list-group-item list-group-item-action border-bottom">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          {/* <!-- Avatar --> */}
                          <img alt="pretty" src={ProfilePic5} className="avatar-md rounded" />
                        </div>
                        <div className="col ps-0 ms-2">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <h4 className="h6 mb-0 text-small">Bonnie Green</h4>
                            </div>
                            <div className="text-end">
                              <small>2 hrs ago</small>
                            </div>
                          </div>
                          <p className="font-small mt-1 mb-0">New message: "We need to improve the UI/UX for the landing page."</p>
                        </div>
                      </div>
                    </a>
                    <a href="/#" className="dropdown-item text-center fw-bold rounded-bottom py-3">
                      <svg className="icon icon-xxs text-gray-400 me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      View all
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown ms-lg-3">
                <a className="nav-link dropdown-toggle pt-1 px-0" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <div className="media d-flex align-items-center">
                    <img className="avatar rounded-circle" alt="pretty" src={ProfilePic3} />
                    <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                      <span className="mb-0 font-small fw-bold text-gray-900">Bonnie Green</span>
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1">
                  <a className="dropdown-item d-flex align-items-center" href="/#">
                    <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    My Profile
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="/#">
                    <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Settings
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="/#">
                    <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Messages
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="/#">
                    <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Support
                  </a>
                  <div role="separator" className="dropdown-divider my-1"></div>
                  <a className="dropdown-item d-flex align-items-center" href="/#">
                    <svg className="dropdown-icon text-danger me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div>
          <div className="dropdown">
            <button
              className="btn btn-secondary d-inline-flex align-items-center me-2 dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg className="icon icon-xs me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              New
            </button>
            <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1">
              <a className="dropdown-item d-flex align-items-center" href="/#">
                <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Document
              </a>
              <a className="dropdown-item d-flex align-items-center" href="/#">
                <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Message
              </a>
              <a className="dropdown-item d-flex align-items-center" href="/#">
                <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path>
                  <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
                </svg>
                Product
              </a>
              <div role="separator" className="dropdown-divider my-1"></div>
              <a className="dropdown-item d-flex align-items-center" href="/#">
                <svg className="dropdown-icon text-danger me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                My Plan
              </a>
            </div>
          </div>
        </div>
        <div>
          <button type="button" className="btn btn-gray-800 d-inline-flex align-items-center me-2">
            <svg className="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            className="btn btn-gray-800 d-inline-flex align-items-center dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              ></path>
            </svg>
            Reports
            <svg className="icon icon-xs ms-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1">
            <a className="dropdown-item d-flex align-items-center" href="/#">
              <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
                <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              Products
            </a>
            <a className="dropdown-item d-flex align-items-center" href="/#">
              <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
              Customers
            </a>
            <a className="dropdown-item d-flex align-items-center" href="/#">
              <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Orders
            </a>
            <a className="dropdown-item d-flex align-items-center" href="/#">
              <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Console
            </a>
            <div role="separator" className="dropdown-divider my-1"></div>
            <a className="dropdown-item d-flex align-items-center" href="/#">
              <svg className="dropdown-icon text-gray-800 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              All Reports
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-xl-8">
          <div className="card card-body border-0 shadow mb-4">
            <h2 className="h5 mb-4">General information</h2>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div>
                    <label htmlFor="first_name">First Name</label>
                    <input className="form-control" id="first_name" type="text" placeholder="Enter your first name" required />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div>
                    <label htmlFor="last_name">Last Name</label>
                    <input className="form-control" id="last_name" type="text" placeholder="Also your last name" required />
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6 mb-3">
                  <label htmlFor="birthday">Birthday</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg className="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <input data-datepicker="" className="form-control" id="birthday" type="text" placeholder="dd/mm/yyyy" required />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="gender">Gender</label>
                  <select className="form-select mb-0" id="gender" aria-label="Gender select example">
                    <option defaultValue="0">Gender</option>
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" id="email" type="email" placeholder="name@company.com" required />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input className="form-control" id="phone" type="number" placeholder="+12-345 678 910" required />
                  </div>
                </div>
              </div>
              <h2 className="h5 my-4">Location</h2>
              <div className="row">
                <div className="col-sm-9 mb-3">
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input className="form-control" id="address" type="text" placeholder="Enter your home address" required />
                  </div>
                </div>
                <div className="col-sm-3 mb-3">
                  <div className="form-group">
                    <label htmlFor="number">Number</label>
                    <input className="form-control" id="number" type="number" placeholder="No." required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 mb-3">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input className="form-control" id="city" type="text" placeholder="City" required />
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select className="form-select w-100 mb-0" id="state" name="state" aria-label="State select example">
                    <option defaultValue="0">State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label htmlFor="zip">ZIP</label>
                    <input className="form-control" id="zip" type="tel" placeholder="ZIP" required />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <button className="btn btn-gray-800 mt-2 animate-up-2" type="submit">
                  Save all
                </button>
              </div>
            </form>
          </div>
          <div className="card card-body border-0 shadow mb-4 mb-xl-0">
            <h2 className="h5 mb-4">Alerts & Notifications</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex align-items-center justify-content-between px-0 border-bottom">
                <div>
                  <h3 className="h6 mb-1">Company News</h3>
                  <p className="small pe-4">Get Rocket news, announcements, and product updates</p>
                </div>
                <div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="user-notification-1" />
                    <label className="form-check-label" htmlFor="user-notification-1"></label>
                  </div>
                </div>
              </li>
              <li className="list-group-item d-flex align-items-center justify-content-between px-0 border-bottom">
                <div>
                  <h3 className="h6 mb-1">Account Activity</h3>
                  <p className="small pe-4">Get important notifications about you or activity you've missed</p>
                </div>
                <div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="user-notification-2" defaultChecked />
                    <label className="form-check-label" htmlFor="user-notification-2"></label>
                  </div>
                </div>
              </li>
              <li className="list-group-item d-flex align-items-center justify-content-between px-0">
                <div>
                  <h3 className="h6 mb-1">Meetups Near You</h3>
                  <p className="small pe-4">Get an email when a Dribbble Meetup is posted close to my location</p>
                </div>
                <div>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="user-notification-3" defaultChecked />
                    <label className="form-check-label" htmlFor="user-notification-3"></label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-xl-4">
          <div className="row">
            <div className="col-12 mb-4">
              <div className="card shadow border-0 text-center p-0">
                <div className="profile-cover rounded-top" data-background="../assets/img/profile-cover.jpg"></div>
                <div className="card-body pb-5">
                  <img src={ProfilePic1} className="avatar-xl rounded-circle mx-auto mt-n7 mb-4" alt="Neil Portrait" />
                  <h4 className="h3">Neil Sims</h4>
                  <h5 className="fw-normal">Senior Software Engineer</h5>
                  <p className="text-gray mb-4">New York, USA</p>
                  <a className="btn btn-sm btn-gray-800 d-inline-flex align-items-center me-2" href="/#">
                    <svg className="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                    </svg>
                    Connect
                  </a>
                  <a className="btn btn-sm btn-secondary" href="/#">
                    Send Message
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card card-body border-0 shadow mb-4">
                <h2 className="h5 mb-4">Select profile photo</h2>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    {/* <!-- Avatar --> */}
                    <img className="rounded avatar-xl" src={ProfilePic3} alt="change avatar" />
                  </div>
                  <div className="file-field">
                    <div className="d-flex justify-content-xl-center ms-xl-3">
                      <div className="d-flex">
                        <svg className="icon text-gray-500 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <input type="file" />
                        <div className="d-md-block text-left">
                          <div className="fw-normal text-dark mb-1">Choose Image</div>
                          <div className="text-gray small">JPG, GIF or PNG. Max size of 800K</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card card-body border-0 shadow">
                <h2 className="h5 mb-4">Select cover photo</h2>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    {/* <!-- Avatar --> */}
                    <img className="rounded avatar-xl" src="../assets/img/profile-cover.jpg" alt="change cover" />
                  </div>
                  <div className="file-field">
                    <div className="d-flex justify-content-xl-center ms-xl-3">
                      <div className="d-flex">
                        <svg className="icon text-gray-500 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <input type="file" />
                        <div className="d-md-block text-left">
                          <div className="fw-normal text-dark mb-1">Choose Image</div>
                          <div className="text-gray small">JPG, GIF or PNG. Max size of 800K</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="theme-settings card bg-gray-800 pt-2 collapse" id="theme-settings">
        <div className="card-body bg-gray-800 text-white pt-4">
          <button
            type="button"
            className="btn-close theme-settings-close"
            aria-label="Close"
            data-bs-toggle="collapse"
            href="#theme-settings"
            role="button"
            aria-expanded="false"
            aria-controls="theme-settings"
          ></button>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p className="m-0 mb-1 me-4 fs-7">
              Open source{' '}
              <span role="img" aria-label="gratitude">
                💛
              </span>
            </p>
            <a
              className="github-button"
              href="https://github.com/themesberg/volt-bootstrap-5-dashboard"
              data-color-scheme="no-preference: dark; light: light; dark: light;"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star themesberg/volt-bootstrap-5-dashboard on GitHub"
            >
              Star
            </a>
          </div>
          <a
            href="https://themesberg.com/product/admin-dashboard/volt-bootstrap-5-dashboard"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary d-inline-flex align-items-center justify-content-center mb-3 w-100"
          >
            Download
            <svg className="icon icon-xs ms-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <p className="fs-7 text-gray-300 text-center">Available in the following technologies:</p>
          <div className="d-flex justify-content-center">
            <a className="me-3" href="https://themesberg.com/product/admin-dashboard/volt-bootstrap-5-dashboard" target="_blank" rel="noreferrer">
              <img src="../assets/img/technologies/bootstrap-5-logo.svg" className="image image-xs" />
            </a>
            <a href="https://demo.themesberg.com/volt-react-dashboard/#/" target="_blank" rel="noreferrer">
              <img src="../assets/img/technologies/react-logo.svg" className="image image-xs" />
            </a>
          </div>
        </div>
      </div>

      <div className="card theme-settings bg-gray-800 theme-settings-expand" id="theme-settings-expand">
        <div className="card-body bg-gray-800 text-white rounded-top p-3 py-2">
          <span className="fw-bold d-inline-flex align-items-center h6">
            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              ></path>
            </svg>
            Settings
          </span>
        </div>
      </div>
    </>
  );
};

export default Settings;
