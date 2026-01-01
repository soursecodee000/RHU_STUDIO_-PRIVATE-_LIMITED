export default function About() {
  return (
    <section className="relative bg-[#0a0f1d] text-white overflow-hidden">
      {/* About Section */}
      <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-20 flex flex-col justify-center relative">
        {/* Decorative floating shapes */}
        <div className="absolute top-0 left-0 w-40 sm:w-72 h-40 sm:h-72 bg-gradient-to-tr from-purple-400 via-cyan-400 to-blue-500 rounded-full blur-3xl -z-10 animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-60 sm:w-96 h-60 sm:h-96 bg-gradient-to-bl from-cyan-400 via-blue-500 to-purple-400 rounded-full blur-3xl -z-10 animate-float-slow" />

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold tracking-wide text-gradient">
            About <span className="text-cyan-400">Us</span>
          </h2>
          <p className="text-gray-300 mt-2 sm:mt-4 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            At RHU STUDIO (PRIVATE) LIMITED, we craft unforgettable 2D & 3D gaming experiences, blending innovation, creativity, and technical mastery.
          </p>
        </div>

        {/* Image & Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-7xl mx-auto items-center mb-12 sm:mb-16">
          <div className="flex justify-center items-center">
            <img
              src="/images/about-img.avif"
              alt="Gaming Illustration"
              className="w-40 sm:w-56 md:w-72 lg:w-96 animate-float drop-shadow-[0_12px_20px_rgba(0,255,255,0.5)] rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-center space-y-2 sm:space-y-4 md:space-y-6 text-center md:text-left">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bartle text-purple-400 font-semibold animate-fadeIn delay-200">
              Innovation. Creativity. Unforgettable Experiences.
            </h4>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 animate-fadeIn delay-400 leading-relaxed">
             At RHU STUDIO (PRIVATE) LIMITED, we are a professional game development studio dedicated to delivering high-quality 2D and 3D Unity games and comprehensive software solutions. Our team brings expertise in Python, Java, MATLAB, C, C++, and Django, allowing us to develop customized, robust, and efficient solutions for a wide variety of projects. We combine creativity, technical proficiency, and innovative problem-solving to produce engaging and immersive gaming experiences while optimizing workflows and enhancing performance across all software applications.
            </p>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 animate-fadeIn delay-600 leading-relaxed">
              Our goal is to set new standards in the gaming industry, creating unforgettable experiences for players worldwide.
            </p>
          </div>
        </div>

        {/* Mission / Vision / Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          <div className="bg-[#1c1f2a] rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition">
            <div className="text-cyan-400 text-2xl sm:text-3xl mb-2 sm:mb-3">🎯</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1 text-purple-400">Mission</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              To create immersive, high-quality gaming experiences that captivate players worldwide.
            </p>
          </div>

          <div className="bg-[#1c1f2a] rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition">
            <div className="text-cyan-400 text-2xl sm:text-3xl mb-2 sm:mb-3">🌟</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1 text-purple-400">Vision</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              To lead in game development by combining innovation, creativity, and technology.
            </p>
          </div>

          <div className="bg-[#1c1f2a] rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition">
            <div className="text-cyan-400 text-2xl sm:text-3xl mb-2 sm:mb-3">💡</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1 text-purple-400">Values</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Creativity, Innovation, Excellence, and Passion guide everything we do.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="bg-[#081b29] py-16 sm:py-20 px-4 sm:px-6 md:px-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gradient">
            Our <span className="text-cyan-400">Approach</span>
          </h2>
          <p className="text-gray-300 mt-2 sm:mt-4 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            We follow a player-centric approach, ensuring every game is immersive, innovative, and high-quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto text-center">
          <div className="bg-[#1c1f2a] rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition">
            <h3 className="text-lg sm:text-xl font-semibold mb-1 text-purple-400">Player First</h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              We design games with the player in mind, focusing on engagement and enjoyment.
            </p>
          </div>

          <div className="bg-[#1c1f2a] rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition">
            <h3 className="text-lg sm:text-xl font-semibold mb-1 text-purple-400">Innovation</h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Our team leverages the latest technology and creative ideas to push boundaries.
            </p>
          </div>

          <div className="bg-[#1c1f2a] rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition">
            <h3 className="text-lg sm:text-xl font-semibold mb-1 text-purple-400">Quality</h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Every project undergoes rigorous quality checks to ensure the best player experience.
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease forwards; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }

        .text-gradient {
          background: linear-gradient(90deg, #913DC2, #5CCCC6, #0286df);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
