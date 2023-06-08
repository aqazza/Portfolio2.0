import React from "react";

const Project = ({ item, description }) => {
  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div className="mb-8">
        <a href={item.link}>
          <img className="rounded-2xl" src={item.image} alt="" />
        </a>
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">
        <a href={item.link}>{item.name}</a>
      </h3>
      <p className="text-base max-w-md">{description}</p>
    </div>
  );
};

export default Project;
