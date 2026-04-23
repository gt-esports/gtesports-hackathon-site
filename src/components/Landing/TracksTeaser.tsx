import { winningProjects } from "../../data/winningProjects";

export default function TracksTeaser() {
  const allProjectsPending = winningProjects.every(
    (project) => project.status === "pending"
  );
  const publishedProjects = winningProjects.filter(
    (project) => project.status === "published"
  );
  const totalAwards = winningProjects.reduce(
    (count, project) => count + project.awards.length,
    0
  );

  return (
    <section
      id="winners"
      className="relative py-16 overflow-hidden bg-[#8fb6d3] flex flex-col items-center justify-center"
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute top-20 left-[10%] text-6xl opacity-40 animate-float pointer-events-none">
        ☁️
      </div>
      <div
        className="absolute top-40 right-[15%] text-5xl opacity-30 animate-float pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      >
        ☁️
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="mb-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-pixel text-white drop-shadow-md mb-4 tracking-wide uppercase stroke-valley-brown stroke-2">
            Winning Projects
          </h2>
          <p className="font-pixel text-white/90 text-sm md:text-base tracking-widest bg-valley-brown/20 px-4 py-2 rounded-full inline-block backdrop-blur-sm">
            Highlights from TechHack 2026
          </p>
          <p className="mt-5 font-pixel text-[0.7rem] md:text-xs text-white/90 leading-relaxed bg-valley-brown/25 border border-white/20 px-5 py-4 rounded-xl inline-block max-w-3xl">
            {allProjectsPending
              ? "We are updating this section with the final winning projects now."
              : "Four projects stood out at our inaugural TechHack, including one double winner that took home both Best Overall and the Game Dev Track."}
          </p>
        </div>

        <div className="relative w-full max-w-6xl bg-[#8d6e63] p-4 md:p-6 rounded-lg shadow-2xl border-b-8 border-r-8 border-[#5d4037] transform rotate-1">
          <div
            className="absolute inset-0 rounded-lg opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.05) 50px, rgba(0,0,0,0.05) 53px), repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(0,0,0,0.05) 100px, rgba(0,0,0,0.05) 103px)",
              backgroundColor: "#a1887f",
            }}
          />

          <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-[#3e2723] shadow-inner border border-[#5d4037] z-20"></div>
          <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-[#3e2723] shadow-inner border border-[#5d4037] z-20"></div>
          <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-[#3e2723] shadow-inner border border-[#5d4037] z-20"></div>
          <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-[#3e2723] shadow-inner border border-[#5d4037] z-20"></div>

          <div className="relative z-10 mt-2 mb-2 px-2 md:px-8">
            <div className="mb-8 rounded-2xl border-2 border-[#e7d7b6] bg-[linear-gradient(180deg,#fff6df,#f6ead0)] p-5 md:p-6 shadow-inner">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-pixel text-[0.65rem] md:text-xs text-valley-brown/60 uppercase tracking-[0.25em] mb-2">
                    Winners Showcase
                  </p>
                  <h3 className="font-pixel text-lg md:text-2xl text-valley-brown uppercase leading-relaxed">
                    Recognized Projects From Our First TechHack
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-valley-brown text-valley-cream rounded-xl px-4 py-3 min-w-28 text-center">
                    <div className="font-pixel text-lg md:text-xl">{publishedProjects.length}</div>
                    <div className="font-pixel text-[0.55rem] uppercase tracking-widest text-valley-gold">
                      Projects
                    </div>
                  </div>
                  <div className="bg-valley-brown text-valley-cream rounded-xl px-4 py-3 min-w-28 text-center">
                    <div className="font-pixel text-lg md:text-xl">{totalAwards}</div>
                    <div className="font-pixel text-[0.55rem] uppercase tracking-widest text-valley-gold">
                      Awards
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {winningProjects.map((project, index) => {
                const isFeatured = project.awards.length > 1;
                const isPending = project.status === "pending";

                return (
                <article
                  key={project.id}
                  className={`relative ${
                    isFeatured ? "md:col-span-2 md:px-6" : ""
                  } ${index % 2 === 0 ? "rotate-[1deg]" : "rotate-[-1deg]"}`}
                >
                  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 z-20 h-4 w-4 rounded-full shadow-md border ${
                    isFeatured
                      ? "bg-valley-gold border-yellow-700"
                      : "bg-red-400 border-red-700"
                  }`}></div>

                  <div className={`relative overflow-hidden border-2 shadow-lg ring-4 ring-black/5 ${
                    isFeatured
                      ? "bg-[linear-gradient(180deg,#fff8e8,#f9eed6)] border-[#e6c976] min-h-[20rem] p-6 md:p-8"
                      : "bg-[#fdfbf7] border-[#e0d4c0] min-h-[19rem] p-5 pt-6"
                  }`}>
                    <div className="absolute top-0 right-0 border-t-[24px] border-r-[24px] border-t-[#fdfbf7] border-r-[#e0e0e0] shadow-sm transform rotate-90"></div>
                    <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

                    <div className="relative z-10 flex flex-col gap-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-2">
                          {project.awards.map((award) => (
                            <span
                              key={award}
                              className={`inline-flex max-w-full items-center justify-center px-3 py-1 text-center font-pixel text-[10px] leading-relaxed tracking-wider whitespace-normal break-words md:text-xs ${
                                isFeatured
                                  ? "rounded-2xl border border-[#d1a93f] bg-[#f4d87d] text-[#5d4037]"
                                  : "rounded-2xl border border-valley-gold/30 bg-valley-gold/20 text-valley-brown"
                              }`}
                            >
                              {award}
                            </span>
                          ))}
                        </div>

                        {isFeatured ? (
                          <span className="font-pixel text-[10px] md:text-xs text-[#5d4037] bg-white/60 border border-[#d8bd6a] px-3 py-1 rounded-full uppercase tracking-wider">
                            Double Winner
                          </span>
                        ) : null}
                      </div>

                      <div className={`${isFeatured ? "md:max-w-4xl" : ""}`}>
                        <h3 className={`font-pixel text-valley-brown uppercase tracking-wide ${
                          isFeatured
                            ? "text-2xl md:text-3xl leading-relaxed mb-3"
                            : "text-xl md:text-2xl leading-tight mb-3"
                        }`}>
                          {project.projectName}
                        </h3>

                        {project.teamName ? (
                          <p className="font-pixel text-[0.65rem] md:text-xs text-valley-brown/70 uppercase tracking-wider mb-3">
                            {project.teamName}
                          </p>
                        ) : null}

                        <p className={`font-serif text-valley-brown/85 ${
                          isFeatured
                            ? "text-lg leading-8 max-w-4xl"
                            : "text-[1.02rem] leading-7"
                        }`}>
                          {project.description}
                        </p>
                      </div>

                      <div className="pt-2">
                        {project.projectUrl ? (
                          <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center px-4 py-2 font-pixel text-xs rounded border uppercase tracking-wider transition-colors ${
                              isFeatured
                                ? "bg-[#5d4037] text-valley-cream border-[#5d4037] hover:bg-[#4a332a]"
                                : "bg-valley-orange/10 text-valley-orange border-valley-orange/20 hover:bg-valley-orange/20"
                            }`}
                          >
                            View on Devpost
                          </a>
                        ) : (
                          <span className="inline-block px-4 py-2 bg-valley-brown/5 text-valley-brown/50 font-pixel text-xs rounded border border-valley-brown/10 uppercase tracking-wider">
                            {isPending ? "Details Coming Soon" : "Project Link Unavailable"}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
