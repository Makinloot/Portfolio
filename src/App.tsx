import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export const LoadContext = React.createContext(false);

function App(): JSX.Element {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className="App">
      <LoadContext.Provider value={active}>
        <Header />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </LoadContext.Provider>
    </div>
  );
}

export default App;
