import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  faGithub,
  faSquareWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdClose } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Contact = ({ openModal, handleModal }) => {
  const [input, setInput] = useState({ Name: "", Email: "", TextArea: "" });
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && handleModal(e);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.Name || !input.Email || !input.TextArea) {
      setStatus("error");
      setMessage("fill in every field before sending.");
      setTimeout(() => setMessage(""), 5000);
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: input.Name,
          email: input.Email,
          message: input.TextArea,
        }),
      });

      if (!res.ok) throw new Error("request failed");

      setStatus("success");
      setMessage("message sent — I'll reply within a day or two.");
      setInput({ Name: "", Email: "", TextArea: "" });
    } catch (err) {
      setStatus("error");
      setMessage("something went wrong — try again shortly.");
    } finally {
      setSending(false);
      setTimeout(() => setMessage(""), 5000);
    }
  };

  const socials = [
    { icon: faGithub, href: "https://github.com/bukolaAce", label: "GitHub" },
    {
      icon: faSquareWhatsapp,
      href: `https://api.whatsapp.com/send?phone=+2348161195352&text=${encodeURIComponent(
        "Hello, more information!"
      )}`,
      label: "WhatsApp",
    },
    { icon: faXTwitter, href: "https://www.twitter.com/bukoolarAce", label: "X" },
    { icon: faEnvelope, href: "mailto:olasupobukola@gmail.com", label: "Email" },
  ];

  return (
    <AnimatePresence>
      {openModal && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center overflow-auto bg-black/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleModal}
        >
          <motion.div
            id="contact"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-md rounded-xl border border-[#1C2531] bg-[#0D1319] shadow-[0_0_60px_-15px_rgba(126,224,195,0.15)]"
          >
            {/* title bar — same chrome as the rest of the site */}
            <div className="flex items-center gap-2 border-b border-[#1C2531] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
              <span className="ml-2 font-mono text-xs text-[#5B6472]">
                contact.sh
              </span>
              <button
                onClick={handleModal}
                aria-label="Close contact form"
                className="ml-auto text-[#5B6472] transition-colors hover:text-[#E6EDF3]"
              >
                <MdClose className="w-4 h-4" />
              </button>
            </div>

            <div className="px-6 py-6">
              <p className="font-mono text-xs text-[#7EE0C3]">$ contact --send</p>
              <h4 className="mt-1 text-xl font-bold text-[#E6EDF3]">
                Let's build something
              </h4>

              {/* social row */}
              <div className="flex justify-center gap-5 mt-5">
                {socials.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-[#7D8590] transition-colors hover:text-[#7EE0C3]"
                  >
                    <FontAwesomeIcon icon={icon} className="text-2xl" />
                  </a>
                ))}
              </div>

              <div className="my-5 h-px bg-[#1C2531]" />

              <form className="space-y-3" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="mb-1 block font-mono text-xs text-[#5B6472]">
                    name
                  </span>
                  <input
                    name="Name"
                    type="text"
                    placeholder="Ada Lovelace"
                    className="w-full rounded-lg border border-[#1C2531] bg-[#10161F] px-4 py-2.5 text-sm text-[#E6EDF3] outline-none placeholder:text-[#4A5260] focus:border-[#7EE0C3]/50"
                    onChange={handleChange}
                    value={input.Name}
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block font-mono text-xs text-[#5B6472]">
                    email
                  </span>
                  <input
                    name="Email"
                    type="email"
                    placeholder="ada@example.com"
                    className="w-full rounded-lg border border-[#1C2531] bg-[#10161F] px-4 py-2.5 text-sm text-[#E6EDF3] outline-none placeholder:text-[#4A5260] focus:border-[#7EE0C3]/50"
                    onChange={handleChange}
                    value={input.Email}
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block font-mono text-xs text-[#5B6472]">
                    message
                  </span>
                  <textarea
                    name="TextArea"
                    placeholder="What are you building?"
                    rows="4"
                    className="w-full resize-none rounded-lg border border-[#1C2531] bg-[#10161F] px-4 py-2.5 text-sm text-[#E6EDF3] outline-none placeholder:text-[#4A5260] focus:border-[#7EE0C3]/50"
                    onChange={handleChange}
                    value={input.TextArea}
                  />
                </label>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-lg bg-[#7EE0C3] py-3 font-mono text-sm font-semibold text-[#0A0E14] transition-colors hover:bg-[#8FEBD1] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "sending..." : "send message"}
                </button>
              </form>

              {/* status line — reads like terminal output */}
              <div className="mt-4 min-h-[1.25rem] text-center font-mono text-xs">
                {message && (
                  <span
                    className={
                      status === "success" ? "text-[#7EE0C3]" : "text-[#F2836B]"
                    }
                  >
                    {status === "success" ? "✓ " : "✗ "}
                    {message}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Contact;