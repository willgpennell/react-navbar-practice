import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { Home, About, Contact, Services } from "./components/pages";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
