import { Link } from "react-router-dom";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0a0f1d] text-white py-12 md:py-24 px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* Decorative floating shapes */}
      <div className="absolute top-0 left-0 w-56 sm:w-64 h-56 sm:h-72 bg-gradient-to-tr from-purple-400 via-cyan-400 to-blue-500 rounded-full blur-3xl -z-10 animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-bl from-cyan-400 via-blue-500 to-purple-400 rounded-full blur-3xl -z-10 animate-float-slow" />

      {/* Heading */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold tracking-wide text-gradient">
          About <span className="text-cyan-400">Us</span>
        </h2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto items-center">

        {/* IMAGE */}
        <div className="flex justify-center items-center">
          <img
            src="/images/about-img.avif"
            alt="Gaming Illustration"
            className="w-48 sm:w-64 md:w-72 lg:w-96 animate-float drop-shadow-[0_15px_25px_rgba(0,255,255,0.5)]"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-center md:text-left">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bartle text-purple-400 font-semibold animate-fadeIn delay-200">
            Innovation. Creativity. Unforgettable Experiences.
          </h4>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 animate-fadeIn delay-400 leading-relaxed">
            At RHU STUDIO (PRIVATE) LIMITED, we combine creativity, technical expertise, and innovation
            to deliver immersive 2D and 3D gaming experiences and cutting-edge software
            solutions. Our team works passionately to set new industry standards.
          </p>

          {/* Link to About Page */}
          <Link
            to="/about"
            className="self-center md:self-start inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-[0_0_35px_rgba(0,255,255,0.8)] hover:scale-105 transition-transform animate-fadeIn delay-600"
          >
            More About Us
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

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

        .animate-fadeIn { animation: fadeIn 1s ease forwards; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
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
