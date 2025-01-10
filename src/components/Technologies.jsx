import ReactLogo from "/src/assets/technologies/react.svg";
import CSSLogo from "/src/assets/technologies/css.png";
import JavaScriptLogo from "/src/assets/technologies/javascript.svg";
import BootstrapLogo from "/src/assets/technologies/bootstrap.svg";
import GitHubLogo from "/src/assets/technologies/github.svg";
import JiraLogo from "/src/assets/technologies/jira.svg";
import StoryBook from "/src/assets/technologies/storybook-icon.svg";
import Drupal from "/src/assets/technologies/drupal.svg";

const technologies = [
  { name: "React", logo: ReactLogo },
  { name: "Tailwind", logo: "/src/assets/technologies/tailwind.png" },
  { name: "GitHub", logo: GitHubLogo },
  { name: "JavaScript", logo: JavaScriptLogo },
  { name: "Bootstrap", logo: BootstrapLogo },
  { name: "Jira", logo: JiraLogo },
  { name: "ChatGPT", logo: "/src/assets/technologies/chatgpt.png" },
  { name: "CSS", logo: CSSLogo },
  { name: "HTML", logo: "/src/assets/technologies/html.png" },
  {
    name: "Screamming Frog",
    logo: "/src/assets/technologies/screaming-frog.png",
  },
  { name: "Wordpress", logo: "/src/assets/technologies/wordpress.png" },
  { name: "Storybook", logo: StoryBook },
  { name: "Drupal", logo: Drupal },
  { name: "Figma", logo: "/src/assets/technologies/figma.png" },
];

const Technologies = () => (
  <section className="py-12 bg-floralWhite border-t-2 border-t-moonstone">
    <div className="container mx-auto">
      <h2 className="text-3xl text-moonstone font-bold text-center mb-8 pb-8">
        Technologies & outils maîtrisées
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-16 h-16 object-contain"
            />
            <p className="mt-2 text-gray-700">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Technologies;
