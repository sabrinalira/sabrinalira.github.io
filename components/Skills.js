import React from "react";
import {
  FaPython,
  FaJsSquare,
  FaDocker,
  FaReact,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa"; // FontAwesome icons
import {
  SiNumpy,
  SiPandas,
  SiJupyter,
  SiPostgresql,
  SiRedis,
  SiNextdotjs,
  SiNestjs,
  SiScikitlearn,
  SiMatplotlib,
  SiGnubash,
} from "react-icons/si"; // SimpleIcons for some libraries/tools
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNodejs } from "react-icons/tb";
import { RiJavaLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { TbCompassOff } from "react-icons/tb";

// Custom C++ SVG Icon
const CppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="20px"
    height="20px"
    fill="#365B6D"
    style={{ verticalAlign: "left", marginRight: "5px" }}
  >
    <path d="M 43.910156 12.003906 L 27.070313 2.539063 C 25.792969 1.824219 24.207031 1.824219 22.929688 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.929688 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.070313 47.460938 L 43.910156 37.996094 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 Z M 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 C 28.78125 13 32.273438 14.753906 34.542969 17.742188 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.257813 C 32.273438 35.246094 28.78125 37 25 37 Z M 37 26 L 35 26 L 35 28 L 33 28 L 33 26 L 31 26 L 31 24 L 33 24 L 33 22 L 35 22 L 35 24 L 37 24 Z M 44 26 L 42 26 L 42 28 L 40 28 L 40 26 L 38 26 L 38 24 L 40 24 L 40 22 L 42 22 L 42 24 L 44 24 Z" />
  </svg>
);

export const Skills = () => {
  return (
    <div id="skills" className="bg-secondary py-4 py-md-5">
      <div className="container page-container">
        <div className="row">
          <div className="col-12 d-lg-none text-center mb-4">
            <h1 className="text-primary fw-bold">Skills</h1>
          </div>

          <div className="col-lg-3 d-none d-lg-flex align-items-start">
            <h1 className="text-primary fw-bold">Skills</h1>
          </div>

          <div className="col-12 col-lg-9">
            <div className="row skills-grid">
              <div className="col-12 col-sm-6 col-md-3 text-center text-md-start">
                <ul className="skills-list">
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <SiPandas className="me-2 icon-style" /> Pandas
                  </li>
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <SiNumpy className="me-2 icon-style" /> NumPy
                  </li>

                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <TbCompassOff className="me-2 icon-style" /> Matplotlib
                  </li>
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <SiScikitlearn className="me-2 icon-style" /> Scikit-learn
                  </li>
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <SiJupyter className="me-2 icon-style" /> Jupyter Notebook
                  </li>
                </ul>
              </div>

              <div className="col-12 col-sm-6 col-md-3 text-center text-md-start">
                <ul className="skills-list">
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <CppIcon style={{ marginRight: "15px" }} /> C++
                  </li>
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <FaJsSquare className="me-2 icon-style" /> JavaScript
                  </li>
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <FaPython className="me-2 icon-style" /> Python
                  </li>
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <RiJavaLine className="me-2 icon-style" /> Java
                  </li>
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <SiGnubash className="me-2 icon-style" /> Bash
                  </li>
                </ul>
              </div>

              <div className="col-12 col-sm-6 col-md-3 text-center text-md-start">
                <ul className="skills-list">
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <FaReact className="me-2 icon-style" /> React
                  </li>
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <TbBrandNodejs className="me-2 icon-style" /> Node.js
                  </li>
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <SiExpress className="me-2 icon-style" /> Express
                  </li>
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <SiNestjs className="me-2 icon-style" /> Nest.js
                  </li>
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <SiNextdotjs className="me-2 icon-style" /> Next.js
                  </li>
                </ul>
              </div>

              <div className="col-12 col-sm-6 col-md-3 text-center text-md-start">
                <ul className="skills-list">
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <BiLogoPostgresql className="me-2 icon-style" /> PostgreSQL
                  </li>
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <SiRedis className="me-2 icon-style" /> Redis
                  </li>
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <FaDocker className="me-2 icon-style" /> Docker
                  </li>
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <FaGitAlt className="me-2 icon-style" /> Git
                  </li>
                  <li className="skill-item d-flex align-items-center justify-content-center justify-content-md-start">
                    <FaLinux className="me-2 icon-style" /> Linux
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
