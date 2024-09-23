import React from "react";
import getConfig from "next/config";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons
import { FaGoogleScholar } from "react-icons/fa6";

const { publicRuntimeConfig } = getConfig();

export const Intro = ({ title, description, image, buttons, socialLinks }) => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <img
              className="img-fluid my-3 card-image"
              width="250"
              height="250"
              src={image}
              alt="profile"
            />
          </div>

          <div className="col-12">
            <h1
              className="text-primary fw-bold display-3 mt-4"
              style={{ fontSize: "3rem" }}
            >
              {title}
            </h1>
            <h2 className="text-muted" style={{ fontSize: "1.5rem" }}>
              Software Engineer
            </h2>{" "}
          </div>

          <div className="col-12 mt-3">
            {description.map((value, index) => (
              <p key={index}>{value}</p>
            ))}
          </div>

          <div className="col-12">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.url}>
                <a target="_blank" rel="noreferrer" className="mx-3">
                  {link.icon === "github" && <FaGithub size={30} />}
                  {link.icon === "linkedin" && <FaLinkedin size={30} />}
                  {link.icon === "googleScholar" && (
                    <FaGoogleScholar size={30} />
                  )}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
