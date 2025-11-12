export default function Parcours() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12">
        <span className="text-black">Mon </span>
        <span className="text-midas">Parcours</span>
      </h2>

      <div className="flex flex-col gap-8">
        <div className=" group flex flex-col md:flex-row  items-center  rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-midas">
          <img
            src="images/iut_de_lens_cover.jpg"
            className="md:w-1/2 h-80 w-full object-cover"
          />
          <div className="p-6 text-left flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">BUT Informatique</h3>
              <p class="w-96">
                IUT de Lens – Lens, France
                <br />
                Je suis actuellement en formation au sein de l'IUT de Lens dans
                le but d'obtenir un BUT en Informatique en 2027.
              </p>
              <p className="text-midas font-bold mt-6">2024 | En cours</p>
            </div>
          </div>
        </div>

        <div className=" group flex flex-col md:flex-row  items-center  rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-midas">
          <img
            src="images/baud.jpeg"
            className="md:w-1/2 h-80 w-full object-cover"
          />
          <div className="p-6 text-left flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Baccalauréat Scientifique
              </h3>
              <p class="w-96">
                Baudimont - Arras, France
                <br />
                J'ai obtenu mon baccalauréat scientifique option SIN
                <br />
                (Sciences et Technologies de l'Industrie et du Développement
                Durable - Systèmes d'Information et Numérique) au lycée
                Baudimont d'Arras en 2024 avec la mention Assez Bien.
              </p>
              <p className="text-midas font-bold mt-6">2021 | 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
