import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const socials = [
    { name: "Facebook", icon: <FaFacebookF />, href: "#" },
    { name: "Twitter", icon: <FaTwitter />, href: "#" },
    { name: "Instagram", icon: <FaInstagram />, href: "#" },
  ];
  return (
    <footer className="bg-surface dark:bg-bg-surface text-surface dark:text-text-surface pt-12 mt-10">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-200 dark:border-gray-700">
        {/* Logo / About */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Pak Railfan
          </h2>
          <p className="text-surface text-base md:text-lg leading-relaxed">
            Explore Pakistan’s breathtaking valleys, majestic mountains, and
            scenic railway journeys. At Pak Railfan, we bring travel lovers
            closer to nature and culture.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-secondary text-xl md:text-2xl font-bold mb-3">
            Quick Links
          </h3>
          <ul className="space-y-3 text-surface text-base md:text-lg font-semibold">
            <li>
              <a href="/" className="hover:text-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="/destinations" className="hover:text-primary transition">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-primary transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-primary transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Travel Resources */}
        <div>
          <h3 className="text-secondary text-xl md:text-2xl font-bold mb-3">
            Travel Resources
          </h3>
          <ul className="space-y-3 text-surface text-base md:text-lg font-semibold">
            <li>
              <a href="/blog" className="hover:text-primary transition">
                Travel Blog
              </a>
            </li>
            <li>
              <a href="/guides" className="hover:text-primary transition">
                Travel Guides
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-primary transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-primary transition">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-secondary text-xl md:text-2xl font-bold mb-3">
            Contact Us
          </h3>
          <p className="text-surface text-base md:text-lg mb-2">
            Email: info@email.com
          </p>
          <p className="text-surface text-base md:text-lg mb-4">
            Phone: +92 123 456 789
          </p>

          {/* social icons  */}
          <div className="flex space-x-6 text-2xl md:text-3xl">
            {socials.map(({ name, icon, href }) => (
              <div key={name} className="relative group">
                <a
                  href={href}
                  aria-label={name}
                  className="text-secondary hover:text-accent transition duration-300"
                >
                  {icon}
                </a>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md z-10">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-surface dark:text-text-surface text-sm md:text-base py-6">
        © {new Date().getFullYear()} Pak Railfan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
