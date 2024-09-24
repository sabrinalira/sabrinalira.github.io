import React from "react";
import Link from "next/link";

import { FaEnvelope, FaLinkedin } from "react-icons/fa"; // Import the email icon

export const Contact = ({ title, description, buttons }) => {
  return (
    <div id="contacts" className="bg-white py-4 py-md-5 px-5">
      <div className="container page-container">
        <div className="row">
          <div className="col-md-3 d-flex align-items-start">
            <h1 className="text-primary fw-bold">{title}</h1>
          </div>

          <div className="col-md-9">
            <div>
              <p>{description}</p>
              <div className="d-flex flex-wrap">
                {buttons.map((value, index) =>
                  value.isPrimary ? (
                    <Link key={index} href={value.link}>
                      <a className="btn btn-primary my-1 d-flex align-items-center btn-sm">
                        <FaEnvelope className="me-2" />
                        {value.title}
                      </a>
                    </Link>
                  ) : (
                    <Link key={index} href={value.link}>
                      <a className="btn btn-outline-primary my-1 mx-3 d-flex align-items-center btn-sm">
                        <FaLinkedin className="me-2" />
                        {value.title}
                      </a>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
