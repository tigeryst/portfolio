import React from "react";

const Home = () => (
  <>
    {/* Introduction */}
    <section class="intro" id="home">
      <h1 class="section__title section__title--intro">
        Hi, I am <strong>Jane Smith</strong>
      </h1>
      <p class="section__subtitle section__subtitle--intro">front-end dev</p>
      <img
        src="../images/dev-jane-01-2x.png"
        alt="a picture of Jane Smith smiling"
        class="intro__img"
      />
    </section>

    {/* My Services */}
    <section class="my-services" id="services">
      <h2 class="section__title section__title--services">What I do</h2>
      <div class="services">
        <div class="service">
          <h3>Design + Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div class="service">
          <h3>E-Commerce</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div class="service">
          <h3>WordPress</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <a href="#work" class="btn">
        see my work
      </a>
    </section>

    {/* About Me */}
    <section class="about-me" id="about">
      <h2 class="section__title section__title--about">Who I am</h2>
      <p class="section__subtitle section__subtitle--about">
        Designer & developer based out of NYC
      </p>

      <div class="about-me__body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <img
        src="../images/dev-jane-02-2x.png"
        alt="Jane leaning against a bus"
        class="about-me__img"
      />
    </section>

    {/* My Work */}
    <section class="my-work" id="work">
      <h2 class="section__title section__title--work">My work</h2>
      <p class="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div class="portfolio">
        {/* Portfolio Item 01 */}
        <a href="portfolio-item.html" class="portfolio__item">
          <img
            src="../images/portfolio-01-2x.png"
            alt=""
            class="portfolio__img"
          />
        </a>

        {/* Portfolio Item 02 */}
        <a href="portfolio-item.html" class="portfolio__item">
          <img
            src="../images/portfolio-02-2x.png"
            alt=""
            class="portfolio__img"
          />
        </a>

        {/* Portfolio Item 03 */}
        <a href="portfolio-item.html" class="portfolio__item">
          <img
            src="../images/portfolio-03-2x.png"
            alt=""
            class="portfolio__img"
          />
        </a>

        {/* Portfolio Item 04 */}
        <a href="portfolio-item.html" class="portfolio__item">
          <img
            src="../images/portfolio-04-2x.png"
            alt=""
            class="portfolio__img"
          />
        </a>

        {/* Portfolio Item 05 */}
        <a href="portfolio-item.html" class="portfolio__item">
          <img
            src="../images/portfolio-05-2x.png"
            alt=""
            class="portfolio__img"
          />
        </a>

        {/* Portfolio Item 06 */}
        <a href="portfolio-item.html" class="portfolio__item">
          <img
            src="../images/portfolio-06-2x.png"
            alt=""
            class="portfolio__img"
          />
        </a>

        {/* Portfolio Item 07 */}
        <a href="portfolio-item.html" class="portfolio__item">
          <img
            src="../images/portfolio-07-2x.png"
            alt=""
            class="portfolio__img"
          />
        </a>

        {/* Portfolio Item 08 */}
        <a href="portfolio-item.html" class="portfolio__item">
          <img
            src="../images/portfolio-08-2x.png"
            alt=""
            class="portfolio__img"
          />
        </a>

        {/* Portfolio Item 09 */}
        <a href="portfolio-item.html" class="portfolio__item">
          <img
            src="../images/portfolio-09-2x.png"
            alt=""
            class="portfolio__img"
          />
        </a>

        {/* Portfolio Item 10 */}
        <a href="portfolio-item.html" class="portfolio__item">
          <img
            src="../images/portfolio-10-2x.png"
            alt=""
            class="portfolio__img"
          />
        </a>
      </div>
    </section>
  </>
);

export { Home };
