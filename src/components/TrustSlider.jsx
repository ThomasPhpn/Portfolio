import Slider from "react-slick";

const companies = [
  { name: "Company 1", logo: "https://via.placeholder.com/300" },
  { name: "Company 2", logo: "https://via.placeholder.com/300" },
  { name: "Company 3", logo: "https://via.placeholder.com/300" },
  { name: "Company 4", logo: "https://via.placeholder.com/300" },
  { name: "Company 5", logo: "https://via.placeholder.com/300" },
  { name: "Company 6", logo: "https://via.placeholder.com/300" },
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
    <section className="py-12 bg-floralWhite">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-moonstone font-bold mb-8">
          Ils me font / m'ont fait confiance
        </h2>
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className="px-4">
              <img
                src={company.logo}
                alt={company.name}
                className="w-32 h-32 mx-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrustSlider;
