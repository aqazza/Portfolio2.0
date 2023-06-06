/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import data
import { projectsData } from "../data";
import { projectsNav } from "../data";

// import components
import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all", description: "" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.description.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    const selectedProject = projectsNav[index];
    const descriptions = selectedProject.description || [];
    const images = selectedProject.images || [];

    const mappedDescriptions = images.map((image, i) => {
      return descriptions[i] || ""; // Pair each description with the corresponding image
    });

    setItem({
      name: selectedProject.name,
      description: mappedDescriptions,
      images: images,
    });
    setActive(index);
  };

  return (
    <div>
      {/* projects nav */}
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* carousel */}
      {item.images && (
        <div className="max-w-4xl mx-auto">
          <Slider>
            {item.images.map((image, index) => (
              <div key={index} className="relative overflow-hidden w-96 h-96">
                <img
                  src={image}
                  alt={`Project Image ${index}`}
                  className="w-full h-full object-contain rounded-xl"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gray-900 bg-opacity-75 text-white p-4">
                  <p className="text-sm">{projectsNav[index].description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* projects */}
      <section className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {projects.map((item) => {
          return (
            <Project
              item={{ ...item, description: item.description || item.name }}
              key={item.id}
            />
          );
        })}
      </section>

      {/* project description */}
      <div className="max-w-md mx-auto text-center mb-12">
        <p className="text-gray-500">{item.description}</p>
      </div>
    </div>
  );
};

export default Projects;
