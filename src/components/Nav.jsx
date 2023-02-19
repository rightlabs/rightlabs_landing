import Image from "next/image";

import hamburger from "../../public/assets/icons/hamburger.svg";
import close from "../../public/assets/icons/cross.svg";

const Nav = ({ sideNav, setSideNav }) => {
  return (
    <nav className="nav row">
      <div className="nav__logo">
        <h2>Rightlabs.</h2>
      </div>
      <div className="nav__menu">
        <ul className="nav__menu--menuList">
          <li className="nav--cta">Connect With Us</li>
          <li className="hamburger" onClick={() => setSideNav(true)}>
            <Image src={hamburger} alt="hamburger-icon" />
          </li>
        </ul>

        {/* Side menu in navigation */}
        <div
          className={sideNav ? "nav__menu--sideNav open" : "nav__menu--sideNav"}
        >
          <div className="sideNav--close" onClick={() => setSideNav(false)}>
            <Image src={close} alt="close-icon" />
          </div>
          <ul>
            <li>Services</li>
            <li>Projects</li>
            <li>About Us</li>
            <li>
              <button className="btn btn--nav--pri">Start a Project</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
