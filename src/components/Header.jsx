import { useState, useEffect } from "react";
import profil from "../assets/thomas-philipponneau.jpg";

const Header = () => {
  const professions = ["Webmaster", "Intégrateur", "Développeur"];
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentProfession = professions[currentProfessionIndex];
      if (letterIndex < currentProfession.length) {
        setDisplayedText(
          (prevText) => prevText + currentProfession[letterIndex]
        );
        setLetterIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setLetterIndex(0);
          setDisplayedText("");
          setCurrentProfessionIndex(
            (prevIndex) => (prevIndex + 1) % professions.length
          );
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [letterIndex, currentProfessionIndex]);

  return (
    <header className="bg-floralWhite text-gray-800 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mx-4">
          <h1 className="text-4xl font-bold text-moonstone">
            Thomas Philipponneau
          </h1>
          <p className="text-lg mt-4">
            Je suis <span className="text-moonstone">{displayedText}</span>.
          </p>
          <p className="mt-6 leading-relaxed text-gray-700 text-justify">
            Professionnel polyvalent de 30 ans basé près de <b>Bordeaux</b>,
            j&apos;ai construit un parcours mêlant web et multilinguisme. Avec
            une Licence en Langues Étrangères Appliquées -{" "}
            <i>un séjour à Newcastle</i> - et un Master en Création et
            Administration de sites web multilingues, je sais allier{" "}
            <b>technique</b> et <b>adaptabilité</b>.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700 text-justify">
            Freelance depuis plusieurs années, j&apos;ai eu la chance de
            collaborer avec des entreprises de renom comme <b>Veolia</b>,{" "}
            <b>Saint-Gobain</b> ou encore <b>WeightWatchers</b>.
          </p>
          <p className="mt-6 leading-relaxed text-gray-700 text-justify">
            🎯 Prêt à relever vos défis digitaux, je suis à votre disposition
            pour accompagner vos projets avec <b>créativité et efficacité</b> !
          </p>
        </div>

        <div className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={profil}
            alt="Profil de Thomas"
            className="w-1/2 object-fill shadow-md rounded-lg shadow-moonstone"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
