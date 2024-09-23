import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-center py-2 px-5">
      <div className="container text-muted">
        <small>
          &copy; 2024{" "}
          <Link href="https://github.com/rakibulranak">
            <a>rakibulranak</a>
          </Link>
        </small>
      </div>
    </footer>
  );
};
