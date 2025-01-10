const ProjectCard = ({ name, description, image, link }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img src={image} alt={name} className="w-full h-48 object-center" />
    <div className="p-6">
      <h3 className="text-xl font-semibold">{name}</h3>
      {/* Utilisation de dangerouslySetInnerHTML pour interpréter le HTML */}
      <p
        className="text-gray-600 mt-2"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-moonstone hover:text-yellow-600 mt-4 block"
      >
        Voir le projet
      </a>
    </div>
  </div>
);

export default ProjectCard;
