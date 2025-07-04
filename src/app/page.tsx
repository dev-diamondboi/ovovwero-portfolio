"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiPython, SiOpenjdk, SiGit, SiJirasoftware, SiJavascript,
  SiReact, SiNextdotjs, SiTailwindcss, SiDotnet, SiMongodb,
  SiPostgresql, SiAmazon, SiGooglecloud, SiTypescript
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

const ParticlesBackground = dynamic(() => import("./components/Particles"), { ssr: false });

const techIcons = [
  { Icon: SiPython, name: "Python" },
  { Icon: SiOpenjdk, name: "OpenJDK" },
  { Icon: SiGit, name: "Git" },
  { Icon: SiJirasoftware, name: "Jira" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiReact, name: "React" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiTailwindcss, name: "Tailwind CSS" },
  { Icon: SiDotnet, name: ".NET" },
  { Icon: TbBrandCSharp, name: "C#" },
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: VscAzure, name: "Azure" },
  { Icon: SiAmazon, name: "Amazon" },
  { Icon: SiGooglecloud, name: "Google Cloud" },
  { Icon: SiTypescript, name: "TypeScript" }
];

export default function Home() {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: parallaxRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const { theme, setTheme } = useTheme();

  return (
    <main className="relative bg-gradient-to-b from-slate-50 to-white dark:from-[#0c0c0c] dark:to-[#1a1a1a] text-gray-900 dark:text-white min-h-screen w-full overflow-x-hidden font-sans">
      <ParticlesBackground />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-black/70 shadow-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl font-bold">Ovovwero Peter Unuavwodo</div>
          <nav className="space-x-8 text-lg font-semibold hidden md:flex items-center">
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Portfolio</a>
            <a href="#tools" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
            <a href="https://linkedin.com/in/ovovwero-peter-unuavwodo-a26422260" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
              <FaLinkedin className="inline text-3xl align-middle" />
            </a>
            <a href="https://github.com/dev-diamondboi" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
              <FaGithub className="inline text-3xl align-middle" />
            </a>
          </nav>
          <button
           onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
           className="ml-4 p-2 text-xl rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
           aria-label="Toggle Dark Mode"
           >
           {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={parallaxRef} className="relative flex flex-col-reverse md:flex-row items-center justify-between px-8 sm:px-16 py-32 max-w-7xl mx-auto">
        <motion.div style={{ y }} className="text-center md:text-left space-y-6 mt-8 md:mt-16">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hey, call me <span className="text-indigo-600 dark:text-indigo-400">Ovo</span> 👋
          </h1>
          <p className="text-lg max-w-xl leading-relaxed">
            Full Stack Software Engineer passionate about building accessible, scalable, and elegant web applications. My designs reflect excellence, professionalism, and creativity.
          </p>
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <a href="https://github.com/dev-diamondboi" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-5 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
              <FaGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/ovovwero-peter-unuavwodo-a26422260" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-5 py-3 rounded-full flex items-center gap-2 hover:bg-indigo-500 transition">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="/OvovweroUnuavwodo_SoftwareEngineer.pdf" download className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-5 py-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition">
              Download Resume
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <Image src="/memoji.png" alt="Memoji of Ovovwero" width={260} height={260} className="rounded-full shadow-2xl" />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-36 px-8 sm:px-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {[
            {
              src: "/FreshPlate - Homepage.jpg",
              title: "FreshPlate",
              description: "A recipe sharing platform where users can discover, share, and save delicious meals from around the world.",
              link: "https://freshplate-milb.onrender.com/"
            },
            {
              src: "/Agewell Homepage.jpg",
              title: "AgeWell",
              description: "A wellness solution for seniors with AI-assisted health tracking, caregiver features, and beautiful accessibility-first design.",
              link: "https://age-well-client.onrender.com/"
            },
            {
              src: "/oms.jpg",
              title: "Order Management System",
              description: "A .NET-based desktop system streamlining inventory and order tracking for retail businesses with reporting and customer management.",
              link: "https://github.com/dev-diamondboi/WPF-Projects"
            }
          ].map(({ src, title, description, link }, i) => (
            <motion.a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900 block hover:scale-[1.03] transition-transform duration-300"
            >
              <Image src={src} alt={`${title} Screenshot`} width={600} height={350} className="object-cover w-full h-[240px]" />
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-3 text-indigo-600 dark:text-indigo-400">{title}</h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-36 px-8 sm:px-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-20">Technologies & Tools</h2>
          <motion.div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-12 text-4xl text-indigo-600 dark:text-indigo-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}>
            {techIcons.map(({ Icon, name }, index) => (
              <motion.div key={index} className="flex justify-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Icon title={name} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-36 px-8 sm:px-16 bg-indigo-50 dark:bg-indigo-950 text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-12 max-w-xl mx-auto">
          Whether you're looking to collaborate, hire, or chat—I&apos;d love to hear from you.
        </p>
        <form action="https://formsubmit.co/2164528617caf063f1af35146f3fb7b5" method="POST" className="max-w-xl mx-auto grid gap-6 text-left">
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="name" required placeholder="Your Name" className="px-4 py-3 rounded bg-white dark:bg-gray-800 w-full" />
          <input type="email" name="email" required placeholder="Your Email" className="px-4 py-3 rounded bg-white dark:bg-gray-800 w-full" />
          <input type="text" name="subject" required placeholder="Subject" className="px-4 py-3 rounded bg-white dark:bg-gray-800 w-full" />
          <textarea name="message" required rows={5} placeholder="Your Message" className="px-4 py-3 rounded bg-white dark:bg-gray-800 w-full" />
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full w-full">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-12 text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Ovovwero Peter — Designed with vision. Built for impact.
      </footer>
    </main>
  );
}
