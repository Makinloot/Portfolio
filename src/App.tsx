import React, { useState, useEffect, Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei/core";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Solar from "./components/solar/Solar";

import Loading from "./components/Loading/Loading";


export const LoadContext = React.createContext(false);

function App(): JSX.Element {
  const [active, setActive] = useState<boolean>(false);
  const [finishLoading, setFinishLoading] = useState<boolean>(false)

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className="App">
      <div className="stars">
        <Canvas>
          <Suspense fallback={<Loading setter={setFinishLoading} />}>
            <Stars
              radius={300}
              depth={60}
              count={10000}
              factor={7}
              saturation={0}
              fade={true}
            />
            <Solar />
          </Suspense>
        </Canvas>
      </div>
      <LoadContext.Provider value={active}>
        <div className={finishLoading ? "portfolio-content" : "portfolio-content hidden"}>
          <Header />
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </LoadContext.Provider>
    </div>
  );
}

export default App;
