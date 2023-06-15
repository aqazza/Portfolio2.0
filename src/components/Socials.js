import React from "react";
import { Fade } from "react-reveal";

// import icons
import { social } from "../data";

const Socials = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return (
          <Fade key={index} duration={800} delay={index * 200} fraction={0.4}>
            <li className="flex justify-center items-center text-accent">
              <a className="text-base" href={item.href}>
                {item.icon}
              </a>
            </li>
          </Fade>
        );
      })}
    </ul>
  );
};

export default Socials;
