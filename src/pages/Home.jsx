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
            className="bg-[#000000] text-white px-6 py-3 rounded-lg hover:bg-midas transition"
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
                  src="images/profile.jpeg"
                  alt="Baptiste Dewaele"
                  className="rounded-2xl shadow-2xl w-full object-cover 
                             transition-transform duration-1000 
                             group-hover:scale-105 group-hover:shadow-midas"
                />
                <div className=""></div>
              </div>
            </div>

            {/* Contenu texte */}
            <div className="md:w-2/3 space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Etudiant en Informatique
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                Bonjour ! Je m'appelle{" "}
                <span className="font-semibold text-midas">
                  Baptiste Dewaele
                </span>
                , je suis actuellement en deuxiéme année de BUT Informatique à
                Lens.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                L'informatique me passionne depuis mon plus jeune age
                (l'ordinateur, jeux vidéos, l'hardware)
                <br />
                C'est donc tout naturellement que je me suis orienté en Premiére
                à choisir la filiére STI2D option SIN (Sciences et Technologies
                de l'Industrie et du Développement Durable - Systèmes
                d'Information et Numérique), qui mélange pratique et théorie.
                J'ai donc pu écrire mes premiers programmes en C et aussi mes
                premiers mini-projets.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                C'est donc en toute logique que je me suis orienté vers un BUT
                Informatique qui mélange aussi bien la théorie que la pratique.
                Grace à cette formation j'ai pu acquérir des vrais bases solides
                tout en continuant de travailler en groupe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
