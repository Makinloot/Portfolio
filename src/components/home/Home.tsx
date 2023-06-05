import { useContext } from "react";
import { LoadContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import resume from './Resume.pdf';

export default function Home(): JSX.Element {
  const active = useContext(LoadContext);

  return (
    <section className={active ? "Home" : "Home hidden"} id="Home">
      <div className="container">
        <div className="Home-wrapper">
          <strong className="Home-intro">Hi, my name is</strong>
          <div className="Home-headings">
            <h2>tornike epitashvili.</h2>
            <h3>I build things for the web.</h3>
          </div>
          <p className="Home-text">
            I'm a React / React Native developer from Tbilisi, Georgia. I'm focused on
            building interesting & mobile friendly websites & apps with clean and
            reusable code. Currently working on different projects from home.
          </p>
          <div className="Home-socials flex-row">
            <a
              href="https://github.com/Makinloot"
              target="_blank"
              title="github"
            >
              <FontAwesomeIcon
                className="Home-socials-icon"
                icon={faSquareGithub}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tornike-epitashvili-274906180/"
              target="_blank"
              title="linkedin"
            >
              <FontAwesomeIcon
                className="Home-socials-icon"
                icon={faLinkedin}
              />
            </a>
            <a
              href="https://www.facebook.com/Meta1head/"
              target="_blank"
              title="facebook"
            >
              <FontAwesomeIcon
                className="Home-socials-icon"
                icon={faSquareFacebook}
              />
            </a>
          </div>
          <a href={resume} download className="Home-btn">Download resume</a>
        </div>
      </div>
    </section>
  );
}
