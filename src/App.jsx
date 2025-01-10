import Header from "./components/Header";
import Expertises from "./components/Expertises";
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";
import FloatingIcons from "./components/FloatingIcons";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import TrustSlider from "./components/TrustSlider";

const App = () => (
  <div>
    <FloatingIcons /> {/* Icônes flottantes */}
    <Header />
    <Expertises />
    <Projects />
    <TrustSlider />
    <Technologies />
    <ContactForm />
    <Footer />
  </div>
);

export default App;
