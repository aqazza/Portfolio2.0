import React from "react";
import { Fade } from "react-reveal";

// import navigation data
import { navigation } from "../data";

// import Link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, idx) => {
          return (
            <Fade key={idx} delay={idx * 200} duration={500}>
              <li className="text-white hover:text-accent cursor-pointer">
                <Link
                  to={item.href}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="transition-all duration-300"
                >
                  {item.name}
                </Link>
              </li>
            </Fade>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
