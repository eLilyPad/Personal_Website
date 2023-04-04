import "./App.scss";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Projects from "./Components/Projects";
import Experiments from "./Components/Experiments";

function App() {
  return (
    <div className="App">
      <h1>Elizabeth Nova-Rowan Astra-Minerva</h1>
      <Gallery />
      <About />
      <Projects />
      <Experiments />
      <Contact />
    </div>
  );
}

export default App;
