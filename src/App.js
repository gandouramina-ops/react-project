import "./App.css";
import { About } from "./components/about/About";
import Contact from "./components/contact/Contact";
import Exoprops from "./components/Exoprops";
import ExoState from "./components/ExoState";
import Home from "./components/Home";
import Service from "./components/Service";
import Usestatehook from "./components/Usestatehook";

function App() {
  return (
    <div className="App">
      <Home />
      <Contact />
      <Service />
      {/* name et age sont des props */}
      <About name={"Amina"} age={20} />
      <Exoprops moduleA={10} moduleB={12} />
      <Usestatehook />
      <ExoState />
    </div>
  );
}

export default App;
