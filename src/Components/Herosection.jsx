/* eslint-disable react/no-unescaped-entities */
// import { Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
// import { AttentionSeeker } from "react-awesome-reveal";

const Herosection = () => {
  return (
    <>
      <div className="flex items-center   text-white  bg-[#0C151D] md:min-h-[15rem]  md:py-14 py-14">
        <div className="container mx-auto text-center">
          <Fade duration={2500} cascade triggerOnce={true}>
            <h1 className="mb-2 text-2xl font-bold">Hey, I'm</h1>

            <h1 className="mb-2 font-extrabold text-7xl">Taiwo</h1>

            <p className="mb-4 text-2xl font-bold"> Software Developer</p>
            <motion.a
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              target="_blank"
              href="https://drive.google.com/file/d/164iT4D9KyJT1_k57aushvw1ScRBo4P6f/view?usp=drive_link"
              className="btn btn-info"
            >
              Download CV
            </motion.a>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Herosection;

// {change ? <h1 className="text-red-500">hello</h1>: <h2 className="text-green-500">hi</h2>}
