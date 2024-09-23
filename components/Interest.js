import React from "react";
import { FaBrain, FaTools, FaRobot, FaLaptopCode } from "react-icons/fa";

export const Interest = ({ interest }) => {
  return (
    <div id="interest" className="bg-white">
      <h1 className="text-primary fw-bold py-2" style={{ fontSize: "28px" }}>
        Interest
      </h1>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px",
          padding: 0,
          listStyleType: "none",
        }}
      >
        {interest.map((name, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap", // Prevents the text from wrapping
              overflow: "hidden", // Ensures long text is clipped
              textOverflow: "ellipsis", // Adds ellipsis for overflowing text
              // padding: "0 10px",
            }}
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
