import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <section className="my-blogs" id="blogs">
      <h2 className="section__title section__title--blogs">Blogs</h2>
      <p className="section__subtitle section__subtitle--blogs">
        Things I Think About
      </p>

      <div className="blogs">
        <div className="blog">
          <Link to="/blogs/#" className="blog__title">
            Technology trends in 2021
          </Link>
          <p className="blog__date">30, Dec 2021</p>
          <p className="blog__post">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>

        <div className="blog">
          <Link to="/blogs/#" className="blog__title">
            What I learned from investing
          </Link>
          <p className="blog__date">30, Dec 2021</p>
          <p className="blog__post">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>

        <div className="blog">
          <Link to="/blogs/#" className="blog__title">
            My web development journey
          </Link>
          <p className="blog__date">30, Dec 2021</p>
          <p className="blog__post">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
      </div>

      <Link to="/blogs" className="btn btn--primary">
        see more blogs
      </Link>
    </section>
  );
};

export default Blogs;
