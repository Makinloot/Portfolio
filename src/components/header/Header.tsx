import { useContext, useState } from "react";
import { LoadContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Burger from "./Burger";

export default function Header(): JSX.Element {
  const active = useContext(LoadContext)
  const [mode, setMode] = useState<boolean>(false);
  
  return (
    <header className={active ? 'Header active' : 'Header'}>
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
                <a href="#projects">projects</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </nav>
          <Burger />
          {/* <div 
            className="dark-mode"
            style={styles}
            onClick={() => setMode(!mode)}
          >
            {mode ? 
              <FontAwesomeIcon icon={faMoon} /> 
                : 
              <FontAwesomeIcon icon={faSun} color="#000" />
            }
          </div> */}
        </div>
      </div>
    </header>
  );
}

const styles = {
  cursor: 'pointer',
  fontSize: '1.25rem'
}
