import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Competence from "./pages/Competence";
import Contact from "./pages/Contact";
import Parcours from "./pages/Parcours";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-gray-800">
        <Navbar />
        <main className="flex-grow p-6 bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/competence" element={<Competence />} />
            <Route path="/parcours" element={<Parcours />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
