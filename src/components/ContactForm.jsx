import { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      toast.error("Veuillez valider le CAPTCHA !");
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        toast.success("🎉 Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
        setCaptchaValue(null);
      })
      .catch((error) => {
        console.error("Erreur:", error);
        toast.error("❌ Erreur lors de l'envoi du message.");
      });
  };

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

  return (
    <section
      id="contact"
      className="py-12 bg-white border-t-2 border-t-moonstone"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-moonstone text-center mb-8">
          Me contacter
        </h2>
        <form
          className="max-w-lg mx-auto bg-floralWhite p-4 rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-moonstone focus:border-moonstone"
              placeholder="Votre nom"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-moonstone focus:border-moonstone"
              placeholder="Votre email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-moonstone focus:border-moonstone"
              placeholder="Votre message"
              required
            ></textarea>
          </div>
          <div className="mb-4 flex justify-center">
            {siteKey && (
              <ReCAPTCHA
                sitekey={siteKey}
                onChange={(value) => setCaptchaValue(value)}
              />
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-moonstone text-white py-2 px-4 rounded hover:bg-AsGreen"
          >
            Envoyer
          </button>
        </form>

        {/* Affiche les notifications */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </section>
  );
};

export default ContactForm;
