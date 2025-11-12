import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-midas">
          Portfolio
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-midas  font-bold">
            Accueil
          </Link>
          <Link to="/parcours" className="hover:text-midas font-bold">
            Parcours
          </Link>
          <Link to="/competence" className="hover:text-midas font-bold">
            Compétences
          </Link>
          <Link to="/projects" className="hover:text-midas font-bold">
            Projets
          </Link>
          <Link to="/contact" className="hover:text-midas font-bold">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
