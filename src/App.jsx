import { useState } from "react";

import "./App.css";
import ParticleBackground from "./components/ParticleBackground";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <main className=" ">
      <ParticleBackground />
      <CardContainer />
    </main>
  );
}

export default App;
