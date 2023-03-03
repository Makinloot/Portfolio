import { useContext} from "react";
import { LoadContext } from "../../App";
import myImg from "../../assets/me.jpg";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";

export default function About() {
  const active = useContext(LoadContext);
  const [boxTexture] = useLoader(TextureLoader, [myImg])

  return (
    <section className={active ? "About flex-row" : "About flex-row hidden"} id="about">
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
          <div className="About-secondary flex-row" title="Try to rotate">
            <Canvas>
              <OrbitControls
                enablePan={false}
                enableZoom={false}
              />
              <mesh scale={4} position={[.3, -.3, 0]}>
                <boxGeometry />
                <meshBasicMaterial map={boxTexture} />
              </mesh>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
