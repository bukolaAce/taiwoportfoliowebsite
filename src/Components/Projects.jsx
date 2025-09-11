import cardImage1 from "/images/smegear.jpg";
import cardImage2 from "/images/TalentPro.jpg";
import cardImage3 from "/images/labinsight.jpg";
import cardImage4 from "/images/medlab.jpg";
import cardImage5 from "/images/RecipeApp.jpg";
import cardImage6 from "/images/biliophilia.jpg";



// eslint-disable-next-line react/prop-types
const Card = ({ image, description, Name, url }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <>
      {/* <a href={url} target="_blank"> */}

      <div
        className="relative overflow-hidden text-center cursor-pointer group card sm:w-96 w-[22rem] bg-primary text-primary-content rounded-none "
        onClick={handleClick}
        target="_blank"
      >
        <img
          src={image}
          alt=""
          className="w-full h-full transition-transform transform group-hover:scale-105"
        />
        <div className="absolute inset-0 transition-opacity bg-black opacity-0 group-hover:opacity-80">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center ">
              <h2 className="text-2xl font-bold text-white">{Name}</h2>
              <p className="text-sm font-bold text-white">{description}</p>
            </div>
          </div>
        </div>
      </div>
      {/* </a> */}

      {/* </a> */}
    </>
  );
};

const cardsData = [
  { image: cardImage1,  title: "Card 1",Name: "SmeGear",  description:
      "Scalable platform empowering instructors to teach and students to learn with ease. Built with NextJs And Tailwind Css ",
    url: "https://smegear.vercel.app",},
  {
    image: cardImage2,
    title: "Card 2",
    Name: "Talent Pro",
    description:
      "AI-powered platform connecting top tech talent with the right opportunities.",
    url: "https://talentpro.africa",
  },
   {
    image: cardImage3,
    title: "Card 3",
    Name: "A Medical Blog",
    description:
      "Dynamic platform for medical professionals to share knowledge, insights, and expertise. Built with React And Tailwind Css ",
    url: "https://lab-insights.vercel.app",
  },
  {
    image: cardImage4,
    title: "Card 4",
    Name: "Effective Health and Wellness",
    description: "Medical Consultation Booking App. Built with React And Tailwind Css ",
    url: "https://medlabapp.netlify.app",
  },
  {
    image: cardImage5,
    title: "Card 5",
    Name: "A Recipe App",
    description:
      "Unlock a world of flavors, step-by-step guidance, and delightful inspirations. Built with React And Tailwind Css ",
    url: "http://recipeapp0042.netlify.app",
  },

  {
    image: cardImage6,
    title: "Card 5",
    Name: "Bibliophilia",
    description: "A Book Library.Built with React And Tailwind Css ",
    url: "https://bibliophilia.netlify.app",
  },
];

export const Projects = () => {
  return (
    <div className="grid md:max-w-[53rem] sm:max-w-[55rem] lg:gap-8 gap-6 p-6 mx-auto md:gap-5 md:grid-cols-2 md:w-2/3  justify-center ">
      {cardsData.map((card, index) => (
        <Card className="rounded-xl" key={index} {...card} />
      ))}
    </div>
  );
};
