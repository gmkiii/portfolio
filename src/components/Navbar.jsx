import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          MonPortfolio
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-600">
            Accueil
          </Link>
          <Link to="/parcours" className="hover:text-blue-600">
            Parcours
          </Link>
          <Link to="/competence" className="hover:text-blue-600">
            Compétences
          </Link>
          <Link to="/projects" className="hover:text-blue-600">
            Projets
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
