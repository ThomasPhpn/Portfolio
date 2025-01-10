import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FloatingIcons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed right-4 top-1/4 md:top-1/2 transform -translate-y-1/2 flex flex-col items-center z-50">
      {/* Bouton hamburger (ou croix si ouvert) */}
      <button
        className="bg-moonstone text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg  md:hidden"
        onClick={toggleMenu}
        title={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <FontAwesomeIcon icon={isOpen ? "times" : "bars"} className="text-xl" />
      </button>

      {/* Icônes affichées si le menu est ouvert (mobile uniquement) */}
      {isOpen && (
        <div className="mt-4 space-y-3 md:hidden">
          <a
            href="#contact"
            className="bg-moonstone text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-AsGreen transition"
            title="Contact"
          >
            <FontAwesomeIcon icon="envelope" className="text-xl" />
          </a>
          <a
            href="https://www.malt.fr/profile/thomasphilipponneau"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-moonstone text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-AsGreen transition"
            title="Malt"
          >
            <FontAwesomeIcon icon="code" className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-philipponneau-webmaster/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-moonstone text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-AsGreen transition"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} className="text-xl" />
          </a>
          <a
            href="https://github.com/ThomasPhpn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-moonstone text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-AsGreen transition"
            title="GitHub"
          >
            <FontAwesomeIcon icon={["fab", "github"]} className="text-xl" />
          </a>
        </div>
      )}

      {/* Icônes toujours visibles sur desktop */}
      <div className="hidden md:flex flex-col items-center space-y-4">
        <a
          href="#contact"
          className="bg-moonstone text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-AsGreen transition"
          title="Contact"
        >
          <FontAwesomeIcon icon="envelope" size="2x" />
        </a>
        <a
          href="https://www.malt.fr/profile/thomasphilipponneau"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-moonstone text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-AsGreen transition"
          title="Malt"
        >
          <FontAwesomeIcon icon="code" size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/thomas-philipponneau-webmaster/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-moonstone text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-AsGreen transition"
          title="LinkedIn"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
        </a>
        <a
          href="https://github.com/ThomasPhpn"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-moonstone text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-AsGreen transition"
          title="GitHub"
        >
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default FloatingIcons;
