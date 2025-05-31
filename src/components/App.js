
import React, { useState } from "react";
import './../styles/App.css';
import WelcomePage from "././pages/WelcomePage";
import EasyModePage from "././pages/EasyModePage";
import HardModePage from "././pages/HardModePage";
import NormalModePage from "././pages/NormalModePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [levelChoice, setLevelChoice] = useState("");

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage setLevelChoice={setLevelChoice} levelChoice={levelChoice} />} />
            <Route path="/hard-mode" element={<HardModePage/>} />
            <Route path="/normal-mode" element={<NormalModePage/>} />
            <Route path="/easy-mode" element={<EasyModePage/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
