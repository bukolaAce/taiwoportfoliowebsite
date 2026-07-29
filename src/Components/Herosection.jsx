/* eslint-disable react/no-unescaped-entities */
// import { Slide } from "react-awesome-reveal";

import { motion } from "framer-motion";

import { GoArrowUpRight } from "react-icons/go";
import { IoMdArrowDown } from "react-icons/io";


// ---- content -------------------------------------------------------------

import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";


// ---- content -------------------------------------------------------------
// Kept to 3 lines: identity, role, proof-of-work. Stack detail now lives
// only in the Skills tab, so it isn't repeated here.

const SCRIPT = [
  { cmd: "whoami", out: "DevTee" },
  { cmd: "position --current", out: "Fullstack Software Developer" },
  { cmd: "projects --shipped", out: "6 in production — see below" },
];

// ---- typewriter hook -------------------------------------------------------

function useTypedScript(script, speed = 28, lineDelay = 380) {
  const [lines, setLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let acc = [];

    setLines([]);
    setDone(false);

    async function run() {
      for (let i = 0; i < script.length; i++) {
        const { cmd, out } = script[i];

        // type the command
        let typed = "";
        for (let c = 0; c < cmd.length; c++) {
          if (cancelled) return;
          typed += cmd[c];
          acc = [...acc.slice(0, i), { cmd: typed, out: "" }];
          setLines(acc);
          await new Promise((r) => setTimeout(r, speed));
        }

        await new Promise((r) => setTimeout(r, lineDelay));

        // reveal the output line
        acc = [...acc.slice(0, i), { cmd, out }];
        setLines(acc);
        await new Promise((r) => setTimeout(r, lineDelay));
      }
      if (!cancelled) setDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [script, speed, lineDelay]);

  return { lines, done };
}

// ---- component -------------------------------------------------------------

const Herosection = () => {
  const { lines, done } = useTypedScript(SCRIPT);

  return (
    <section className="relative md:min-h-screen overflow-hidden bg-[#0A0E14] text-[#E6EDF3] flex items-center py-10 px-6">
      {/* dot-grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(#1C2531 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* ambient glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, #7EE0C333, transparent 70%)" }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        {/* status pill */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1C2531] bg-[#10161F]/80 px-3 py-1 font-mono text-xs text-[#9DA7B3]"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7EE0C3] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7EE0C3]" />
          </span>
          available for new projects
        </motion.div>

        {/* terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-[#1C2531] bg-[#0D1319]/90 shadow-[0_0_60px_-15px_rgba(126,224,195,0.15)] backdrop-blur"
        >
          {/* title bar */}
          <div className="flex items-center gap-2 border-b border-[#1C2531] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            <span className="ml-3 font-mono text-xs text-[#5B6472]">
              devtee — hero.sh — 80×24
            </span>
          </div>

          {/* body */}
          <div className="px-6 py-8 font-mono text-sm sm:text-base leading-relaxed min-h-[220px]">
            {lines.map((l, i) => (
              <div key={i} className="mb-3">
                <div className="text-[#5B6472]">
                  <span className="text-[#7EE0C3]">➜</span> ~ {l.cmd}
                  {!l.out && i === lines.length - 1 && !done && (
                    <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-[#7EE0C3]" />
                  )}
                </div>
                {l.out && (
                  <div className="text-[#E6EDF3]">
                    {i === 0 ? (
                      <span className="text-2xl font-bold tracking-tight sm:text-3xl">
                        {l.out}
                      </span>
                    ) : (
                      l.out
                    )}
                  </div>
                )}
              </div>
            ))}
            {done && (
              <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-[#7EE0C3]" />
            )}
          </div>
        </motion.div>

        {/* CTAs — resume (primary, external) + jump to work (secondary, in-page) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={done ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-4 mt-8 font-mono text-sm"
        >
          <motion.a
            whileHover={{ y: -2, boxShadow: "0 0 24px 0 rgba(126,224,195,0.35)" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1LwDLx1MciYlD2t29dH1_D6_NPMIs4gur/view?usp=sharing"
            className="group flex items-center gap-2 rounded-lg border border-[#7EE0C3]/40 bg-[#7EE0C3]/10 px-5 py-3 text-[#7EE0C3] transition-colors hover:bg-[#7EE0C3]/20"
          >
            ./view-resume
            <GoArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          <motion.div whileHover={{ y: -2 }}>
            <Link
              to="#about"
              smooth
              className="group flex items-center gap-2 rounded-lg border border-[#1C2531] px-5 py-3 text-[#9DA7B3] transition-colors hover:border-[#2A3441] hover:text-[#E6EDF3]"
            >
              ./view-work
              <IoMdArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;