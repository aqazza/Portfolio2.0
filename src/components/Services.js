import React from "react";
import { Fade } from "react-reveal";
import { services } from "../data";

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <Fade top>
            <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
              What I do for clients
            </h2>
          </Fade>
          <p className="subtitle">
            I provide a range of services to meet the needs of my clients. From
            web design and development to branding and SEO, I help businesses
            establish a strong online presence and reach their target audience
            effectively.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <Fade key={index} delay={index * 200} distance="20px">
                <div className="bg-secondary p-6 rounded-2xl">
                  <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                    {icon}
                  </div>
                  <h4 className="text-xl font-medium mb-2">{name}</h4>
                  <p>{description}</p>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
