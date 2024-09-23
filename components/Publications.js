import React from "react";
import { FaFilePdf, FaCode, FaDatabase, FaGlobe } from "react-icons/fa";

export const Publications = ({ title, publications }) => {
  return (
    <div id="publications" className="bg-white py-5">
      <div className="container page-container">
        <div className="row justify-content-center">
          {/* Title for Small Screens */}
          <div className="col-12 d-lg-none text-center mb-4">
            <h1 className="text-primary fw-bold">{title}</h1>
          </div>

          {/* Title for Large Screens */}
          <div className="col-lg-3 d-none d-lg-flex align-items-start mb-3">
            <h1 className="text-primary fw-bold">{title}</h1>
          </div>

          {/* Publications List */}
          <div className="col-lg-9 col-12">
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
              {publications.map((pub, index) => (
                <li key={index} className="mb-4">
                  <strong className="text-primary">{pub.title}</strong> -{" "}
                  <em>{pub.proceedings}</em>
                  <br />
                  <div
                    className="publication-links"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "15px",
                      fontSize: "0.9em",
                      marginTop: "10px",
                    }}
                  >
                    {pub.pdf && (
                      <a
                        href={pub.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center"
                      >
                        <FaFilePdf
                          style={{ fontSize: "1.2em", marginRight: "5px" }}
                        />
                        <span>PDF</span>
                      </a>
                    )}
                    {pub.doi && (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center"
                      >
                        <FaCode
                          style={{ fontSize: "1.2em", marginRight: "5px" }}
                        />
                        <span>DOI</span>
                      </a>
                    )}
                    {pub.dataset && (
                      <a
                        href={pub.dataset}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center"
                      >
                        <FaDatabase
                          style={{ fontSize: "1.2em", marginRight: "5px" }}
                        />
                        <span>Dataset</span>
                      </a>
                    )}
                    {pub.webpage && (
                      <a
                        href={pub.webpage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center"
                      >
                        <FaGlobe
                          style={{ fontSize: "1.2em", marginRight: "5px" }}
                        />
                        <span>Webpage</span>
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
