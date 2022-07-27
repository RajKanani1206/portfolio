import "./App.css";
import Header from "./components/Header";
import Home from "./components/HomeBanner";

const App = () => {
  return (
    <>
      <div className="main-banner">
        <Header />
        <Home />
      </div>
    </>
  );
};

export default App;
