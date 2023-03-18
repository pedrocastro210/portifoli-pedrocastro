import { useState } from "react";
import { BackgroundAnimated } from "./components/title";
import "./App.css";
import { Header } from "./components/header";
import { Introduction } from "./components/introduction";
import { Background } from "./components/background";
import { Portfolio } from "./components/portfolio";
import { Qualifications } from "./components/qualifications";
import { Footer } from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Background />
      <Header />
      <BackgroundAnimated />
      <Introduction />
      <h2>Portifólio</h2>
      <Portfolio />
      <h2>Qualificações</h2>
      <Qualifications />
      <Footer />
    </div>
  );
}

export default App;
