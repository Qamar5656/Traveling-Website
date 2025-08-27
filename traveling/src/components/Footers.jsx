import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-12 mt-10">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-border">
        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Pak Railfan
          </h2>
          <p className="text-dark text-sm leading-relaxed">
            Explore Pakistan’s breathtaking valleys, majestic mountains, and
            scenic railway journeys. At Pak Railfan, we bring travel lovers
            closer to nature and culture.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-secondary font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-dark text-sm font-semibold">
            <li>
              <a href="/" className="hover:text-secondary transition">
                Home
              </a>
            </li>
            <li>
              <a
                href="/destinations"
                className="hover:text-secondary transition"
              >
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-secondary transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-secondary transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Travel Resources */}
        <div>
          <h3 className="text-secondary font-bold mb-3">Travel Resources</h3>
          <ul className="space-y-2 text-dark text-sm font-semibold">
            <li>
              <a href="/blog" className="hover:text-secondary transition">
                Travel Blog
              </a>
            </li>
            <li>
              <a href="/guides" className="hover:text-secondary transition">
                Travel Guides
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-secondary transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-secondary transition">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-secondary font-bold mb-3">Contact Us</h3>
          <p className="text-dark text-sm mb-2">Email: info@email.com</p>
          <p className="text-dark text-sm mb-4">Phone: +92 123 456 789</p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-secondary hover:text-tertiary transition text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-secondary hover:text-tertiary transition text-lg"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-secondary hover:text-tertiary transition text-lg"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-dark text-sm py-6">
        © {new Date().getFullYear()} Pak Railfan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
