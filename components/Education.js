import React from "react";
import { FaGraduationCap } from "react-icons/fa";

export const Education = ({ title, schools }) => {
  return (
    <div id="educations" className="bg-secondary  py-4 py-md-5">
      <div className="container page-container">
        <div className="row">
          <div className="col-12 d-lg-none text-center mb-4">
            <h1 className="text-primary fw-bold">{title}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 d-none d-lg-flex align-items-start">
            <h1 className="text-primary fw-bold">{title}</h1>
          </div>

          <div className="col-lg-9 d-none d-lg-block">
            <div className="timeline">
              {schools.map((school, index) => (
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
                      <FaGraduationCap className="text-success" size={24} />
                    </div>

                    {index !== schools.length - 1 && (
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
                    <h3 className="text-primary">{school.degree}</h3>
                    <p style={{ marginBottom: "4px" }}>{school.institution}</p>
                    <p style={{ marginBottom: "4px" }}>GPA: {school.gpa}</p>

                    {school.courses.length > 0 && (
                      <div>
                        <p
                          className="fw-semibold"
                          style={{
                            marginBottom: "4px",
                            textDecoration: "underline",
                          }}
                        >
                          Relevant Courses
                        </p>
                        <p style={{ marginBottom: "0" }}>
                          {school.courses.join(", ")}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 d-lg-none">
            {schools.map((school, index) => (
              <div key={index} className="shadow p-3 mb-4 bg-white rounded">
                <h3 className="text-primary">{school.degree}</h3>
                <p style={{ marginBottom: "4px" }}>{school.institution}</p>
                <p style={{ marginBottom: "4px" }}>GPA: {school.gpa}</p>

                {school.courses.length > 0 && (
                  <div>
                    <p
                      className="fw-semibold"
                      style={{
                        marginBottom: "4px",
                        textDecoration: "underline",
                      }}
                    >
                      Relevant Courses
                    </p>
                    <p style={{ marginBottom: "0" }}>
                      {school.courses.join(", ")}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
