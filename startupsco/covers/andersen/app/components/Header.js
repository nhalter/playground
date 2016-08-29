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

        <article className="col span_6 content">
        <div className="FrontCover__heroTextLine1">Getting to startup</div>
        <div className="FrontCover__heroTextLine2">Grind</div>
        <div className="FrontCover__heroTextLine3">Mode</div>
        <div className="FrontCover__heroTextLine4"><span>A chat with</span>
        </div>
        <div className="FrontCover__heroTextLine5">Derek Andersen</div>
        <div className="FrontCover__heroTextLine6">Founder/CEO, Startup Grind</div>
        <div className="FrontCover__heroCta">READ STORY</div>
        </article>

        <article className="col span_6 rightimg">
        <div className="FrontCover__heroDude"></div>
        </article>

      </section>
    </div>
  </div>
)

export default Header
