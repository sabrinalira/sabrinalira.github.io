import React from "react";
import { FaBrain, FaTools, FaRobot, FaLaptopCode } from "react-icons/fa";

export const Interest = ({ interest }) => {
  return (
    <div id="interest" className="bg-white">
      <h1
        className="text-primary fw-bold py-2 text-center text-md-start"
        style={{ fontSize: "28px" }}
      >
        Interest
      </h1>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: 0,
          listStyleType: "none",
        }}
        className="justify-content-md-start"
      >
        {interest.map((name, index) => (
          <li
            key={index}
            style={{
              minWidth: "220px",
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              flexGrow: 1,
              flexBasis: "auto",
            }}
            className="justify-content-center justify-content-md-start"
          >
            {index === 0 && (
              <FaLaptopCode
                className="icon-style"
                style={{ marginRight: "10px" }}
              />
            )}
            {index === 1 && (
              <FaTools className="icon-style" style={{ marginRight: "10px" }} />
            )}
            {index === 2 && (
              <FaBrain className="icon-style" style={{ marginRight: "10px" }} />
            )}
            {index === 3 && (
              <FaRobot className="icon-style" style={{ marginRight: "10px" }} />
            )}
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
