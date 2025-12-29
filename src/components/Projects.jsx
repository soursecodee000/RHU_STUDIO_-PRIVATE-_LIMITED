export default function Projects() {
  const projects = [
    {
      title: "3D Monster Truck Racing",
      desc: "Ultimate monster truck stunt simulator.",
      img: "/images/project1.webp",
    },
    {
      title: "Real Pool Swimming Game",
      desc: "Realistic swimming physics & challenges.",
      img: "/images/project2.webp",
    },
    {
      title: "Horse Riding Simulator",
      desc: "Explore stunning environments on horseback.",
      img: "/images/project3.webp",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-[#0a0f1d] text-white py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* Decorative floating shapes */}
      <div className="absolute top-0 left-0 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-tr from-purple-400 via-cyan-400 to-blue-500 rounded-full blur-3xl -z-10 animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-bl from-cyan-400 via-blue-500 to-purple-400 rounded-full blur-3xl -z-10 animate-float-slow" />

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-12 sm:mb-16 font-playfair font-bold tracking-wide text-gradient">
        Latest <span className="text-cyan-400">Projects</span>
      </h1>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative group rounded-3xl overflow-hidden shadow-lg bg-[#0f1324] transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 sm:h-64 md:h-72 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Overlay (Desktop) */}
            <div className="hidden md:flex absolute inset-0 bg-black/75 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col justify-center items-center text-center p-6">
              <h3 className="text-2xl font-semibold mb-3 text-purple-400">
                {project.title}
              </h3>
              <p className="text-gray-200 mb-4">{project.desc}</p>
              <a
                href="https://github.com/sqsoft19-web"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 text-black px-5 py-2 rounded-full font-semibold hover:shadow-[0_0_25px_rgba(0,255,255,0.7)] transition"
              >
                View
              </a>
            </div>

            {/* Mobile Content */}
            <div className="md:hidden p-4 sm:p-6 flex flex-col items-center text-center gap-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-400">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {project.desc}
              </p>
              <a
                href="https://github.com/sqsoft19-web"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 text-black px-4 py-2 rounded-full font-semibold mt-2 hover:shadow-[0_0_25px_rgba(0,255,255,0.7)] transition"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* See All Projects Button */}
      <div className="text-center mt-12 sm:mt-16">
        <a
          href="https://github.com/sqsoft19-web"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(0,255,255,0.7)] transition"
        >
          See All Projects
        </a>
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

        .text-gradient {
          background: linear-gradient(90deg, #913DC2, #5CCCC6, #0286df);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
