import "./portfolio.css";

import IMG1 from "../../assets/gbsvellore.png";
import IMG2 from "../../assets/nanandco.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "laptop service center",
      img: IMG1,
      description:
        "ASuccessfully designed and developed the website for GBS Systems & Service Pvt Ltd's Laptop Service Center in Vellore",
      technologies: "Html | Css | Js",
      link: "https://www.laptopservicecenterinvellore.com/",
    },
    {
      id: 2,
      title: "Thermoplastic road marking",
      img: IMG2,
      description:
        "Created a website for a  thermoplastic marking company, focusing on user-friendly design and seamless navigation.",
      technologies: "Html | Css | Js",
      link: "https://nanaandco.in/",
    },

  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
