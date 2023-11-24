/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

import image from "../images/socials/projects-ps-bg.gif";

// const imageAltText = "desktop with books and laptop";


const projectList = [
  {
    title: "Result Guide",
    description:
      " Exam preparation guide. This website provides detailed information and book recommendations for candidates taking all forms of Indian government and non-government exams.",
    url: "",
  },
  {
    title: "Virtual Book Cafe",
    description:
     "Developed and implemented an innovative Virtual Library platform utilizing real-world insights; streamlined book categorization process and facilitated seamless issuance on library cards, resulting in improved user experience and increased engagement.",
    url: "",
  },
  {
    title: "Automobile Website",
    description:
      "This website functions as a hub for regional and small start-up businesses, and it offers automobile products and vehicles that can be personalized for exciting excursions.",
    url: "https://kartikeysharma98281.github.io/project1.github.io/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt="image"
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
