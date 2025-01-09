import { useState, useEffect } from "react";
import profil from "../assets/thomas-philipponneau.jpg";

const Header = () => {
  const professions = ["Webmaster", "Intégrateur", "Développeur"];
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    // Effet d'écriture lettre par lettre
    const typingInterval = setInterval(() => {
      const currentProfession = professions[currentProfessionIndex];
      if (letterIndex < currentProfession.length) {
        setDisplayedText(
          (prevText) => prevText + currentProfession[letterIndex]
        );
        setLetterIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval); // Arrête l'écriture une fois le mot complet
        setTimeout(() => {
          // Pause avant de changer le mot
          setLetterIndex(0);
          setDisplayedText("");
          setCurrentProfessionIndex(
            (prevIndex) => (prevIndex + 1) % professions.length
          );
        }, 2000); // Pause de 2 secondes avant de changer le mot
      }
    }, 100); // Vitesse de frappe (en ms)

    return () => clearInterval(typingInterval); // Nettoyage pour éviter les conflits
  }, [letterIndex, currentProfessionIndex]);

  return (
    <header className="bg-floralWhite text-gray-800 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Texte principal */}
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl font-bold text-moonstone">
            Thomas Philipponneau
          </h1>
          <p className="text-lg mt-4">
            Je suis <span className="text-moonstone">{displayedText}</span>.
          </p>
          <p className="mt-6 leading-relaxed text-gray-700">
            Professionnel polyvalent de 30 ans basé près de Bordeaux, j'ai
            construit un parcours mêlant web et multilinguisme. Avec une Licence
            en Langues Étrangères Appliquées, un séjour à Newcastle et un Master
            en Création et Administration de sites web multilingues, je sais
            allier technique et adaptabilité.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Freelance depuis plusieurs années, j'ai eu la chance de collaborer
            avec des entreprises de renom comme Veolia, Saint-Gobain et
            WeightWatchers, en tant qu'intégrateur web, webmaster ou encore
            expert SEO.
          </p>
          <p className="mt-6 leading-relaxed text-gray-700">
            🎯 Prêt à relever vos défis digitaux, je suis à votre disposition
            pour accompagner vos projets avec créativité et efficacité !
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={profil}
            alt="Profil de Thomas"
            className="w-1/2 object-fill rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
