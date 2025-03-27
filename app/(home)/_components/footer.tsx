import Link from "next/link";
import { siYoutube, siGithub } from "simple-icons";

const socialLinks = [
  {
    name: "YouTube",
    url: "",
    icon: siYoutube,
  },
  {
    name: "GitHub",
    url: "",
    icon: siGithub,
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left Section: "Follow Me" Links */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">Follow Me</h2>
            <ul className="flex flex-wrap justify-center md:justify-start mt-3 space-x-4">
              {socialLinks.map(({ name, url, icon }) => (
                <li key={name}>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={icon.path} />
                    </svg>
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: Copyright */}
          <div className="text-sm text-gray-400 text-center md:text-right">
            &copy; {new Date().getFullYear()} Copyright reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
