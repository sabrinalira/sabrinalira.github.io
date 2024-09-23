import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";

export const TeachingExperience = ({ title, experiences }) => {
  return (
    <div id="teachingExperience" className="bg-white py-5">
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
              {experiences.map((exp, index) => (
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
                      <FaChalkboardTeacher className="text-success" size={24} />
                    </div>

                    {index !== experiences.length - 1 && (
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
                    <h3 className="text-primary">
                      {exp.title} ({exp.year})
                    </h3>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shadow Box for Small Screens */}
          <div className="col-12 d-lg-none">
            {experiences.map((exp, index) => (
              <div key={index} className="shadow p-3 mb-4 bg-white rounded">
                <h3 className="text-primary">
                  {exp.title} ({exp.year})
                </h3>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
