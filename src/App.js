import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/HomeBanner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default App;
