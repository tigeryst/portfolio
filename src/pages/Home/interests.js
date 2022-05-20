import React from "react";
import { Link } from "react-router-dom";

import runningImg from "../../images/interest-running.jpg";
import readingImg from "../../images/interest-reading.jpg";
import cookingImg from "../../images/interest-cooking.jpg";
import travelImg from "../../images/interest-travel.jpg";
import artImg from "../../images/interest-art.jpg";

const Interests = () => {
  return (
    <section className="my-interests" id="interests">
      <h2 className="section__title section__title--interests">Interests</h2>
      <p className="section__subtitle section__subtitle--interests">
        What I Love
      </p>

      <div className="interests">
        <div className="interest interest--cooking">
          {/* <img src={cookingImg} alt="" className="interest__img" /> */}
          {/* <div className="interest__overlay"> */}
            <h3>Cooking</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              iste recusandae! Illo recusandae ducimus odit magnam nemo, dolores
              quos expedita.
            </p>
          {/* </div> */}
        </div>

        <div className="interest interest--art">
          {/* <img src={artImg} alt="" className="interest__img" /> */}
          {/* <div className="interest__overlay"> */}
            <h3>Art</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              iste recusandae! Illo recusandae ducimus odit magnam nemo, dolores
              quos expedita.
            </p>
          {/* </div> */}
        </div>

        <div className="interest interest--travel">
          {/* <img src={travelImg} alt="" className="interest__img" /> */}
          {/* <div className="interest__overlay"> */}
            <h3>Travel</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              iste recusandae! Illo recusandae ducimus odit magnam nemo, dolores
              quos expedita.
            </p>
          {/* </div> */}
        </div>

        <div className="interest interest--reading">
          {/* <img src={readingImg} alt="" className="interest__img" /> */}
          {/* <div className="interest__overlay"> */}
            <h3>Reading</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              iste recusandae! Illo recusandae ducimus odit magnam nemo, dolores
              quos expedita.
            </p>
          {/* </div> */}
        </div>

        <div className="interest interest--running">
          {/* <img src={runningImg} alt="" className="interest__img" /> */}
          {/* <div className="interest__overlay"> */}
            <h3>Running</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              iste recusandae! Illo recusandae ducimus odit magnam nemo, dolores
              quos expedita.
            </p>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Interests;
