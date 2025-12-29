import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10"
    >
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg2.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CENTERED CONTENT */}
      <div className="relative z-10 text-center text-white max-w-6xl w-full">
        {/* SMALL INTRO */}
        <h3 className="text-base sm:text-lg md:text-2xl font-bartle mb-2 opacity-90 animate-fadeIn text-purple-400">
          Hello, It's Us
        </h3>

        {/* MAIN HEADING */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-playfair font-bold mb-4 animate-fadeIn delay-200 text-gradient leading-tight">
          CipherFlux Games
        </h1>

        {/* SUBHEADING */}
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 font-bartle animate-fadeIn delay-400">
          And We are a{" "}
          <span className="text-cyan-500 font-semibold">Game Studio</span>
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-gray-300 font-bartle animate-fadeIn delay-600 leading-relaxed px-2 sm:px-0">
          CipherFlux Games is a professional game development studio
          specializing in 2D and 3D Unity games. We craft immersive experiences
          for players around the world.
        </p>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-8 animate-fadeIn delay-800">
          <a
            href="https://www.facebook.com/share/1EfAnyvHNh/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-400 p-2 sm:p-3 rounded-full hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:text-black transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/sqsoft19-web"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-400 p-2 sm:p-3 rounded-full hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sohail-ahmad-91062a34b/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-400 p-2 sm:p-3 rounded-full hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:text-black transition"
          >
            <FaLinkedinIn />
          </a>
        </div>

       {/* CTA BUTTON */}
<a
  href="#about"
  className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-black px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:shadow-[0_0_25px_rgba(0,255,255,0.8)] transition-transform transform hover:scale-105 animate-fadeIn delay-1000 text-sm sm:text-base md:text-lg"
>
  More About Us
</a>

      </div>

      {/* ANIMATION STYLES */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn { animation: fadeIn 1s ease forwards; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }

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
