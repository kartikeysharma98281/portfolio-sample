/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/socials/About-bg-ps.gif";

// const imageAltText = "purple and blue abstract background";


const description =
  "I'm a frontend developer studying at Vellore Insitute of Technology , Bhopal. I enjoy creating unique and simplistic user interfaces in creative ways using ReactJs , Tailwind CSS and Figma.";


const skillsList = [
  "Figma",
  "ReactJs",
  "Tailwind CSS",
  "JavaScript",
  "c++",
  "Python",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my front-end developer experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt="image" />
      {/* <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      > */}
      <div
        style={{
          width: "50%",
          padding: "4rem",
          paddingBottom:"5rem",
          margin: "3rem auto",
          textAlign: "center",
          color:"white"
        }}
      > 
        <h2 style={{color: "white"}}>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
