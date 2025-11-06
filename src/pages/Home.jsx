import Particles from "../components/Particles";
export default function Home() {
  return (
    <>
      <section className="relative flex flex-col justify-center items-center text-center min-h-screen bg-white">
        <div className="absolute inset-0 z-">
          <Particles
            particleCount={5000}
            particleSpread={20}
            speed={0.1}
            particleColors={["#D4AF37", "#B8860B", "#FFE082"]}
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-7xl font-bold text-[#000000] mb-4 animate-fade-in">
            Bonjour, je suis{" "}
            <span className="text-7xl font-bold midas-text">
              {" "}
              Baptiste Dewaele
            </span>
          </h1>
          <p className="text-4xl text-[#000000] mb-8 animate-fade-in-delay">
            Bienvenue sur mon portfolio !
          </p>
          <a
            href="/projects"
            className="bg-[#000000] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Voir mes projets
          </a>
        </div>
      </section>
      <section
        id="about"
        className="py-20 bg-gray-50 flex flex-col justify-center items-center text-center min-h-screen bg-white"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
            À propos de <span className="font-bold midas-text">Moi</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in-delay">
            <div className="md:w-1/3">
              <div className="relative group">
                <img
                  src="/src/assets/profile.jpeg"
                  alt="Baptiste Dewaele"
                  className="rounded-2xl shadow-2xl w-full object-cover 
                             transition-transform duration-1000 
                             group-hover:scale-105 group-hover:shadow-blue-500/100"
                />
                <div className=""></div>
              </div>
            </div>

            {/* Contenu texte */}
            <div className="md:w-2/3 space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Développeur Web Passionné
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                Bonjour ! Je suis{" "}
                <span className="font-semibold text-blue-600">
                  Baptiste Dewaele
                </span>
                , un développeur web passionné par la création d'expériences
                numériques modernes et intuitives.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Spécialisé en <span className="font-semibold">React</span>,
                <span className="font-semibold"> JavaScript</span> et
                <span className="font-semibold"> Tailwind CSS</span>, j'aime
                transformer des idées créatives en applications web performantes
                et élégantes.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Actuellement, je me concentre sur le développement front-end et
                l'amélioration continue de mes compétences en design UI/UX.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
