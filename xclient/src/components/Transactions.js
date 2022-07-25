import ProfilePic1 from '../assets/img/team/profile-picture-1.jpg';
import ProfilePic2 from '../assets/img/team/profile-picture-2.jpg';
import ProfilePic3 from '../assets/img/team/profile-picture-3.jpg';
import ProfilePic4 from '../assets/img/team/profile-picture-4.jpg';
import ProfilePic5 from '../assets/img/team/profile-picture-5.jpg';

const Transactions = () => {
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
        <div className="d-block mb-4 mb-md-0">
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
                Transactions
              </li>
            </ol>
          </nav>
          <h2 className="h4">All Orders</h2>
          <p className="mb-0">Your web analytics dashboard template.</p>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <a href="/#" className="btn btn-sm btn-gray-800 d-inline-flex align-items-center">
            <svg className="icon icon-xs me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            New Plan
          </a>
          <div className="btn-group ms-2 ms-lg-3">
            <button type="button" className="btn btn-sm btn-outline-gray-600">
              Share
            </button>
            <button type="button" className="btn btn-sm btn-outline-gray-600">
              Export
            </button>
          </div>
        </div>
      </div>
      <div className="table-settings mb-4">
        <div className="row align-items-center justify-content-between">
          <div className="col col-md-6 col-lg-3 col-xl-4">
            <div className="input-group me-2 me-lg-3 fmxw-400">
              <span className="input-group-text">
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
              <input type="text" className="form-control" placeholder="Search orders" />
            </div>
          </div>
          <div className="col-4 col-md-2 col-xl-1 ps-md-0 text-end">
            <div className="dropdown">
              <button
                className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-1"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end pb-0">
                <span className="small ps-3 fw-bold text-dark">Show</span>
                <a className="dropdown-item d-flex align-items-center fw-bold" href="/#">
                  10
                  <svg className="icon icon-xxs ms-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a className="dropdown-item fw-bold" href="/#">
                  20
                </a>
                <a className="dropdown-item fw-bold rounded-bottom" href="/#">
                  30
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-body border-0 shadow table-wrapper table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="border-gray-200">#</th>
              <th className="border-gray-200">Bill For</th>
              <th className="border-gray-200">Issue Date</th>
              <th className="border-gray-200">Due Date</th>
              <th className="border-gray-200">Total</th>
              <th className="border-gray-200">Status</th>
              <th className="border-gray-200">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Item --> */}
            <tr>
              <td>
                <a href="/#" className="fw-bold">
                  {' '}
                  456478{' '}
                </a>
              </td>
              <td>
                <span className="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 May 2020</span>
              </td>
              <td>
                <span className="fw-normal">1 Jun 2020</span>
              </td>
              <td>
                <span className="fw-bold">$799,00</span>
              </td>
              <td>
                <span className="fw-bold text-warning">Due</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="/#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="/#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a className="dropdown-item text-danger rounded-bottom" href="/#">
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Item --> */}
            <tr>
              <td>
                <a href="/#" className="fw-bold">
                  {' '}
                  456423{' '}
                </a>
              </td>
              <td>
                <span className="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Apr 2020</span>
              </td>
              <td>
                <span className="fw-normal">1 May 2020</span>
              </td>
              <td>
                <span className="fw-bold">$799,00</span>
              </td>
              <td>
                <span className="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="/#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="/#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a className="dropdown-item text-danger rounded-bottom" href="/#">
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Item --> */}
            <tr>
              <td>
                <a href="/#" className="fw-bold">
                  {' '}
                  456420{' '}
                </a>
              </td>
              <td>
                <span className="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Mar 2020</span>
              </td>
              <td>
                <span className="fw-normal">1 Apr 2020</span>
              </td>
              <td>
                <span className="fw-bold">$799,00</span>
              </td>
              <td>
                <span className="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="/#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="/#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a className="dropdown-item text-danger rounded-bottom" href="/#">
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Item --> */}
            <tr>
              <td>
                <a href="/#" className="fw-bold">
                  {' '}
                  456421{' '}
                </a>
              </td>
              <td>
                <span className="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Feb 2020</span>
              </td>
              <td>
                <span className="fw-normal">1 Mar 2020</span>
              </td>
              <td>
                <span className="fw-bold">$799,00</span>
              </td>
              <td>
                <span className="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="/#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="/#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a className="dropdown-item text-danger rounded-bottom" href="/#">
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Item --> */}
            <tr>
              <td>
                <a href="/#" className="fw-bold">
                  {' '}
                  456420{' '}
                </a>
              </td>
              <td>
                <span className="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Jan 2020</span>
              </td>
              <td>
                <span className="fw-normal">1 Feb 2020</span>
              </td>
              <td>
                <span className="fw-bold">$799,00</span>
              </td>
              <td>
                <span className="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="/#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="/#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a className="dropdown-item text-danger rounded-bottom" href="/#">
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Item --> */}
            <tr>
              <td>
                <a href="/#" className="fw-bold">
                  {' '}
                  456479{' '}
                </a>
              </td>
              <td>
                <span className="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Dec 2019</span>
              </td>
              <td>
                <span className="fw-normal">1 Jan 2020</span>
              </td>
              <td>
                <span className="fw-bold">$799,00</span>
              </td>
              <td>
                <span className="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="/#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="/#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a className="dropdown-item text-danger rounded-bottom" href="/#">
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Item -->
          <!-- Item --> */}
            <tr>
              <td>
                <a href="/#" className="fw-bold">
                  {' '}
                  456478{' '}
                </a>
              </td>
              <td>
                <span className="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Nov 2019</span>
              </td>
              <td>
                <span className="fw-normal">1 Dec 2019</span>
              </td>
              <td>
                <span className="fw-bold">$799,00</span>
              </td>
              <td>
                <span className="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="/#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="/#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a className="dropdown-item text-danger rounded-bottom" href="/#">
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Item --> */}
            <tr>
              <td>
                <a href="/#" className="fw-bold">
                  {' '}
                  453673{' '}
                </a>
              </td>
              <td>
                <span className="fw-normal">Gold Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Oct 2019</span>
              </td>
              <td>
                <span className="fw-normal">1 Nov 2019</span>
              </td>
              <td>
                <span className="fw-bold">$533,42</span>
              </td>
              <td>
                <span className="fw-bold text-danger">Cancelled</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="/#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="/#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a className="dropdown-item text-danger rounded-bottom" href="/#">
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Item --> */}
            <tr>
              <td>
                <a href="/#" className="fw-bold">
                  {' '}
                  456468{' '}
                </a>
              </td>
              <td>
                <span className="fw-normal">Gold Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Sep 2019</span>
              </td>
              <td>
                <span className="fw-normal">1 Oct 2019</span>
              </td>
              <td>
                <span className="fw-bold">$533,42</span>
              </td>
              <td>
                <span className="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="/#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="/#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a className="dropdown-item text-danger rounded-bottom" href="/#">
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            {/* <!-- Item --> */}
            <tr>
              <td>
                <a href="/#" className="fw-bold">
                  {' '}
                  456478{' '}
                </a>
              </td>
              <td>
                <span className="fw-normal">Flexible Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Aug 2019</span>
              </td>
              <td>
                <span className="fw-normal">1 Sep 2019</span>
              </td>
              <td>
                <span className="fw-bold">$233,42</span>
              </td>
              <td>
                <span className="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="/#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="/#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a className="dropdown-item text-danger rounded-bottom" href="/#">
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="card-footer px-3 border-0 d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <nav aria-label="Page navigation example">
            <ul className="pagination mb-0">
              <li className="page-item">
                <a className="page-link" href="/#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="/#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="/#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
          <div className="fw-normal small mt-4 mt-lg-0">
            Showing <b>5</b> out of <b>25</b> entries
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

export default Transactions;
