import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";    
import AboutUs from "./pages/AboutUs";  
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="bg-[#081b29] text-white min-h-screen flex flex-col">
        <Header />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
