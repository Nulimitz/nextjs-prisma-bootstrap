import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div
      className="offcanvas offcanvas-start sidebar-nav bg-dark"
      tabIndex="-1"
      id="sidebar"
    >
      <div className="offcanvas-body py-5">
        <nav className="navbar-dark">
          <ul className="navbar-nav">
            <li>
              <div className="small fw-bold text-uppercase text-muted px-3 mb-3">
                Dashboard
              </div>
            </li>
            <li>
              <Link href="/" passHref>
                <a
                  className={`nav-link px-3 ${
                    router.pathname == "/" ? `active` : ""
                  }`}
                >
                  <span className="me-2">
                    <i className="bi bi-house"></i>
                  </span>
                  <span>Home</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a
                  className={`nav-link px-3 ${
                    router.pathname == "#" ? `active` : ""
                  }`}
                >
                  <span className="me-2">
                    <i className="bi bi-link"></i>
                  </span>
                  <span>Link</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a
                  className={`nav-link px-3 ${
                    router.pathname == "#" ? `active` : ""
                  }`}
                >
                  <span className="me-2">
                    <i className="bi bi-link"></i>
                  </span>
                  <span>Link</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a
                  className={`nav-link px-3 ${
                    router.pathname == "#" ? `active` : ""
                  }`}
                >
                  <span className="me-2">
                    <i className="bi bi-link"></i>
                  </span>
                  <span>Link</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a
                  className={`nav-link px-3 ${
                    router.pathname == "#" ? `active` : ""
                  }`}
                >
                  <span className="me-2">
                    <i className="bi bi-link"></i>
                  </span>
                  <span>Link</span>
                </a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav fixed-bottom py-3">
            <li>
              <div className="small fw-bold text-uppercase text-muted px-3 mb-3">
                Other
              </div>
            </li>
            <li>
              <Link href="#" passHref>
                <a className="nav-link px-3" onClick={signOut}>
                  <span className="me-2">
                    <i className="bi bi-door-open"></i>
                  </span>
                  <span>Log out</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
