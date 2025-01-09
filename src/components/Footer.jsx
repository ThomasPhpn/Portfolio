const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Thomas Philipponneau. Tous droits réservés.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-moonstone hover:text-yellow-400">
            LinkedIn
          </a>
          <a href="#" className="text-moonstone hover:text-yellow-400">
            GitHub
          </a>
          <a href="#" className="text-moonstone hover:text-yellow-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
