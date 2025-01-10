import ProjectCard from "./ProjectCard";
import projets from "./projets.json";

const Projects = () => (
  <section className="py-12 bg-floralWhite border-t-2 border-t-moonstone px-4">
    <div className="container mx-auto">
      <h2 className="text-3xl text-moonstone font-bold text-center mb-8">
        Projets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projets.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
