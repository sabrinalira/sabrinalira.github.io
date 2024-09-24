import React from "react";
import getConfig from "next/config";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons from react-icons
import { FaGoogleScholar } from "react-icons/fa6";

const { publicRuntimeConfig } = getConfig();

export const Intro = ({ title, description, image, buttons, socialLinks }) => {
  return (
    <div className="bg-white">
      <div className="">
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
            <h1 className="text-primary fw-bold display-3 mt-4 intro-name">
              {title}
            </h1>
            <h2 className="text-muted" style={{ fontSize: "1.4rem" }}>
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
                <a target="_blank" rel="noreferrer" className="mx-2 mx-md-3">
                  {link.icon === "github" && (
                    <FaGithub className="responsive-icon" />
                  )}
                  {link.icon === "linkedin" && (
                    <FaLinkedin className="responsive-icon" />
                  )}
                  {link.icon === "googleScholar" && (
                    <FaGoogleScholar className="responsive-icon" />
                  )}
                  {/* email */}
                  {link.icon === "email" && (
                    <FaEnvelope className="responsive-icon" />
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
