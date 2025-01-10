import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCode,
  faSearch,
  faLaptopCode,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";

const Expertises = () => (
  <section className="bg-white text-gray-800 py-12 border-t-2 border-t-moonstone">
    <div className="container mx-auto">
      {/* Intro */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-moonstone">Expertises</h2>
      </div>

      {/* Liste des expertises */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 mx-4">
        {/* Création de sites */}
        <div className="flex flex-col items-center text-center md:text-left">
          <FontAwesomeIcon
            icon={faGlobe}
            size="2x"
            className="text-moonstone mb-4"
          />
          <h3 className="text-lg font-bold text-moonstone">
            Création de sites
          </h3>
          <p className="mt-2 text-gray-700">
            De la conception à la mise en ligne, je réalise des sites web
            modernes et performants qui répondent à vos besoins spécifiques.
          </p>
        </div>

        {/* Intégration & Webmastering */}
        <div className="flex flex-col items-center text-center md:text-left">
          <FontAwesomeIcon
            icon={faKeyboard}
            size="2x"
            className="text-moonstone mb-4"
          />
          <h3 className="text-lg font-bold text-moonstone">
            Intégration & Webmastering
          </h3>
          <p className="mt-2 text-gray-700">
            Intégration fluide et gestion quotidienne de votre site web sur des
            plateformes comme Wordpress et Drupal.
          </p>
        </div>

        {/* Référencement (SEO) */}
        <div className="flex flex-col items-center text-center md:text-left">
          <FontAwesomeIcon
            icon={faSearch}
            size="2x"
            className="text-moonstone mb-4"
          />
          <h3 className="text-lg font-bold text-moonstone">
            Référencement (SEO)
          </h3>
          <p className="mt-2 text-gray-700">
            Optimisation de votre visibilité sur les moteurs de recherche pour
            vous aider à capter plus de trafic qualifié.
          </p>
        </div>

        {/* Front-end */}
        <div className="flex flex-col items-center text-center md:text-left">
          <FontAwesomeIcon
            icon={faLaptopCode}
            size="2x"
            className="text-moonstone mb-4"
          />
          <h3 className="text-lg font-bold text-moonstone">Front-end</h3>
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
