import React from "react";

import NavHeader from "./NavHeader";

export default function Menu() {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <NavHeader />
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* Refatore e use o <Link> do React Router no lugar dos <a> */}

            {/* '/features' deve renderizar FeaturesSection */}
            <li>
              <a href="/features">Features</a>
            </li>
            {/* '/services' deve renderizar ServicesSection */}
            <li>
              <a href="/services">Services</a>
            </li>
            {/* '/portfolio' deve renderizar PortfolioSection */}
            <li>
              <a href="/portfolio">Gallery</a>
            </li>
            {/* '/testimonials' deve renderizar TestimonialsSection */}
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
            {/* '/team' deve renderizar TeamSection */}
            <li>
              <a href="/team">Team</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
