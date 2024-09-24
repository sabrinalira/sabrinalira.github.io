import React, { useState } from "react";
import Link from "next/link";

export const Nav = ({ title, links }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleDropdownEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  // This function will collapse the navbar after a link is clicked.
  const handleLinkClick = () => {
    setIsNavCollapsed(true);
    setActiveDropdown(null); // Close the dropdown after an option is selected
  };

  // This function ensures the dropdown resets when clicked again on medium screens
  const handleDropdownClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index); // Toggle dropdown on click
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-secondary fixed-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link href="/">
          <a className="navbar-brand navbar-title-custom text-center text-md-left  mx-md-5">
            <span className="text-primary">
              <strong>{title}</strong>
            </span>
          </a>
        </Link>

        <div
          className={`navbar-collapse ${isNavCollapsed ? "collapse" : ""}`}
          id="navbarsExample09"
        >
          <div className="navbar-nav">
            {links.map((value, index) =>
              value.options ? (
                <div
                  key={index}
                  className={`nav-item dropdown ${
                    activeDropdown === index ? "show" : ""
                  }`}
                  onMouseEnter={() => handleDropdownEnter(index)}
                  onMouseLeave={handleDropdownLeave}
                  onClick={() => handleDropdownClick(index)} // Handle click to toggle dropdown on medium screens
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href={value.link}
                    id={`dropdown-${index}`}
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === index ? "true" : "false"}
                  >
                    {value.title}
                  </a>
                  <div
                    className={`dropdown-menu ${
                      activeDropdown === index ? "show" : ""
                    }`}
                    aria-labelledby={`dropdown-${index}`}
                  >
                    {value.options.map((option, subIndex) => (
                      <Link key={subIndex} href={option.link}>
                        <a
                          className="dropdown-item"
                          onClick={handleLinkClick} // Collapse the dropdown on selection
                        >
                          {option.title}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={index} href={value.link}>
                  <a className="nav-link" onClick={handleLinkClick}>
                    {value.title}
                  </a>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
