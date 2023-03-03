import { useContext, useEffect, useState } from "react";
import { LoadContext } from "../../App";
import Burger from "./Burger";

export default function Header(): JSX.Element {
  const active = useContext(LoadContext);
  const [headerBg, setHeaderBg] = useState<boolean>(true);

  const handleHeaderBg = (e: any) => {
    if (e.wheelDelta >= 0) setHeaderBg(true);
    else setHeaderBg(false);
  };

  useEffect(() => {
    window.addEventListener("mousewheel", handleHeaderBg);

    return () => window.removeEventListener('mousewheel', handleHeaderBg)
  }, []);

  return (
    <header className={active ? "Header active" : "Header"}>
      <div className="container" style={{ padding: "1rem 2rem" }}>
        <div
          className={
            headerBg
              ? "Header-wrapper active flex-row"
              : "Header-wrapper flex-row"
          }
        >
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
        </div>
      </div>
    </header>
  );
}

const styles = {
  cursor: "pointer",
  fontSize: "1.25rem",
};
