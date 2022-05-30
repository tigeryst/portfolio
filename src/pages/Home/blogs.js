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
            Technology trends in 2022
          </Link>
          <p className="blog__date">30, May 2022</p>
          <p className="blog__post">
            
          </p>
        </div>

        <div className="blog">
          <Link to="/blogs/#" className="blog__title">
            What I learned from investing
          </Link>
          <p className="blog__date">01, Jan 2022</p>
          <p className="blog__post">
            Learning to invest is something that I found really challenging.
            With all the jargons to learn and all the noise and hype to filter
            out from genuine advice, it can be a tough maze to navigate for new
            investors. In this post, I hope to highlight key resources which I
            found really useful in learning the basics of investing and to share
            some of the learning points that I came across over the past year.
          </p>
        </div>

        <div className="blog">
          <Link to="/blogs/#" className="blog__title">
            My web development journey
          </Link>
          <p className="blog__date">30, Dec 2021</p>
          <p className="blog__post">
            Web development is my favourite hobby. There is just so much to
            learn in this broad field, and with all the different web
            applications that we see and use on a day to day basis, we can all
            probably appreciate that the possibilities are endless. This blog is
            my attempt to record my journey from "Wow, this website has such a
            smooth interface." to "Hey, I can probably build something like
            this!". I hope that by sharing my experience learning web
            development, this would hint at possible footholds to people staring
            at this seemingly tall wall dividing the 'creators' from the
            'users', wondering how to scale it.
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
