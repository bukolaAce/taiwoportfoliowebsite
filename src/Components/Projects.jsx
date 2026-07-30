import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { GoArrowUpRight } from "react-icons/go";

// Swap these back to your local imports, e.g.:
// import cardImage1 from "/images/TalentPro.jpg";
// Using placeholders here so the section previews without your asset paths.
const cardImage1 = "/images/Labinview.png";
const cardImage2 = "/images/FlexoAi.png";
const cardImage3 = "/images/TalentPro.jpg";
const cardImage4 = "/images/smegear.jpg";
const cardImage5 = "/images/medlab.jpg";
const cardImage6 = "/images/RecipeApp.jpg";
const cardImage7 = "/images/biliophilia.jpg";

// ---- helpers ---------------------------------------------------------------

// Pulls a tech list out of descriptions like "...Built with Next.js, TypeScript"
function extractStack(description) {
  const match = description.match(/built with (.+?)\.?$/i);
  if (!match) return [];
  return match[1]
    .replace(/\band\b/gi, ",")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ---- data --------------------------------------------------------------

const cardsData = [
  {
    image: cardImage1,
    Name: "LabInView",
    description:
      "Dynamic platform for medical professionals to share knowledge, insights, and expertise. Built with Next.js, TypeScript, Tailwind CSS, Neon Database",
    url: "https://labinview.com",
  },
  {
    image: cardImage2,
    Name: "Flexo Ai",
    description:
      "A personalized training program built by AI, tailored to your goals, experience, and schedule. Built with Next.js, TypeScript, Tailwind CSS, Neon Database",
    url: "https://flexo-ai-v1.vercel.app/",
  },
  {
    image: cardImage3,
    Name: "Talent Pro",
    description:
      "AI-powered platform connecting top tech talent with the right opportunities. Built with Next.js, TypeScript, Tailwind CSS, Node Js",
    url: "https://talentpro-beta.vercel.app/",
  },
  
  {
    image: cardImage4,
    Name: "SmeGear",
    description:
      "Scalable platform empowering instructors to teach and students to learn with ease. Built with Next.js, TypeScript, Tailwind CSS, Node Js",
    url: "https://smegear.vercel.app",
  },
  {
    image: cardImage5,
    Name: "Effective Health and Wellness",
    description:
      "Medical consultation booking app. Built with React, Tailwind CSS",
    url: "https://medlabapp.netlify.app",
  },
  {
    image: cardImage6,
    Name: "A Recipe App",
    description:
      "Unlock a world of flavors, step-by-step guidance, and delightful inspirations. Built with React, Tailwind CSS",
    url: "http://recipeapp0042.netlify.app",
  },
  {
    image: cardImage7,
    Name: "Bibliophilia",
    description: "A book library. Built with React, Tailwind CSS",
    url: "https://bibliophilia.netlify.app",
  },
];

// ---- card --------------------------------------------------------------

const Card = ({ image, description, Name, url }) => {
  const stack = extractStack(description);
  const path = `~/projects/${slugify(Name)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group block overflow-hidden rounded-xl border border-[#1C2531] bg-[#10161F] transition-colors hover:border-[#2A3441]"
    >
      {/* fake window title bar — echoes the hero terminal */}
      <div className="flex items-center gap-2 border-b border-[#1C2531] px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#FF5F56]/70" />
        <span className="h-2 w-2 rounded-full bg-[#FFBD2E]/70" />
        <span className="h-2 w-2 rounded-full bg-[#27C93F]/70" />
        <span className="ml-2 truncate font-mono text-[11px] text-[#5B6472]">
          {path}
        </span>
        <GoArrowUpRight className="ml-auto h-3.5 w-3.5 flex-shrink-0 text-[#5B6472] transition-all group-hover:text-[#7EE0C3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      {/* image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={Name}
          className="h-full w-full object-cover grayscale-[40%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-transparent to-transparent opacity-70" />
      </div>

      {/* body */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#E6EDF3]">{Name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[#9DA7B3] line-clamp-2">
          {description.replace(/built with .+$/i, "").trim()}
        </p>

        {stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#1C2531] bg-[#0D1319] px-2.5 py-1 font-mono text-[11px] text-[#7EE0C3]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  Name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

// ---- section --------------------------------------------------------------

export const Projects = () => {
  return (
    <section className="bg-[#0A0E14] px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-xs text-[#7EE0C3]">$ ls ./projects</p>
          <h2 className="mt-2 text-3xl font-bold text-[#E6EDF3] sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-2 max-w-xl text-sm text-[#7D8590]">
            A handful of shipped, production products — click through to see
            them running live.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cardsData.map((card) => (
            <Card key={card.Name} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;