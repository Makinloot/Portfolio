import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Experience from "./components/experience/Experience";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Experience /> */}
    </div>
  );
}

export default App;
