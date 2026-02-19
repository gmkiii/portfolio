export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto text-center">
      <div className="my-12">
        <h2 className="text-3xl font-bold mb-8 text-center midas-text">
          PROJETS
        </h2>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          <div className="relative w-72 border-2 border-midas rounded-lg p-6 text-white overflow-hidden bg-black">
            <img
              src="images/bombermanIMG.png"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">
                <a
                  href="https://github.com/gmkiii/bomberman.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-midas transition-colors duration-300"
                >
                  Bomberman
                </a>
              </h3>
              <p className="text-sm">
                Création d'un Bomberman en Java, JavaFx.
              </p>
            </div>
          </div>

          <div className="relative w-72 border-2 border-midas rounded-lg p-6 text-white overflow-hidden bg-black">
            <img
              src="images/portfolio.png"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                <a
                  href="https://github.com/gmkiii/portfolio.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-midas transition-colors duration-300"
                >
                  Portfolio
                </a>
              </h3>
              <p className="text-sm">Site personnel en React + Tailwind.</p>
            </div>
          </div>

          <div className="relative w-72 border-2 border-midas rounded-lg p-6 text-white overflow-hidden bg-black">
            <img
              src="images/tkkkt.png"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">
                Projet site web data scouting pour le football{" "}
              </h3>
              <p className="text-sm">
                Création d'un site web de data scouting pour le football grace à
                PostgreSQL.
              </p>
            </div>
          </div>

          <div className="relative w-72 border-2 border-midas rounded-lg p-6 text-white overflow-hidden bg-black">
            <img
              src="images/pacman.png"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                <a
                  href="https://github.com/gmkiii/pacman.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-midas transition-colors duration-300"
                >
                  Pacman
                </a>
              </h3>
              <p className="text-sm">
                Création d'un jeu Pacman en Java, JavaFx.
              </p>
            </div>
          </div>

          <div className="relative w-72 border-2 border-midas rounded-lg p-6 text-white overflow-hidden bg-black">
            <img
              src="images/Logo_Vertical.svg"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                <a
                  href="https://github.com/gmkiii/VsPunk.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-midas transition-colors duration-300"
                >
                  Marathon Web
                </a>
              </h3>
              <p className="text-sm">
                Création d'un site web pour un marathon en équipe en 48H
              </p>
            </div>
          </div>

          <div className="relative w-72 border-2 border-midas rounded-lg p-6 text-white overflow-hidden bg-black">
            <img
              src="images/JAM.png"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2"> CodeGamJam 2026</h3>
              <p className="text-sm">
                Participation à la CodeGamJam 2026 , création d'un jeu vidéo de
                A à Z en moins de 30H.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
