import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FloatingIcons = () => (
  <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-50">
    {/* Contact */}
    <a
      href="#contact"
      className="bg-moonstone text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-platinum transition"
      title="Contact"
    >
      <FontAwesomeIcon icon="envelope" size="2x" />
    </a>

    {/* Profil Malt */}
    <a
      href="https://www.malt.fr/profile/thomasphilipponneau"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-moonstone text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-platinum transition"
      title="Malt"
    >
      <FontAwesomeIcon icon="code" size="2x" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/thomas-philipponneau-webmaster/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-moonstone text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-platinum transition"
      title="LinkedIn"
    >
      <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/ThomasPhpn"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-moonstone text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-platinum transition"
      title="GitHub"
    >
      <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
    </a>
  </div>
);

export default FloatingIcons;
