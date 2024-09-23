import React from "react";
import { Interest } from "./Interest";
import { interest } from "../config/config";
import { GoDownload } from "react-icons/go";

export const Biography = ({ title, content }) => {
  return (
    <div className="mt-5 mt-md-0">
      <div className="biography-section">
        {/* Centering the title on small screens, left-aligned on medium and larger */}
        <h1
          className="text-primary fw-bold  text-md-left text-center mb-4"
          style={{ fontSize: "28px" }}
        >
          {title}
        </h1>
        {content.map((paragraph, index) => (
          <p
            key={index}
            style={{
              fontSize: "16px",
              lineHeight: "1.5",
              textAlign: "justify",
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
      <div className="text-center">
        <a
          href="/path/to/your/cv.pdf"
          className="mt-3 mb-4 btn btn-primary my-1"
          download
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          <GoDownload style={{ marginRight: "4px" }} /> Download CV
        </a>
      </div>
      <div className="row">
        <div className="col-12">
          <Interest interest={interest} />
        </div>
      </div>
    </div>
  );
};
