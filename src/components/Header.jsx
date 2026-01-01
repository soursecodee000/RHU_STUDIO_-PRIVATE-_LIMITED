import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["home", "about", "skills", "services", "projects", "contact"];

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/"); // go to home page
    } else {
      scroll.scrollToTop(); // scroll to top if already on home
    }
  };

  const handleNavClick = (item) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: item } }); // navigate to home and scroll
    }
  };

  return (
    <header
      className={`fixed top-0 w-full py-4 md:py-5 z-50 transition-colors duration-500 ${
        scrolled ? "bg-[#0a0f1d] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex justify-between items-center">
        {/* Logo */}
        <button onClick={handleLogoClick} className="flex items-center text-xl sm:text-2xl font-semibold">
          <img
            src="/images/logo3.png"
            className="h-10 w-10 sm:h-15 sm:w-15 object-contain"
          />
          RHU STUDIO (PRIVATE) LIMITED
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-6 lg:gap-8 text-base sm:text-lg">
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
                className="hover:text-cyan-400 transition capitalize cursor-pointer"
              >
                {item}
              </button>
            )
          )}
        </nav>

        {/* Hamburger */}
        <div className="md:flex lg:hidden items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 sm:w-72 bg-[#0a0f1d] shadow-lg z-40 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-white text-2xl">
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-6 mt-10 text-lg">
          {navItems.map((item) =>
            location.pathname === "/" ? (
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition capitalize cursor-pointer"
              >
                {item}
              </ScrollLink>
            ) : (
              <button
                key={item}
                onClick={() => {
                  handleNavClick(item);
                  setMenuOpen(false);
                }}
                className="hover:text-cyan-400 transition capitalize cursor-pointer"
              >
                {item}
              </button>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
