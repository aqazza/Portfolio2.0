import React from "react";
import { Fade } from "react-reveal";

// import components
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <Fade top>
            <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
              My latest projects
            </h2>
          </Fade>
          <Fade bottom>
            <p className="subtitle">
              Each of these projects demonstrates my commitment to delivering
              high-quality results and meeting the unique requirements of my
              clients.
            </p>
          </Fade>
        </div>
        <Fade>
          <Projects />
        </Fade>
      </div>
    </section>
  );
};

export default Portfolio;
