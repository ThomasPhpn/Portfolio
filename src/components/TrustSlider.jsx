import Slider from "react-slick";

// Importer les logos locaux
import VeoliaLogo from "/src/assets/entreprises/veolia.png";
import SaintGobainLogo from "/src/assets/entreprises/saint-gobain.png";
import WeightWatchersLogo from "/src/assets/entreprises/weight-watchers.png";
import MuseePrehistoireLogo from "/src/assets/entreprises/musee-national-prehistoire.png";
import AssociationLogo from "/src/assets/entreprises/logo-association-cameleon.jpg";

// Liste des entreprises
const companies = [
  { name: "Veolia", logo: VeoliaLogo },
  { name: "Saint-Gobain", logo: SaintGobainLogo },
  { name: "WeightWatchers", logo: WeightWatchersLogo },
  { name: "Musée National de la Préhistoire", logo: MuseePrehistoireLogo },
  { name: "Association Caméléon", logo: AssociationLogo },
];

const TrustSlider = () => {
  const settings = {
    dots: true, // Pas de points sous le slider
    infinite: true, // Boucle infinie
    speed: 500,
    slidesToShow: 4, // Affiche 4 logos à la fois
    slidesToScroll: 1, // Défiler 1 logo à la fois
    arrows: true, // Flèches activées
    responsive: [
      {
        breakpoint: 1024, // Sur tablette et petits écrans
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Sur mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-white border-t-2 border-t-moonstone">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-moonstone font-bold mb-8">
          Ils me font, m'ont fait confiance
        </h2>
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className="px-4">
              <img
                src={company.logo}
                alt={company.name}
                className="w-48 h-44 mx-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrustSlider;
