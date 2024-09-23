import React from "react";
import { FaBrain, FaTools, FaRobot, FaLaptopCode } from "react-icons/fa";

export const Interest = ({ interest }) => {
  return (
    <div id="interest" className="bg-white">
      {/* Centering the title on small screens, left-aligned on medium and larger */}
      <h1
        className="text-primary fw-bold py-2 text-center text-md-left"
        style={{ fontSize: "28px" }}
      >
        Interest
      </h1>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap", // Allow wrapping to handle multiple rows
          justifyContent: "center", // Center items in the row
          gap: "20px", // Add spacing between items
          padding: 0,
          listStyleType: "none", // Remove bullet points
        }}
      >
        {interest.map((name, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center", // Center each item
              whiteSpace: "nowrap", // Prevents the text from wrapping
              overflow: "hidden", // Ensures long text is clipped
              textOverflow: "ellipsis", // Adds ellipsis for overflowing text
              // padding: "10px", // Add some padding to space out the text and icons
              flex: "1 0 180px", // Flex items to take a minimum of 180px and grow equally
              maxWidth: "250px", // Set a maximum width for large screens
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
