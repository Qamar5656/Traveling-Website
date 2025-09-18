import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DestinationDetails from "./Destinations Content/DestinationDetails";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<DestinationDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
