import { useState } from "react";
import "./App.css";
import { Banner } from "./Components/Banner/Banner";
import { NavBar } from "./Components/NavBar/NavBar";
import { Services } from "./Components/Services/Services";

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <NavBar />
      <Banner progress={progress} />
        <Services setProgress={setProgress} progress={progress}/>
    </>
  );
}

export default App;
