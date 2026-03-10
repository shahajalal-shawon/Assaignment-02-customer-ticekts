import { useState } from "react";
import "./App.css";
import { Banner } from "./Components/Banner/Banner";
import { NavBar } from "./Components/NavBar/NavBar";
import { Services } from "./Components/Services/Services";

function App() {
  const [progress, setProgress] = useState(0);
  const [taskStatus, setTaskStatus] = useState([]);
  return (
    <>
      <NavBar />
      <Banner progress={progress} />
      <Services setProgress={setProgress} progress={progress} setTaskStatus={setTaskStatus} taskStatus={taskStatus}/>
    </>
  );
}

export default App;
