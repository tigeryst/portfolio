import React from "react";
import { Link } from "react-router-dom";

import notFoundImage from "../images/404.svg";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__text">
          We couldn't find the page you were looking for. It might have been
          removed or is temporarily unavailable. Check your URL or{" "}
          <Link to="/" className="text-muted">
            click here
          </Link>{" "}
          to go home.
        </p>
      </div>
      <img
        className="not-found__img"
        src={notFoundImage}
        alt="an astronaut floating in a remote, undiscovered location"
      />
    </div>
  );
};

export default NotFound;
