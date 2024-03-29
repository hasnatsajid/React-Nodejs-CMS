import ProfilePic1 from '../assets/img/team/profile-picture-1.jpg';
import ProfilePic2 from '../assets/img/team/profile-picture-2.jpg';
import ProfilePic3 from '../assets/img/team/profile-picture-3.jpg';
import ProfilePic4 from '../assets/img/team/profile-picture-4.jpg';
import ProfilePic5 from '../assets/img/team/profile-picture-5.jpg';

const Modals = () => {
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

      <div className="py-4">
        <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
          <ol className="breadcrumb breadcrumb-dark breadcrumb-transparent">
            <li className="breadcrumb-item">
              <a href="/#">
                <svg className="icon icon-xxs" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="/#">Volt</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Modals
            </li>
          </ol>
        </nav>
        <div className="d-flex justify-content-between w-100 flex-wrap">
          <div className="mb-3 mb-lg-0">
            <h1 className="h4">Modals</h1>
            <p className="mb-0">Dozens of reusable components built to provide buttons, alerts, popovers, and more.</p>
          </div>
          <div>
            <a href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/components/modals/" className="btn btn-outline-gray">
              <i className="far fa-question-circle me-1"></i> Modals Docs
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 mb-4">
          <div className="card border-0 shadow">
            <div className="card-body">
              <div className="row d-block mt-4">
                <div className="col-lg-4">
                  {/* <!-- Button Modal --> */}
                  <button type="button" className="btn btn-block btn-gray-800 mb-3" data-bs-toggle="modal" data-bs-target="#modal-default">
                    Default
                  </button>
                  {/* <!-- Modal Content --> */}
                  <div className="modal fade" id="modal-default" tabIndex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h2 className="h6 modal-title">Terms of Service</h2>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <p>
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world
                            are updating their terms of service agreements to comply.
                          </p>
                          <p>
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of
                            data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that
                            could personally affect them.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary">
                            Accept
                          </button>
                          <button type="button" className="btn btn-link text-gray-600 ms-auto" data-bs-dismiss="modal">
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Modal Content --> */}
                </div>
                <div className="col-lg-4">
                  {/* <!-- Button Modal --> */}
                  <button type="button" className="btn btn-block btn-gray-800 mb-3" data-bs-toggle="modal" data-bs-target="#modal-notification">
                    Notification
                  </button>
                  {/* <!-- Modal Content --> */}
                  <div className="modal fade" id="modal-notification" tabIndex="-1" role="dialog" aria-labelledby="modal-notification" aria-hidden="true">
                    <div className="modal-dialog modal-info modal-dialog-centered" role="document">
                      <div className="modal-content bg-gradient-secondary">
                        <button type="button" className="btn-close theme-settings-close fs-6 ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-header">
                          <p className="modal-title text-gray-200" id="modal-title-notification">
                            A new experience, personalized for you.
                          </p>
                        </div>
                        <div className="modal-body text-white">
                          <div className="py-3 text-center">
                            <span className="modal-icon">
                              <svg className="icon icon-xl text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                              </svg>
                            </span>
                            <h2 className="h4 modal-title my-3">Important message!</h2>
                            <p>Do you know that you can assign status and relation to a company right in the visit list?</p>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-sm btn-white">
                            Go to Inbox
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Modal Content --> */}
                </div>
                <div className="col-lg-4">
                  {/* <!-- Button Modal --> */}
                  <button type="button" className="btn btn-block btn-gray-800 mb-3" data-bs-toggle="modal" data-bs-target="#modal-form">
                    Sign In
                  </button>
                  {/* <!-- Modal Content --> */}
                  <div className="modal fade" id="modal-form" tabIndex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-body p-0">
                          <div className="card p-3 p-lg-4">
                            <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="text-center text-md-center mb-4 mt-md-0">
                              <h1 className="mb-0 h4">Sign in to our platform</h1>
                            </div>
                            <form action="#" className="mt-4">
                              {/* <!-- Form --> */}
                              <div className="form-group mb-4">
                                <label htmlFor="email">Your Email</label>
                                <div className="input-group">
                                  <span className="input-group-text" id="basic-addon1">
                                    <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                  </span>
                                  <input type="email" className="form-control" placeholder="example@company.com" id="email" autoFocus required />
                                </div>
                              </div>
                              {/* <!-- End of Form --> */}
                              <div className="form-group">
                                {/* <!-- Form --> */}
                                <div className="form-group mb-4">
                                  <label htmlFor="password">Your Password</label>
                                  <div className="input-group">
                                    <span className="input-group-text" id="basic-addon2">
                                      <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          fillRule="evenodd"
                                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>
                                    </span>
                                    <input type="password" placeholder="Password" className="form-control" id="password" required />
                                  </div>
                                </div>
                                {/* <!-- End of Form --> */}
                                <div className="d-flex justify-content-between align-items-top mb-4">
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="remember" />
                                    <label className="form-check-label mb-0" htmlFor="remember">
                                      {' '}
                                      Remember me{' '}
                                    </label>
                                  </div>
                                  <div>
                                    <a href="./forgot-password.html" className="small text-right">
                                      Lost password?
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="d-grid">
                                <button type="submit" className="btn btn-gray-800">
                                  Sign in
                                </button>
                              </div>
                            </form>
                            <div className="mt-3 mb-4 text-center">
                              <span className="fw-normal">or login with</span>
                            </div>
                            <div className="d-flex justify-content-center my-4">
                              <a
                                href="/#"
                                className="btn btn-icon-only btn-pill btn-outline-gray-500 me-2"
                                type="button"
                                aria-label="facebook button"
                                title="facebook button"
                              >
                                <svg
                                  className="icon icon-xxs"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fab"
                                  data-icon="facebook-f"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 320 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                  ></path>
                                </svg>
                              </a>
                              <a
                                href="/#"
                                className="btn btn-icon-only btn-pill btn-outline-gray-500 me-2"
                                type="button"
                                aria-label="twitter button"
                                title="twitter button"
                              >
                                <svg
                                  className="icon icon-xxs"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fab"
                                  data-icon="twitter"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                  ></path>
                                </svg>
                              </a>
                              <a
                                href="/#"
                                className="btn btn-icon-only btn-pill btn-outline-gray-500"
                                type="button"
                                aria-label="github button"
                                title="github button"
                              >
                                <svg
                                  className="icon icon-xxs"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fab"
                                  data-icon="github"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 496 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                  ></path>
                                </svg>
                              </a>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mt-4">
                              <span className="fw-normal">
                                Not registered?
                                <a href="./sign-up.html" className="fw-bold">
                                  Create account
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Modal Content --> */}
                </div>
                <div className="col-lg-4">
                  {/* <!-- Button Modal --> */}
                  <button type="button" className="btn btn-block btn-gray-800 mb-3" data-bs-toggle="modal" data-bs-target="#modal-form-signup">
                    Sign Up
                  </button>
                  {/* <!-- Modal Content --> */}
                  <div className="modal fade" id="modal-form-signup" tabIndex="-1" role="dialog" aria-labelledby="modal-form-signup" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-body p-0">
                          <div className="card p-3 p-lg-4">
                            <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="text-center text-md-center mb-4 mt-md-0">
                              <h1 className="mb-0 h4">Create Account</h1>
                            </div>
                            <form action="#" className="mt-4">
                              {/* <!-- Form --> */}
                              <div className="form-group mb-4">
                                <label htmlFor="email">Your Email</label>
                                <div className="input-group">
                                  <span className="input-group-text" id="basic-addon1">
                                    <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                  </span>
                                  <input type="email" className="form-control" placeholder="example@company.com" id="email" autoFocus required />
                                </div>
                              </div>
                              {/* <!-- End of Form --> */}
                              <div className="form-group">
                                {/* <!-- Form --> */}
                                <div className="form-group mb-4">
                                  <label htmlFor="password">Your Password</label>
                                  <div className="input-group">
                                    <span className="input-group-text" id="basic-addon2">
                                      <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          fillRule="evenodd"
                                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>
                                    </span>
                                    <input type="password" placeholder="Password" className="form-control" id="password" required />
                                  </div>
                                </div>
                                {/* <!-- End of Form --> */}
                                {/* <!-- Form --> */}
                                <div className="form-group mb-4">
                                  <label htmlFor="confirm_password">Confirm Password</label>
                                  <div className="input-group">
                                    <span className="input-group-text" id="basic-addon2">
                                      <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          fillRule="evenodd"
                                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>
                                    </span>
                                    <input type="password" placeholder="Confirm Password" className="form-control" id="confirm_password" required />
                                  </div>
                                </div>
                                {/* <!-- End of Form --> */}
                                <div className="mb-4">
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="remember" />
                                    <label className="form-check-label fw-normal mb-0" htmlFor="remember">
                                      I agree to the{' '}
                                      <a href="/#" className="fw-bold">
                                        terms and conditions
                                      </a>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="d-grid">
                                <button type="submit" className="btn btn-gray-800">
                                  Sign up
                                </button>
                              </div>
                            </form>
                            <div className="mt-3 mb-4 text-center">
                              <span className="fw-normal">or login with</span>
                            </div>
                            <div className="d-flex justify-content-center my-3">
                              <a
                                href="/#"
                                className="btn btn-icon-only btn-pill btn-outline-gray-500 me-2"
                                type="button"
                                aria-label="facebook button"
                                title="facebook button"
                              >
                                <svg
                                  className="icon icon-xxs"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fab"
                                  data-icon="facebook-f"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 320 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                  ></path>
                                </svg>
                              </a>
                              <a
                                href="/#"
                                className="btn btn-icon-only btn-pill btn-outline-gray-500 me-2"
                                type="button"
                                aria-label="twitter button"
                                title="twitter button"
                              >
                                <svg
                                  className="icon icon-xxs"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fab"
                                  data-icon="twitter"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                  ></path>
                                </svg>
                              </a>
                              <a
                                href="/#"
                                className="btn btn-icon-only btn-pill btn-outline-gray-500"
                                type="button"
                                aria-label="github button"
                                title="github button"
                              >
                                <svg
                                  className="icon icon-xxs"
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fab"
                                  data-icon="github"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 496 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                  ></path>
                                </svg>
                              </a>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mt-4">
                              <span className="fw-normal">
                                Already have an account?
                                <a href="./sign-in.html" className="fw-bold">
                                  Login here
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Modal Content --> */}
                </div>
                <div className="col-lg-4">
                  {/* <!-- Button Modal --> */}
                  <button type="button" className="btn btn-block btn-gray-800 mb-3" data-bs-toggle="modal" data-bs-target="#modal-achievement">
                    Achievement
                  </button>
                  {/* <!-- Modal Content --> */}
                  <div className="modal fade" id="modal-achievement" tabIndex="-1" role="dialog" aria-labelledby="modal-achievement" aria-hidden="true">
                    <div className="modal-dialog modal-tertiary modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <button type="button" className="btn-close theme-settings-close fs-6 ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-header mx-auto">
                          <p className="lead mb-0 text-white">You just unlocked a new badge</p>
                        </div>
                        <div className="modal-body pt-0">
                          <div className="py-3 px-5 text-center">
                            <span className="modal-icon display-1 text-white">
                              <svg className="icon icon-lg text-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fillRule="evenodd"
                                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <h2 className="h3 modal-title mb-3 text-white">Author Level 5</h2>
                            <p className="mb-4 text-white">One Thousand Dollars! Well done mate - heads are turning your way.</p>
                            <div className="progress mb-0">
                              <div
                                className="progress-bar bg-secondary"
                                role="progressbar"
                                style={{ width: '50%' }}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center pt-0 pb-3">
                          <button type="button" className="btn btn-sm btn-white text-tertiary" data-bs-dismiss="modal">
                            Awesome!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Modal Content --> */}
                </div>
                <div className="col-lg-4">
                  {/* <!-- Button Modal --> */}
                  <button type="button" className="btn btn-block btn-gray-800 mb-3" data-bs-toggle="modal" data-bs-target="#modal-subscribe">
                    Subscribe
                  </button>
                  {/* <!-- Modal Content --> */}
                  <div className="modal fade" id="modal-subscribe" tabIndex="-1" role="dialog" aria-labelledby="modal-subscribe" aria-hidden="true">
                    <div className="modal-dialog modal-tertiary modal-dialog-centered modal-lg" role="document">
                      <div className="modal-content bg-dark text-white">
                        <div className="modal-header">
                          <button type="button" className="btn-close btn-close-white text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center py-3">
                          <span className="modal-icon">
                            <svg className="icon icon-xl text-gray-200 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path
                                fillRule="evenodd"
                                d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          <h3 className="modal-title mb-3">Join our 1,360,462 subscribers</h3>
                          <p className="mb-4 lead">Get exclusive access to freebies, premium products and news.</p>
                          <div className="form-group px-lg-5">
                            <div className="d-flex mb-3 justify-content-center">
                              <input type="text" id="subscribe" className="me-sm-1 mb-sm-0 form-control form-control-lg" placeholder="example@company.com" />
                              <div>
                                <button type="submit" className="ms-2 btn large-form-btn btn-secondary">
                                  Subscribe
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer z-2 mx-auto text-center">
                          <p className="text-white font-small">
                            We’ll never share your details with third parties.
                            <br className="visible-md" />
                            View our <a href="/#">Privacy Policy</a> for more info.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Modal Content --> */}
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
              <img src="../../assets/img/technologies/bootstrap-5-logo.svg" className="image image-xs" />
            </a>
            <a href="https://demo.themesberg.com/volt-react-dashboard/#/" target="_blank" rel="noreferrer">
              <img src="../../assets/img/technologies/react-logo.svg" className="image image-xs" />
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

export default Modals;
