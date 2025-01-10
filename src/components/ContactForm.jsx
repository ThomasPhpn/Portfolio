const ContactForm = () => {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-moonstone text-center mb-8">
          Me contacter
        </h2>
        <form className="max-w-lg mx-auto bg-floralWhite p-4">
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
              rows="4"
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-moonstone focus:border-moonstone"
              placeholder="Votre message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-moonstone text-white py-2 px-4 rounded hover:bg-teal-900"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
