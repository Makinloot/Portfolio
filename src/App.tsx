import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
