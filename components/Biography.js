import React from "react";
import { Interest } from "./Interest";
import { interest } from "../config/config";
import { GoDownload } from "react-icons/go";

export const Biography = ({ title, content }) => {
  return (
    <div>
      <div className="mt-5 mt-md-0 pe-md-5">
        <div className="biography-section">
          <h1
            className="text-primary fw-bold text-md-start text-center mb-4"
            style={{ fontSize: "28px" }}
          >
            {title}
          </h1>
          {content.map((paragraph, index) => (
            <p
              key={index}
              style={{
                // fontSize: "16px",
                lineHeight: "1.5",
                // textAlign: "justify",
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="text-center text-md-start">
          {" "}
          <a
            href="./mr-hasan-cv.pdf"
            className="mt-3 mb-4 btn btn-primary my-1  btn-sm"
            download
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <GoDownload style={{ marginRight: "4px" }} /> Download CV
          </a>
        </div>
        <div className="row">
          <div className="col-12">
            <Interest title={interest.title} interests={interest.interests} />
          </div>
        </div>
      </div>
    </div>
  );
};
