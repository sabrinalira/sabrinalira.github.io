import React from "react";
import { FaBriefcase } from "react-icons/fa";
export const ResearchExperience = ({ title, companies }) => {
  return (
    <div id="researchExperience" className="bg-secondary py-5">
      <div className="container page-container">
        {/* Title for Small Screens */}
        <div className="row">
          <div className="col-12 d-lg-none text-center mb-4">
            <h1 className="text-primary fw-bold">{title}</h1>
          </div>
        </div>

        <div className="row">
          {/* Title for Large Screens */}
          <div className="col-lg-3 d-none d-lg-flex align-items-start">
            <h1 className="text-primary fw-bold">{title}</h1>
          </div>

          {/* Timeline for Large Screens */}
          <div className="col-lg-9 d-none d-lg-block">
            <div className="timeline">
              {companies.map((job, index) => (
                <div
                  key={index}
                  className="timeline-item mb-4 d-flex"
                  style={{ paddingBottom: "0", marginBottom: "0" }}
                >
                  <div
                    className="d-flex flex-column align-items-center"
                    style={{ width: "40px", position: "relative" }}
                  >
                    <div className="timeline-icon">
                      <FaBriefcase className="text-success" size={24} />
                    </div>

                    {index !== companies.length - 1 && (
                      <div
                        style={{
                          flexGrow: 1,
                          width: "2px",
                          backgroundColor: "#e0e0e0",
                        }}
                      ></div>
                    )}
                  </div>

                  <div
                    className="timeline-content"
                    style={{ paddingLeft: "20px" }}
                  >
                    <h3 className="text-primary">{job.position}</h3>
                    <p style={{ marginBottom: "4px" }}>{job.company}</p>
                    <p style={{ marginTop: "0", marginBottom: "10px" }}>
                      {job.date}
                    </p>

                    <ul>
                      {job.description.map((descItem, descIndex) => (
                        <li key={descIndex}>{descItem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shadow Box for Small Screens */}
          <div className="col-12 d-lg-none">
            {companies.map((job, index) => (
              <div key={index} className="shadow p-3 mb-4 bg-white rounded">
                <h3 className="text-primary">{job.position}</h3>
                <p style={{ marginBottom: "4px" }}>{job.company}</p>
                <p style={{ marginTop: "0", marginBottom: "10px" }}>
                  {job.date}
                </p>

                <ul>
                  {job.description.map((descItem, descIndex) => (
                    <li key={descIndex}>{descItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
