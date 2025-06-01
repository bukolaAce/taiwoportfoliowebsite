import { useState } from "react";
// import { Slide } from "react-awesome-reveal";
import { Projects } from "./Projects";
const About = () => {
  const [change, setChange] = useState(true);

  // const changeHandler = () => {
  //   setChange(!change);
  // };
  return (
    <>
    <div className="min-h-[10rem]"  >
    <div className="flex justify-center mx-auto space-x-10 " id="about">
        <button
          onClick={() => setChange(true)}
          className={
            change
              ? "text-center p-4 font-bold rounded text-white bg-[#171F26]"
              : " p-4 text-white font-bold rounded bg-[#0C151D]"
          }
        >
          PROJECTS
        </button>
        <button
          onClick={() => setChange(false)}
          className={
            !change
              ? "text-center p-4 text-white rounded bg-[#171F26]   font-bold"
              : " p-4 text-white font-bold rounded bg-[#0C151D] "
          }
        >
          SKILLS
        </button>
      </div>

      {/*  */}
      {!change ? (
        <div className=" font-[sans-serif] text-white bg-[#0C151D]  flex py-5  px-4">
          {/* <Slide duration={1000} cascade> */}
          <div className="max-w-xl mx-auto">
            <div className="grid mt-5 text-center md:grid-cols-3 md:gap-6 max-md:gap-10 max-md:justify-center">
              <div className="max-w-[350px] h-auto rounded-md">
                <div className="flex flex-col items-center">
                  <img
                    src="./images/html.png"
                    className="border border-white shadow-xl h-52 w-52 md:h-32 md:w-32 rounded-xl"
                  />
                 
                </div>
              </div>
              <div className="max-w-[350px] h-auto rounded-md">
                <div className="flex flex-col items-center">
                  <img
                    src="./images/css-logo.png"
                    className="border border-white shadow-xl h-52 w-52 md:h-32 md:w-32 rounded-xl"
                  />
                 
                </div>
              </div>
              <div className="max-w-[350px] h-auto rounded-md">
                <div className="flex flex-col items-center">
                  <img
                    src="./images/js.png"
                    className="border border-white shadow-xl h-52 w-52 md:h-32 md:w-32 rounded-xl"
                  />
                 
                </div>
              </div>
              <div className="max-w-[350px] h-auto rounded-md">
                <div className="flex flex-col items-center">
                  <img
                    src="./images/react.png"
                    className="border border-white shadow-xl h-52 w-52 md:h-32 md:w-32 rounded-xl"
                  />
                 
                </div>
              </div>
              <div className="max-w-[350px] h-auto rounded-md">
                <div className="flex flex-col items-center">
                  <img
                    src="./images/tailwind.png"
                    className="border border-white shadow-xl h-52 w-52 md:h-32 md:w-32 rounded-xl"
                  />
                  
                </div>
              </div>
              <div className="max-w-[350px] h-auto rounded-md">
                <div className="flex flex-col items-center">
                  <img
                    src="./images/nextjs.jpg"
                    className="border border-white shadow-xl h-52 w-52 md:h-32 md:w-32 rounded-xl"
                  />
                 
                </div>
              </div>
            </div>
          </div>
          {/* </Slide> */}
        </div>
      ) : <Projects/>}

      {/* PROJECTS */}
    </div>
     
    </>
  );
};

export default About;
