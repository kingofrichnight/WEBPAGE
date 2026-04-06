import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function AaryaPortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const sectionVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const glowStyle = useMemo(
    () => ({
      background: `radial-gradient(420px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16,185,129,0.13), rgba(20,184,166,0.08) 22%, rgba(6,182,212,0.05) 34%, transparent 58%)`,
    }),
    [mousePosition]
  );

  const skills = [
    "ROS 2",
    "Python",
    "MATLAB",
    "Java",
    "R",
    "Arduino",
    "SolidWorks",
    "ANSYS",
    "Fusion 360",
    "DFM Software",
  ];

  const projects = [
    {
      title: "Rapid Hand",
      period: "Current",
      role: "Developer",
      description:
        "Currently developing a rapid-response robotic hand system focused on speed, precision, and intelligent actuation for real-time applications.",
      tools: ["Robotics", "Control Systems", "Embedded Systems"],
      featured: false,
    },
    {
      title: "Frontier Exploration System",
      period: "Completed",
      role: "Developer",
      description:
        "ROS2-based autonomous robot system for frontier exploration, obstacle-aware navigation, and target search and localization.",
      tools: ["ROS 2", "Autonomous Navigation", "A* Planning", "Robotics"],
      link: "https://github.com/kingofrichnight/Frontier_Exploration_System",
      featured: true,
    },
    {
      title: "IoT-based Air Compressor Monitoring System",
      period: "Completed",
      role: "Developer",
      description:
        "Built an IoT-based monitoring system for air compressors at MMRL and Purdue using machine learning for state classification and real-time condition monitoring.",
      tools: ["Python", "Machine Learning", "Raspberry Pi", "IoT", "Signal Processing"],
      link: "https://github.com/kingofrichnight/Air-compressor-sound-monitoring-system",
      featured: false,
    },
    {
      title: "Autonomous Rover for Precision Agriculture",
      period: "Dec 2024 – May 2025",
      role: "Project Lead",
      description:
        "Designed and developed an autonomous spray bot for precision agriculture, combining mechanical design, automation workflows, and field-oriented engineering.",
      tools: ["CAD", "Fusion 360", "Sheet Metal Equipment"],
      featured: true,
    },
    {
      title: "WAAM using CMT",
      period: "Aug 2024 – Mar 2025",
      role: "Project Lead",
      description:
        "Studied Wire Arc Additive Manufacturing using Cold Metal Transfer and evaluated process behavior, materials, and resulting properties.",
      tools: ["ABB Robot", "SS316L Wire", "Testing Equipment"],
      featured: false,
    },
    {
      title: "Electro-magnetophoresis",
      period: "Sep 2023 – Mar 2025",
      role: "Proposer",
      description:
        "Worked on coating special materials through electro-magnetophoresis and contributed to improving deposition rate in a team-based research setting.",
      tools: ["Pt Electrodes", "24V Electromagnet", "Lab Equipment"],
      featured: false,
    },
  ];

  const achievements = [
    "Graduated with distinction and ranked among the Top 3 students in Mechanical Engineering at VIT Vellore.",
    "Received Merit Scholarship for outstanding performance in 2022–2023.",
    "Received Merit Scholarship for outstanding performance in 2023–2024.",
    "Received Merit Scholarship for outstanding performance in 2024–2025.",
    "Patent approved: Solar powered autonomous rover with AI-based crop analysis and precision irrigation for sustainable agriculture.",
  ];

  const experience = {
    title: "Intern – Toyota Kirloskar Motor (TKM)",
    location: "Bidadi, Karnataka, India",
    details: [
      "Learned key pre- and post-processing stages involved in vehicle manufacturing.",
      "Gained exposure to both weld shop and paint shop operations.",
      "Built practical awareness of industrial production workflows.",
    ],
  };

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div
      className="min-h-screen bg-black text-white selection:bg-emerald-500/20"
      onMouseMove={(event) =>
        setMousePosition({ x: event.clientX, y: event.clientY })
      }
    >
      <div
        className="pointer-events-none fixed inset-0 -z-10 transition duration-300"
        style={glowStyle}
      />

      <div className="fixed inset-0 -z-20 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], x: [0, 18, 0], y: [0, -16, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-[-5%] h-[28rem] w-[28rem] rounded-full bg-emerald-500/8 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.06, 1], x: [0, -20, 0], y: [0, 18, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-12%] top-[12%] h-[24rem] w-[24rem] rounded-full bg-teal-500/8 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 14, 0], y: [0, 14, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[20%] h-[22rem] w-[22rem] rounded-full bg-cyan-400/6 blur-3xl"
        />
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(20,184,166,0.08), rgba(6,182,212,0.08), rgba(16,185,129,0.12))",
            backgroundSize: "200% 200%",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      </div>

      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="relative border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-white/5 px-4 py-1.5 text-sm text-emerald-200 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                MS in Autonomy · Purdue University
              </div>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                <span className="block bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(16,185,129,0.25)]">
                  Aarya Farheen
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                I am Aarya Farheen, a mechanical engineering graduate now focused on
                autonomy, robotics, and intelligent systems. My work connects
                manufacturing, embedded systems, machine learning, and autonomous
                navigation into practical engineering solutions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:faarya2003@gmail.com"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-950 shadow-2xl shadow-white/10 transition duration-300 hover:-translate-y-0.5"
                >
                  Contact Me
                </a>
                <a
                  href="https://github.com/kingofrichnight"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition duration-300 hover:border-emerald-400/40 hover:bg-white/10"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/aaryafarheen"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition duration-300 hover:border-emerald-400/40 hover:bg-white/10"
                >
                  LinkedIn
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Location
                  </div>
                  <div className="mt-3 text-lg font-medium text-white">
                    West Lafayette
                  </div>
                  <div className="mt-1 text-sm text-slate-400">Indiana, USA</div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Focus
                  </div>
                  <div className="mt-3 text-lg font-medium text-white">Autonomy</div>
                  <div className="mt-1 text-sm text-slate-400">
                    Robotics · ML · Systems
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Contact
                  </div>
                  <div className="mt-3 break-all text-lg font-medium text-white">
                    faarya2003@gmail.com
                  </div>
                  <div className="mt-1 text-sm text-slate-400">(765) 543-6812</div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-black/60 p-5">
                  <div className="text-sm text-slate-400">Education</div>
                  <div className="mt-3 text-xl font-semibold text-white">
                    Purdue University
                  </div>
                  <div className="mt-1 text-slate-300">MS in Autonomy</div>
                  <div className="mt-3 text-sm text-emerald-300">CGPA 3.33 / 4.0</div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/60 p-5">
                  <div className="text-sm text-slate-400">Previous Degree</div>
                  <div className="mt-3 text-xl font-semibold text-white">
                    VIT Vellore
                  </div>
                  <div className="mt-1 text-slate-300">
                    B.Tech Mechanical Engineering
                  </div>
                  <div className="mt-3 text-sm text-emerald-300">CGPA 9.37</div>
                </div>

                <div className="relative overflow-hidden rounded-3xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/10 to-transparent p-6 sm:col-span-2">
                  <div className="absolute -right-6 -top-6 text-6xl opacity-10">🏆</div>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🏆</div>
                    <div className="text-sm uppercase tracking-wider text-emerald-200">
                      Granted Patent
                    </div>
                  </div>
                  <div className="mt-3 text-lg font-semibold text-white">
                    Approved Patent
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Solar powered autonomous rover with AI-based crop analysis and
                    precision irrigation for sustainable agriculture.
                  </p>
                  <div className="mt-3 text-sm text-emerald-200">
                    Patent No. 202541119421 · Published 29-11-2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="mx-auto max-w-7xl px-6 py-16 lg:px-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Engineer with a systems mindset
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              I combine mechanical engineering fundamentals with autonomy, robotics,
              and applied software. My projects span product design, manufacturing,
              embedded development, machine learning, and robot navigation. I am
              especially interested in building systems that are practical,
              intelligent, and ready for real-world deployment.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">
              Technical Skills
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Tools I work with
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-400/15 bg-emerald-500/8 px-4 py-2 text-sm text-emerald-100 backdrop-blur-xl transition duration-300 hover:border-emerald-300/35 hover:bg-emerald-500/12"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="mx-auto max-w-7xl px-6 py-4 lg:px-10"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">
                Featured Projects
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Selected work with impact
              </h2>
            </div>
            <p className="text-slate-400">Robotics, autonomy, precision systems</p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="group rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-emerald-400/15 bg-emerald-500/8 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-emerald-200">
                    {project.period}
                  </span>
                  <span className="text-sm text-slate-400">{project.role}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center mt-4 px-4 py-2 rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-200 text-sm font-medium transition duration-300 hover:bg-emerald-500/20 hover:border-emerald-400/40"
                  >
                    🔗 View on GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="mx-auto max-w-7xl px-6 py-8 lg:px-10"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">
                More Projects
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Research and engineering work
              </h2>
            </div>
            <p className="text-slate-400">Design, ML, manufacturing, embedded systems</p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="rounded-[1.5rem] border border-white/10 bg-black/50 p-6 transition duration-300 hover:border-emerald-400/20 hover:bg-black/70"
              >
                <div className="text-sm text-emerald-300">{project.period}</div>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <div className="mt-2 text-sm text-slate-400">{project.role}</div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200 transition duration-300 hover:border-emerald-400/40 hover:bg-emerald-500/20"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="mx-auto max-w-7xl px-6 py-8 lg:px-10"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">
              Experience
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Industrial exposure
            </h2>
            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/60 p-6">
              <div className="text-xl font-semibold text-white">
                {experience.title}
              </div>
              <div className="mt-1 text-slate-400">{experience.location}</div>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                {experience.details.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.35)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">
              Achievements
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Highlights
            </h2>
            <div className="mt-6 space-y-4">
              {achievements.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-white/10 bg-black/60 p-5 text-sm leading-7 text-slate-300 transition duration-300 hover:border-emerald-400/15"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="mx-auto max-w-7xl px-6 py-8 lg:px-10"
      >
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.12),rgba(0,0,0,0.0),rgba(6,182,212,0.08))] p-8 backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">
                Education
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Academic foundation
              </h2>
              <div className="mt-6 space-y-4 text-slate-300">
                <div className="rounded-3xl border border-white/10 bg-black/55 p-5">
                  <div className="font-medium text-white">
                    Bachelor of Technology – Mechanical Engineering
                  </div>
                  <div className="mt-1 text-sm text-slate-400">
                    VIT Vellore · 2021–2025
                  </div>
                  <div className="mt-2 text-sm text-emerald-300">CGPA: 9.37</div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/55 p-5">
                  <div className="font-medium text-white">MS in Autonomy</div>
                  <div className="mt-1 text-sm text-slate-400">Purdue University</div>
                  <div className="mt-2 text-sm text-emerald-300">
                    CGPA: 3.33 / 4.0
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/60 p-6">
              <div className="text-sm uppercase tracking-[0.22em] text-emerald-300">
                Interests
              </div>
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                <div>Autonomous systems</div>
                <div>Robotics and ROS 2</div>
                <div>Manufacturing and automation</div>
                <div>Product and mechanical design</div>
                <div>IoT and intelligent engineering systems</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.footer
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="mx-auto max-w-7xl px-6 py-16 lg:px-10"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Let’s build something impactful
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 leading-8">
            Open to opportunities in robotics, autonomy, intelligent systems, and
            engineering innovation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:faarya2003@gmail.com"
              className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:-translate-y-0.5"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/aaryafarheen"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:border-emerald-400/40 hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
