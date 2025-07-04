import cardImage1 from "/images/TalentPro.jpg";

import cardImage2 from "/images/medlab.jpg";
import cardImage3 from "/images/labinsight.jpg";
import cardImage4 from "/images/Cheftee.jpg";
import cardImage5 from "/images/RecipeApp.jpg";

import cardImage6 from "/images/biliophilia.jpg";

// import { Link } from "react-router-dom";

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
  {
    image: cardImage1,
    title: "Card 1",
    Name: "Talent Pro",
    description:
      "Match Making Tech Talent With Opportunities through AI-Driven Precision",
    url: "https://talentpro.africa",
  },
  {
    image: cardImage2,
    title: "Card 2",
    Name: "A Laboratory Website",
    description: "Built with React And Tailwind Css ",
    url: "https://medlabapp.netlify.app",
  },
  {
    image: cardImage3,
    title: "Card 3",
    Name: "A Medical Blog",
    description:
      "A Blog which allows users to post content. Built with React,FireBase And Styled with Tailwind Css ",
    url: "https://lab-insights.vercel.app",
  },
  {
    image: cardImage4,
    title: "Card 4",
    Name: "ChefTee",
    description:
      "Your Ai cooking assistant. Built with React And Styled with Tailwind Css ",
    url: "https://cheftee.vercel.app",
  },
  {
    image: cardImage5,
    title: "Card 5",
    Name: "A Recipe App",
    description:
      "Fetching Data from An Api. Built with React And Styled with Tailwind Css ",
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
