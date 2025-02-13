import ReactLogo from "../assets/technologies/react.svg";
import CSSLogo from "../assets/technologies/css.png";
import JavaScriptLogo from "../assets/technologies/javascript.svg";
import BootstrapLogo from "../assets/technologies/bootstrap.svg";
import GitHubLogo from "../assets/technologies/github.svg";
import JiraLogo from "../assets/technologies/jira.svg";
import StoryBook from "../assets/technologies/storybook-icon.svg";
import Drupal from "../assets/technologies/drupal.svg";
import TailwindLogo from "../assets/technologies/tailwind.png";
import ChatGPTLogo from "../assets/technologies/chatgpt.png";
import HTMLLogo from "../assets/technologies/html.png";
import ScreamingFrogLogo from "../assets/technologies/screaming-frog.png";
import WordpressLogo from "../assets/technologies/wordpress.png";
import FigmaLogo from "../assets/technologies/figma.png";

const technologies = [
  { name: "React", logo: ReactLogo },
  { name: "Tailwind", logo: TailwindLogo },
  { name: "GitHub", logo: GitHubLogo },
  { name: "JavaScript", logo: JavaScriptLogo },
  { name: "Bootstrap", logo: BootstrapLogo },
  { name: "Jira", logo: JiraLogo },
  { name: "ChatGPT", logo: ChatGPTLogo },
  { name: "CSS", logo: CSSLogo },
  { name: "HTML", logo: HTMLLogo },
  { name: "Screamming Frog", logo: ScreamingFrogLogo },
  { name: "Wordpress", logo: WordpressLogo },
  { name: "Storybook", logo: StoryBook },
  { name: "Drupal", logo: Drupal },
  { name: "Figma", logo: FigmaLogo },
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
