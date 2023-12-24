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

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/ai-generated.jpg";

const imageAltText = "human and robert image face to face";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Online Food Order Through WhatsApp Automation Bot",
    description:
      "Deployed a Python powered WhatsApp Bot, integrated with the Twilio API and MongoDB for seamless data storage retrieval; optimized customer inquiries, resulting in a 50% reduction in response time and a 18% increase in customer satisfaction ratings.Conducted pre- and post-implementation surveys to assess customer satisfaction levels, achieving a remarkable 10% improvement, while also analyzing customer-bot interactions, leading to a significant 40% boost in engagement and interaction frequency.",
    url: "https://github.com/RimmalapudiRajesh/automate-whatsapp.git",
  },
  {
    title: "Restaurant Review",
    description:
      "Based on the Restaurant Reviews we can determine the which is Positive and Negitive Reviews.Spearheaded a comprehensive Natural Language Processing (NLP) initiative by contributing to sentiment analysis of restaurant reviews, resulting ina 95% accuracy rate in sentiment classification.",
    url: "https://github.com/RimmalapudiRajesh/NLP-Project-Restaurant-Reviews.git",
  },
  {
    title: "Wireless Sound Control",
    description:
      "Orchestrated a groundbreaking project that harnessed wireless sound control through finger sign gestures, achieving a remarkable 15% increase in user satisfaction compared to traditional volume adjustments.",
    url: "https://github.com/RimmalapudiRajesh/WirelessSooundControl.git",
  },
  {
    title: "Caption Generated ",
    description:
      "Based on the given image it can generate the brief caption about the picture.",
    url: "https://github.com/RimmalapudiRajesh/Caption-Generator-Project.git",
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
            alt={imageAltText}
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
