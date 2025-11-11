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
              <h3 className="text-xl font-bold mb-2">Bomberman</h3>
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
              <h3 className="text-xl font-bold mb-2">Portfolio</h3>
              <p className="text-sm">Site personnel en React + Tailwind.</p>
            </div>
          </div>

          <div className="relative w-72 border-2 border-midas rounded-lg p-6 text-white overflow-hidden bg-black">
            <img
              src="images/quizz.png"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Projet Quizz web</h3>
              <p className="text-sm">
                Création d'un quizz web en JavaScript, HTML et CSS.
              </p>
            </div>
          </div>

          <div className="relative w-72 border-2 border-midas rounded-lg p-6 text-white overflow-hidden bg-black">
            <img
              src="images/pacman.png"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Pacman</h3>
              <p className="text-sm">
                Création d'un jeu Pacman en Java, JavaFx.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
