import React from 'react'

export default function Navbar() {
  return (
    <nav classnName="navbar navbar-expand-lg bg-body-tertiary">
      <div classnName="container-fluid">
        <a classnName="navbar-brand" href="/">
          Navbar
        </a>
        <button
          classnName="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classnName="navbar-toggler-icon"></span>
        </button>
        <div classnName="collapse navbar-collapse" id="navbarSupportedContent">
          <ul classnName="navbar-nav me-auto mb-2 mb-lg-0">
            <li classnName="nav-item">
              <a classnName="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li classnName="nav-item">
              <a classnName="nav-link" href="/">
                Link
              </a>
            </li>
            <li classnName="nav-item dropdown">
              <a
                classnName="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul classnName="dropdown-menu">
                <li>
                  <a classnName="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a classnName="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr classnName="dropdown-divider"></hr>
                </li>
                <li>
                  <a classnName="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li classnName="nav-item">
              <a classnName="nav-link disabled" href="/" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form classnName="d-flex" role="search">
            <input
              classnName="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button classnName="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}
