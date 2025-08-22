import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DestinationDetails from "./Destinations Content/DestinationDetails";
import MainDestinationComp from "./Destinations Content/MainDestinationComp";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footers";

function App() {
  return (
    <Router>
      {/* ✅ Navbar goes here */}
      <Navbar />

      {/* ✅ Only Route components inside Routes */}
      <Routes>
        <Route path="/" element={<MainDestinationComp />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
      </Routes>
      {/* ✅ Footer goes here */}
      <Footer />
    </Router>
  );
}

export default App;
