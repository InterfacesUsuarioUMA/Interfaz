import "../assets/Headerbar.css";
import logo from "../assets/Livroo.png";
import user from "../assets/user.png";

export default function Headerbar() {
  return (
    <header className="p-3 border-bottom">
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="home" className="navbar-brand">
            <img src={logo} alt="Livroo" width={64} height={32} />
          </a>
          <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" />
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          <div className="dropdown text-end">
            <a
              href="#"
              className="d-block link-dark text-decoration-none"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={user}
                alt="User"
                className="rounded-circle"
                width={32}
                height={32}
              />
            </a>
            <ul className="dropdown-menu text-small">
              <li>
                <a className="dropdown-item" href="settings">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="profile">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
