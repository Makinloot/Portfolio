import Burger from "./Burger";

export default function Header(): JSX.Element {
  return (
    <div className="Header">
      <div className="container">
        <div className="Header-wrapper flex-row">
          <div className="Header-logo">
            <h2>Tornike</h2>
          </div>
          <nav className="Header-menu">
            <ul className="flex-row">
              <li>
                <a href="#about">about me</a>
              </li>
              <li>
                <a href="#experience">experience</a>
              </li>
              <li>
                <a href={"/projects"}>projects</a>
              </li>
              <li>
                <a href={"/contact"}>contact</a>
              </li>
            </ul>
          </nav>
          <Burger />
        </div>
      </div>
    </div>
  );
}
