import React from "react";
import { Link } from "react-router-dom";

const Interests = () => {
  return (
    <section className="my-interests" id="interests">
      <h2 className="section__title section__title--interests">Interests</h2>
      <p className="section__subtitle section__subtitle--interests">
        What I Love
      </p>

      <div className="interests">
        <Link to="" className="btn interest interest--cooking">
          <h3>Cooking</h3>
          <p>
            What best to do after a rushed day of work than to put on some chill
            cooking beats and fill the room with savoury aroma. Follow along to
            see things I've been cooking.
          </p>
        </Link>

        <Link to="" className="btn interest interest--art">
          <h3>Art</h3>
          <p>
            To remain creative, to test new boundaries and constantly try out
            new techniques is what I learn from painting with watercolours. Here
            are some of my creations.
          </p>
        </Link>

        <Link to="" className="btn interest interest--travel">
          <h3>Travel</h3>
          <p>
            Explore new horizons, try out new food and learn about different
            cultures. See where I've been.
          </p>
        </Link>

        <Link to="" className="btn interest interest--reading">
          <h3>Reading</h3>
          <p>
            Quiet time with a book is where I feel most like myself. Look here
            for my reading list.
          </p>
        </Link>

        <Link to="" className="btn interest interest--running">
          <h3>Running</h3>
          <p>
            Why would anyone tire themselves out for no reason? Well I guess
            because people say it relieves stress? Learn about why I run.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Interests;
