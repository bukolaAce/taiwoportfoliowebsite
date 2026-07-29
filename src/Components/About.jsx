import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsFileCode } from "react-icons/bs";
import { BsBraces } from "react-icons/bs";

import { Projects } from "./Projects";


const SKILL_GROUPS = [
  {
    label: "languages",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
    ],
  },
  {
    label: "frameworks",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "shadcn/ui", level: 80 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    label: "backend & tools",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Prisma", level: 80 },
      { name: "Swagger", level: 75 },
    ],
  },
];

const TABS = [
  { key: "projects", label: "projects.jsx", icon: BsFileCode },
  { key: "skills", label: "skills.json", icon: BsBraces },
];

const About = () => {
  const [active, setActive] = useState("projects");

  return (
    <div className="bg-[#0A0E14]" id="about">
      {/* editor-style tab bar — echoes the hero/project window chrome */}
      <div className="flex justify-center border-b border-[#1C2531] px-6">
        <div className="flex gap-1">
          {TABS.map(({ key, label, icon: Icon }) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`relative flex items-center gap-2 px-5 py-3.5 font-mono text-sm transition-colors ${
                  isActive
                    ? "text-[#E6EDF3]"
                    : "text-[#5B6472] hover:text-[#9DA7B3]"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
                {isActive && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute inset-x-0 -bottom-px h-[2px] bg-[#7EE0C3]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {active === "skills" ? (
            <div className="max-w-3xl px-6 py-10 mx-auto">
              {SKILL_GROUPS.map((group) => (
                <div key={group.label} className="mb-10 last:mb-0">
                  <p className="mb-4 font-mono text-xs text-[#7EE0C3]">
                    {group.label}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {group.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="rounded-lg border border-[#1C2531] bg-[#10161F] px-4 py-3"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-[#E6EDF3]">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[11px] text-[#5B6472]">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1 overflow-hidden rounded-full bg-[#1C2531]">
                          <motion.div
                            className="h-full rounded-full bg-[#7EE0C3]"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Projects />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default About;