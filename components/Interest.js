import React from "react";

export const Interest = ({ title, interests }) => {
  return (
    <div id="interest" className="bg-white">
      <h1
        className="text-primary fw-bold py-2 text-center text-md-start"
        style={{ fontSize: "28px" }}
      >
        {title}
      </h1>
      <div>
        <div className="row justify-content-center justify-content-md-start col-lg-10">
          <ul
            className="text-center text-md-start"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              paddingLeft: "10px",
            }}
          >
            {interests.map((name, index) => (
              <li
                key={index}
                className="col-12 col-md-6"
                style={{
                  listStyleType: "disc",
                  paddingLeft: "5px",
                  listStylePosition: "inside",
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
