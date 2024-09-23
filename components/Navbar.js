import React, { useState } from "react";
import Link from "next/link";

export const Nav = ({ title, links }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-secondary fixed-top">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <span className="">{title}</span>
          </a>
        </Link>
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarsExample09"
        >
          <div className="navbar-nav">
            {links.map((value, index) =>
              value.options ? (
                <div
                  key={index}
                  className={`nav-item dropdown ${dropdownOpen ? "show" : ""}`}
                  onMouseEnter={handleDropdownToggle}
                  onMouseLeave={handleDropdownToggle}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href={value.link}
                    id="experienceDropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen ? "true" : "false"}
                  >
                    {value.title}
                  </a>
                  <div
                    className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                    aria-labelledby="experienceDropdown"
                  >
                    {value.options.map((option, subIndex) => (
                      <Link key={subIndex} href={option.link}>
                        <a className="dropdown-item">{option.title}</a>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={index} href={value.link}>
                  <a className="nav-link">{value.title}</a>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
