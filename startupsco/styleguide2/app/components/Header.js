// Header.js
import React from 'react'

const Header = ({ title }) => (

  <div className="hero-full fade">
    <header>
    <div className="menu">
      <div className="icon-close">
        close menu
      </div>

      <ul>
        <li><a href="#">Company Info</a></li>
        <li><a href="#">Leadership</a></li>
        <li><a href="#">Press Releases</a></li>
        <li className="right"><a href="#">Resources</a></li>
        <li className="right"><a href="brand.html">Brand</a></li>
      </ul>

    </div>

    <section className="icon-menu col span_3">
      <span className="menu-btn">menu</span>
    </section>

    <section>
      <article className="col span_6 logo-z">
        <a href="index.html" title="Return to the homepage">
        <img className="logo" src="img/logo.svg" alt="Startups.co logo" /></a>
      </article>
    </section>

    </header>
  <div id="red">
      <section className="row hero brand">

        <article className="col span_12 content">

            <h1 className="fade-in">
              Brand Resources
              </h1>
              <h2 className="fade-in-sec">The guidelines that follow will help you correctly make use of our brand.
              </h2>
              <p><a href="#brands" className="button scroll center">
                Browse Resources by Brand
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="button__arrow button__arrow--out"><path d="M54.927 82.226v-82.22600000000001h-9.342v82.85700000000001l-24.676-24.676-3.303-3.303-6.606 6.606 3.303 3.303 32.066 32.066 3.303 3.303.316-.316.268.268 3.303-3.303 32.066-32.066 3.303-3.303-6.606-6.606-3.303 3.303-24.092 24.092z"/></svg>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="button__arrow button__arrow--in"><path d="M54.927 82.226v-82.22600000000001h-9.342v82.85700000000001l-24.676-24.676-3.303-3.303-6.606 6.606 3.303 3.303 32.066 32.066 3.303 3.303.316-.316.268.268 3.303-3.303 32.066-32.066 3.303-3.303-6.606-6.606-3.303 3.303-24.092 24.092z"/></svg>
              </a></p>
        </article>
      </section>
    </div>
  </div>
)

export default Header
