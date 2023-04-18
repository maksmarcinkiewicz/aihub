import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import HubSection from "./components/HubSections";

function App() {
  return (
    <div className="p-4">
      <Navbar />
      <HubSection />
    </div>
  );
}

export default App;
