import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function About(): JSX.Element {
  return (
    <section className="About" id="about">
      <div className="container">
        <div className="About-wrapper">
          <strong className="About-intro">Hi, my name is</strong>
          <div className="About-headings">
            <h2>tornike epitashvili.</h2>
            <h3>I build things for the web.</h3>
          </div>
          <p className="About-text">
            I'm a frontend developer from Tbilisi, Georgia. I'm focused on
            building interesting & mobile friendly websites with clean and reusable code.
            Currently working on different projects from home.
          </p>
          <div className="About-socials flex-row">
            <a
              href="https://github.com/Makinloot"
              target="_blank"
              title="github"
            >
              <FontAwesomeIcon
                className="About-socials-icon"
                icon={faSquareGithub}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tornike-epitashvili-274906180/"
              target="_blank"
              title="linkedin"
            >
              <FontAwesomeIcon
                className="About-socials-icon"
                icon={faLinkedin}
              />
            </a>
            <a
              href="https://www.facebook.com/Meta1head/"
              target="_blank"
              title="facebook"
            >
              <FontAwesomeIcon
                className="About-socials-icon"
                icon={faSquareFacebook}
              />
            </a>
          </div>
          <button className="About-btn">Download resume</button>
        </div>
      </div>
    </section>
  );
}
