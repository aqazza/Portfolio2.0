import React from "react";
import { Fade } from "react-reveal";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <Fade top>
              <p className="text-lg text-accent text-md mb-[22px]">
                Hey, I'm Anas! 👋
              </p>
            </Fade>
            <Fade bottom>
              <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                I Build & Design <br /> Web Interfaces.
              </h1>
            </Fade>
            <Fade bottom>
              <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
                My name is Anas, and I specialize in building and designing web
                interfaces. I'm passionate about creating visually appealing and
                user-friendly websites that leave a lasting impression. Let's
                collaborate and bring your digital vision to life!
              </p>
            </Fade>
            <Fade bottom>
              <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all">
                <a
                  href="https://www.linkedin.com/in/anas-qazza/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Work with me
                </a>
              </button>
            </Fade>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
