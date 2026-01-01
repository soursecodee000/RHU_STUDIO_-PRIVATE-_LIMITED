import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#0a0f1d] text-white py-10 sm:py-20 md:py-24 px-4 sm:px-6 md:px-20 overflow-hidden"
    >
      {/* Decorative floating shapes */}
      <div className="absolute top-0 left-0 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-tr from-purple-400 via-cyan-400 to-blue-500 rounded-full blur-3xl -z-10 animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-bl from-cyan-400 via-blue-500 to-purple-400 rounded-full blur-3xl -z-10 animate-float-slow" />

      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center mb-12 sm:mb-16 font-playfair font-bold text-gradient">
        Contact <span className="text-cyan-400">Us</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl mb-4 text-purple-400 font-semibold">Let's Work Together</h2>
          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            Reach out for collaborations, game projects, or support.
          </p>

        <p className="mb-2 sm:mb-3 text-sm sm:text-base">
  📧 <a href="Rhutech7@gmail.com" className="text-cyan-400 hover:underline">Rhutech7@gmail.com</a>
</p>
<p className="mb-4 sm:mb-6 text-sm sm:text-base">
  📞 <a href="tel:+92 308 0143643" className="text-cyan-400 hover:underline">+92 307 0246857</a>
</p>


         <div className="flex justify-center gap-3 sm:gap-4 mb-8 animate-fadeIn delay-800">
                 <div className="flex justify-center md:justify-start gap-3 sm:gap-4 mb-8 animate-fadeIn delay-800">
  <a
    href="https://www.facebook.com/share/1EfAnyvHNh/"
    target="_blank"
    rel="noopener noreferrer"
    className="border cursor-pointer border-purple-400 p-2 sm:p-3 rounded-full hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:text-black transition"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://github.com/sqsoft19-web"
    target="_blank"
    rel="noopener noreferrer"
    className="border cursor-pointer border-purple-400 p-2 sm:p-3 rounded-full hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:text-black transition"
  >
    <FaGithub />
  </a>
  <a
    href="https://www.linkedin.com/in/sohail-ahmad-91062a34b/"
    target="_blank"
    rel="noopener noreferrer"
    className="border cursor-pointer border-purple-400 p-2 sm:p-3 rounded-full hover:bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:text-black transition"
  >
    <FaLinkedinIn />
  </a>
</div>

                </div>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 sm:p-4 rounded bg-[#1c1f2a] text-white border border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 sm:p-4 rounded bg-[#1c1f2a] text-white border border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition w-full"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-3 sm:p-4 rounded bg-[#1c1f2a] text-white border border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition w-full"
          />
          <button className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 cursor-pointer text-black py-3 sm:py-4 rounded-full font-semibold hover:shadow-[0_0_25px_rgba(0,255,255,0.7)] transition mt-2 w-full sm:w-auto text-center">
            Send Message
          </button>
        </form>
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
