import React from "react";
import { FaGithub } from "react-icons/fa";

export const Card = ({ title, description, github, timePeriod }) => {
  return (
    <div
      className="card p-3 d-flex flex-column justify-content-between"
      style={{
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        minHeight: "200px",
      }}
    >
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="text-primary">{title}</h4>
          <p className="text-dark" style={{ fontStyle: "italic", margin: "0" }}>
            {timePeriod}
          </p>
        </div>
        <p className="text-dark">{description}</p>
      </div>
      <div className="d-flex justify-content-start mt-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              fontSize: "0.8rem",
            }}
          >
            <FaGithub style={{ fontSize: "1.4em", marginRight: "5px" }} />
            <span>GitHub</span>
          </a>
        )}
      </div>
    </div>
  );
};

export const Projects = ({ title, cards }) => {
  return (
    <div id="projects" className="bg-primary py-4 py-md-5">
      <div className="container page-container">
        <div className="row">
          <div className="col-12 d-lg-none text-center mb-4">
            <h1 className="text-secondary fw-bold">{title}</h1>
          </div>

          {/* Title for Large Screens */}
          <div className="col-lg-3 d-none d-lg-flex align-items-start mb-3">
            <h1 className="text-secondary fw-bold">{title}</h1>
          </div>

          <div className="col-md-9">
            <div className="row">
              {cards.map((project, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <Card
                    title={project.title}
                    description={project.description}
                    github={project.github}
                    timePeriod={project.timePeriod}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
