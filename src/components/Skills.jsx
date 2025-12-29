export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#0a0f1d] text-white py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* Decorative floating shapes */}
      <div className="absolute top-0 left-0 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-tr from-purple-400 via-cyan-400 to-blue-500 rounded-full blur-3xl -z-10 animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-bl from-cyan-400 via-blue-500 to-purple-400 rounded-full blur-3xl -z-10 animate-float-slow" />

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-12 sm:mb-16 font-playfair font-bold tracking-wide text-gradient">
        Our <span className="text-cyan-400">Expertise</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto">

        {/* Technical Skills */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-3xl mb-6 sm:mb-8 text-center underline underline-offset-8 decoration-cyan-400 text-purple-400">
            Technical Expertise
          </h2>

          {[
            ["Unity (2D & 3D)", "95%"],
            ["C++ / C#", "99%"],
            ["Cross Platform", "100%"],
            ["AR / VR Games", "100%"],
            ["Testing & Optimization", "99%"],
          ].map(([skill, percent]) => (
            <div key={skill} className="mb-4 sm:mb-6">
              <div className="flex justify-between mb-1 sm:mb-2 text-sm sm:text-base">
                <span>{skill}</span>
                <span>{percent}</span>
              </div>
              <div className="w-full h-3 sm:h-4 bg-gray-800 rounded-xl overflow-hidden">
                <div
                  className="h-3 sm:h-4 rounded-xl bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 transition-all duration-1000"
                  style={{ width: percent }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Core Strengths */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-3xl mb-6 sm:mb-8 text-center underline underline-offset-8 decoration-cyan-400 text-purple-400">
            Core Strengths
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 sm:gap-8 text-center">
            {[
              ["97%", "Innovation"],
              ["100%", "Client Satisfaction"],
              ["99%", "Quality Assurance"],
              ["98%", "Scalability"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="border-2 border-cyan-400 rounded-full p-6 sm:p-8 bg-[#0f1324] hover:bg-gradient-to-r hover:from-purple-400 hover:via-cyan-400 hover:to-blue-500 hover:text-black transition-all duration-300 shadow-lg"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-purple-400">{value}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-200">{label}</p>
              </div>
            ))}
          </div>
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

        /* Gradient text */
        .text-gradient {
          background: linear-gradient(90deg, #913DC2, #5CCCC6, #0286df);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
