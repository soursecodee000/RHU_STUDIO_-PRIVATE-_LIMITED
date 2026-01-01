import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = ["home", "about", "skills", "services", "projects", "contact"];

  const handleNavClick = (item) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: item } });
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      scroll.scrollToTop();
    }
  };

  return (
    <footer className="relative bg-[#0a0f1d] text-white py-12 px-6 sm:px-10 md:px-20 overflow-hidden border-t-2 border-b-2 border-cyan-400">
      
      {/* Decorative floating shapes */}
      <div className="absolute top-0 left-0 w-36 sm:w-48 h-36 sm:h-48 bg-gradient-to-tr from-purple-400 via-cyan-400 to-blue-500 rounded-full blur-3xl -z-10 animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-bl from-cyan-400 via-blue-500 to-purple-400 rounded-full blur-3xl -z-10 animate-float-slow" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">

        {/* Logo / About */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <button onClick={handleLogoClick} className="flex flex-col items-center md:items-start gap-3">
            <img
              src="/images/logo3.png"
              className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
              alt="CipherFlux Games Logo"
            />
            <span className="text-xl sm:text-2xl font-semibold hover:text-cyan-400 transition">
              RHU STUDIO (PRIVATE) LIMITED
            </span>
          </button>
          <p className="text-gray-300 max-w-xs">
            Professional game studio specializing in 2D & 3D Unity games. We create immersive experiences for players worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">Quick Links</h3>

          <div className="flex flex-col gap-2">
            {navItems.map((item) =>
              location.pathname === "/" ? (
                <ScrollLink
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="hover:text-cyan-400 transition capitalize cursor-pointer"
                >
                  {item}
                </ScrollLink>
              ) : (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="hover:text-cyan-400 transition capitalize cursor-pointer text-left"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">Follow Us</h3>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/share/1EfAnyvHNh/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-400 p-3 rounded-full hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:text-black transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://github.com/sqsoft19-web"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-400 p-3 rounded-full hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:text-black transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sohail-ahmad-91062a34b/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-400 p-3 rounded-full hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:text-black transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 max-w-7xl mx-auto text-center text-gray-400 text-sm border-t-2 border-cyan-400 pt-4">
        © {new Date().getFullYear()} RHU STUDIO (PRIVATE) LIMITED. All rights reserved.
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
