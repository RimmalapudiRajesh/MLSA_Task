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
import image from "../images/winter_image.jpg";

const imageAltText = "winter season beautiful background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a CS student studying at Vasireddy Venkatadri Institute of Technology. I am passionate about solving problems in new creative ways to drive innovation and I enjoy creating unique and simplistic user frontend interfaces in creative ways.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python, Java, C Programmer",
  "Frontend Web Developement using React",
  "AWS Cloud Developer",
  "Figma Design",
  "Researcher",
  "Team Leader",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  " I thrived in three impactful AI & ML internships at AICTE, Teachnook, and 1stop, refining skills in Python, TensorFlow, PyTorch, data preprocessing, and model evaluation. I am committed to tech innovation, excelling in collaborative teams and problem-solving. Published researcher with Online Food Orders Through WhatsApp Automation Bot. A dedicated ML researcher under a PhD professor deployed a Python-powered WhatsApp Bot, reducing response time by 50%. Leading EventHub Website team, showcasing global events and job openings.Diverse skill sets include Python, Java, TensorFlow, and Django, backed by certifications from Coursera, Udemy, Wipro, AWS, Google, and Microsoft. Strong soft skills in time management, teamwork, adaptability and leadership. Merit scholarship recipient from the Andhra Pradesh Government. Active in social welfare camps and sports.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
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
