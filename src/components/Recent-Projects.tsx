import Image from "next/image";

export default function RecentProjects() {
  const projects = [
    {
      title: "Gugli Tech",
      image: "/Guglitech.png",
    },
    {
      title: "Resume Generator",
      image: "/ResumeGenerator.png",
    },
    {
      title: "Digital Art",
      image: "/teamwork.jpg",
    },
  ];

  return (
    <section className="py-24 px-4" id="projects">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center text-[#1E2B4F]">
          Recent Project
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-xl font-semibold">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
