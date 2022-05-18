import React from "react";

const Blogs = () => {
  return (
    <section className="my-blogs" id="blogs">
      <h2 className="section__title section__title--blogs">Blogs</h2>
      <p className="section__subtitle.section__subtitle--blogs">
        Things I Think About
      </p>

      <div className="blogs">
        <div className="blog">
          <h3>Technology trends in 2021</h3>
          <p>30, Dec 2021</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>

        <div className="blog">
          <h3>What I learned from investing</h3>
          <p>30, Dec 2021</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>

        <div className="blog">
          <h3>My web development journey</h3>
          <p>30, Dec 2021</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
      </div>

      <a href="/blogs" className="btn btn--primary">
        see more blogs
      </a>
    </section>
  );
};

export default Blogs;
