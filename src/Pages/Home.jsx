import About from "../Components/About";
import Footer from "../Components/Footer";

import Herosection from "../Components/Herosection";

import Navbar from "../Components/Navbar";

import Contact from "../Components/Contact";

const Home = () => {
  return (
    <>
      <div className="bg-[#0C151D]">
        <Navbar  id="home"/>
        <Herosection  />
        <About />

        <Footer />
        <Contact />
      </div>
    </>
  );
};

export default Home;
