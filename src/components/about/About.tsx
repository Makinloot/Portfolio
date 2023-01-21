import myImg from "../../assets/me.jpg";

export default function About() {
  return (
    <section className="About flex-row" id="about">
      <div className="container-small">
        <h2 className="About-title">About me</h2>
        <div className="About-wrapper">
          <div className="About-primary">
            <p>
              Hello! My name is Tornike and i enjoy creating things about web.
              My interest in web development started back in december of 2021
              when i discovered HTML, CSS & JS course online. Turns out i've
              found my dream world through coding.
            </p>{" "}
            <br />
            <p>
              Since then i've had the opportunity to work on real projects as
              Frontend Dev. My main focus these days is building user friendly
              websites and learning more and more about web technologies.
            </p>
            <br />
            <p>
              I also started learning Backened using Node JS through my career
              of web development. In the end i'm aiming to become fullstack
              developer.
            </p>
            <ul className="About-skills">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Node js</li>
            </ul>
          </div>
          <div className="About-secondary">
            <img src={myImg} alt="Tornike Epitashvili" />
          </div>
        </div>
      </div>
    </section>
  );
}
