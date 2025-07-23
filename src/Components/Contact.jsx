import {
  faGithub,
  faTwitter,
  faWhatsappSquare,
  
} from "@fortawesome/free-brands-svg-icons";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Contact = ({ openModal, handleModal }) => {
  const [input, setInput] = useState({
    Name: "",
    Email: "",
    TextArea: "",
  });

  // const displayName =input.Name&&input.Email&&input.Email

  const [Message, setMessage] = useState("");
  const [Colour, setColour] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(name, value);
  };
  const handleClick = (e) => {
    const success = "Message Received ";
    const error = "Enter a Message";
    e.preventDefault();
    if (input.Name && input.Email && input.TextArea) {
      setMessage(success);
      setColour(true);
    } else {
      setMessage(error);
      setColour(false);
    }
    setTimeout(() => {
      setMessage("");
    }, 5000);
    setInput({ Name: "", Email: "", TextArea: "" });
  };

  return (
    <>
      {openModal ? (
        <div
          id="contact"
          className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
        >
          <div className="relative flex justify-center max-w-lg rounded-md shadow-lg bg-[#0C151D] ">
            <div className="py-5 rounded-md bg-[#0C151D] px-7 max-lg:col-span-full sm:max-w-md">
              <div className="  w-3.5 cursor-pointer shrink-0 fill-black hover:fill-red-500 float-right ">
                <button className="text-xl text-white" onClick={handleModal}>
                  <FontAwesomeIcon icon={faX} />
                </button>
              </div>

              <h4 className="text-xl font-semibold text-white">Contact Me</h4>

              <div className="flex justify-center m-4 mx-auto text-center rounded-xl">
                {Colour ? (
                  <h1 className="text-[1.1rem] font-bold text-green-400 ">
                    {Message}
                  </h1>
                ) : (
                  <h1 className="text-[1.1rem] font-bold text-red-500">
                    {Message}
                  </h1>
                )}
              </div>
              <div className="flex items-center justify-center mt-5 space-x-6">
                <a href="https://github.com/bukolaAce">
                  {" "}
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-[2.3rem] text-white"
                  />
                </a>
                <a href="https://api.whatsapp.com/send?phone=+2348161195352&text=Hello, more information!">
                  <FontAwesomeIcon
                    className="text-[2.3rem] text-green-500"
                    icon={faWhatsappSquare}
                  />
                </a>

                <a href="https://www.twitter.com/bukoolarAce">
                  <FontAwesomeIcon
                    className="text-[2.3rem] text-blue-500"
                    icon={faTwitter}
                  />
                </a>
                <a href="olasupobukolagmail.com">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-[2.3rem] text-red-500"
                  />
                </a>
              </div>
              <form className="mt-5 space-y-3">
                <input
                  name="Name"
                  type="text"
                  placeholder="Name"
                  className="w-full h-10 px-6 text-lg bg-white rounded-md outline-none"
                  onChange={handleChange}
                  value={input.Name}
                />
                <input
                  name="Email"
                  type="email"
                  placeholder="Email"
                  className="w-full h-10 px-6 text-lg bg-white rounded-md outline-none"
                  onChange={handleChange}
                  value={input.Email}
                />
                <textarea
                  type="Textarea"
                  placeholder="Message"
                  rows="6"
                  className="w-full px-6 pt-3 text-lg bg-white rounded-md outline-none"
                  name="TextArea"
                  onChange={handleChange}
                  value={input.TextArea}
                ></textarea>
              </form>
              <button
                type="button"
                className="text-[#0C151D]  bg-blue-800  hover:bg-blue-900 hover:text-white rounded-md font-bold text-[1rem] px-6 py-3 block mt-4 w-full"
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Contact;
