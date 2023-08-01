import React, { useRef } from "react";
import { Fade } from "react-reveal";
import Image from "../assets/img/about.webp";

const About = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <Fade left>
            <img
              className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
              src={Image}
              alt=""
            />
          </Fade>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <Fade right>
                <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                  Anas Qazza
                </h2>
              </Fade>
              <Fade right>
                <p className="mb-4 text-accent">
                  Freelance Fullstack Web Developer
                </p>
              </Fade>
              <Fade right>
                <hr className="mb-8 opacity-5" />
              </Fade>
              <Fade right>
                <p className="mb-8">
                  As a full stack web developer, I enjoy spending my free time
                  creating unique web projects and applications. I love
                  exploring the latest web technologies and using my
                  problem-solving skills to create user-friendly digital
                  experiences. My passion for design and development allows me
                  to seamlessly blend back-end and front-end work to create
                  polished applications. I am constantly refining my skills and
                  striving for excellence in my craft. <br />
                  <br />
                </p>
              </Fade>
            </div>
            <Fade right>
              <button
                className="btn btn-md bg-accent hover:bg-secondary-hover transition-all"
                onClick={() =>
                  window.open(
                    "https://www.canva.com/design/DAFp9dVvZng/RoIJN3mpnXovaJIFbpZ5DA/view?utm_content=DAFp9dVvZng&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
                    "_blank"
                  )
                }
              >
                Resume
              </button>
            </Fade>
          </div>
        </div>
      </div>

      <div ref={contactRef}>{/* Your Contactjs component content */}</div>
    </section>
  );
};

export default About;
