import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/HomeBanner";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Footer />
    </>
  );
};

export default App;
