const Expertises = () => (
  <section className="bg-platinum text-gray-800 py-12">
    <div className="container mx-auto">
      {/* Intro */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-moonstone">Expertises</h2>
        <p className="text-lg mt-4 text-gray-700">
          Fort de plusieurs années d’expérience, je vous accompagne dans tous
          vos projets digitaux avec une approche créative et efficace.
        </p>
      </div>

      {/* Liste des expertises */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold text-moonstone">
            Création de sites
          </h3>
          <p className="mt-2 text-gray-700">
            De la conception à la mise en ligne, je réalise des sites web
            modernes et performants qui répondent à vos besoins spécifiques.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold text-moonstone">
            Intégration & Webmastering
          </h3>
          <p className="mt-2 text-gray-700">
            Intégration fluide et gestion quotidienne de votre site web sur des
            plateformes comme Wordpress et Drupal.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold text-moonstone">
            Référencement (SEO)
          </h3>
          <p className="mt-2 text-gray-700">
            Optimisation de votre visibilité sur les moteurs de recherche pour
            vous aider à capter plus de trafic qualifié.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold text-moonstone">Front-end</h3>
          <p className="mt-2 text-gray-700">
            Création d’interfaces utilisateurs élégantes et fonctionnelles, avec
            un code propre et maintenable.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Expertises;
