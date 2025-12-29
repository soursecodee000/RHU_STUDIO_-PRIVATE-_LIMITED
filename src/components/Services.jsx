export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#0a0f1d] text-white py-5 md:py-24 px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* Decorative floating shapes */}
      <div className="absolute top-0 left-0 w-56 sm:w-64 h-56 sm:h-72 bg-gradient-to-tr from-purple-400 via-cyan-400 to-blue-500 rounded-full blur-3xl -z-10 animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-bl from-cyan-400 via-blue-500 to-purple-400 rounded-full blur-3xl -z-10 animate-float-slow" />

      {/* Heading */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold tracking-wide text-gradient">
          Our <span className="text-cyan-400">Services</span>
        </h2>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 max-w-7xl mx-auto">
        <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-purple-400/20 via-cyan-400/20 to-blue-500/20 backdrop-blur-md shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition-transform duration-300 text-center">
          <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-3 sm:mb-4 text-purple-400">
            Game Development
          </h3>
          <p className="text-sm sm:text-base md:text-base text-gray-300 leading-relaxed">
            We create immersive 2D and 3D Unity games that captivate players.
          </p>
        </div>

        <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-400/20 backdrop-blur-md shadow-lg hover:shadow-purple-400/50 hover:scale-105 transition-transform duration-300 text-center">
          <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-3 sm:mb-4 text-cyan-400">
            Cross Platform
          </h3>
          <p className="text-sm sm:text-base md:text-base text-gray-300 leading-relaxed">
            Seamless deployment on PC, Mobile & AR/VR platforms.
          </p>
        </div>

        <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-400/20 to-cyan-400/20 backdrop-blur-md shadow-lg hover:shadow-blue-400/50 hover:scale-105 transition-transform duration-300 text-center">
          <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-3 sm:mb-4 text-blue-400">
            Testing & Optimization
          </h3>
          <p className="text-sm sm:text-base md:text-base text-gray-300 leading-relaxed">
            Rigorous optimization and performance testing for smooth experiences.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }

        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }

        /* Gradient text for headings */
        .text-gradient {
          background: linear-gradient(90deg, #913DC2, #5CCCC6, #0286df);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
