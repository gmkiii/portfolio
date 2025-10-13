export default function Projects() {
  const projects = [
    {
      title: "Application Eau",
      desc: "Gestion de stock et commandes pour O-De-France.",
    },
    { title: "Portfolio", desc: "Site personnel en React + Tailwind." },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Mes Projets
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
