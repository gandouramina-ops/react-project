import "./App.css";
import { About } from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/Home";
import Service from "./components/Service";

function App() {
  return (
    <div className="App">
      <Home />
      <Contact />
      <Service />
      {/* name et age sont des props */}
      <About name={"Amina"} age={20} />
    </div>
  );
}

export default App;
