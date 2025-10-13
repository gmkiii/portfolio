export default function Home() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        Salut, je suis <span className="text-gray-900">Ton Nom</span>
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Développeur passionné — bienvenue sur mon portfolio !
      </p>
      <a
        href="/projects"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Voir mes projets
      </a>
    </section>
  );
}
