import React from "react";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

function SuperHero() {
  return (
    <div>
      <br />
      <div
        id="superHero"
        className="text-center lg:text-5xl text-3xl text-gray-200 font-bold"
      >
        SUPER HERO MOVIES
      </div>
      <div className="lg:w-8/12 w-full mx-auto mt-3 grid lg:grid-cols-3 grid-cols-1 py-4 gap-y-5">
        {/* Card 1 */}
        <div className="card lg:w-96 w-80 mx-auto glass">
          <figure>
            <img
              src={antmanImage}
              className="h-[500px] lg:w-96 w-80 mx-auto"
              alt="car!"
            />
          </figure>
          <div className="card-body text-gray-200">
            <h2 className="card-title">ANT MAN</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card lg:w-96 w-80 mx-auto glass">
          <figure>
            <img
              src={avengerImage}
              className="h-[500px] lg:w-96 w-80 mx-auto"
              alt="car!"
            />
          </figure>
          <div className="card-body text-gray-200">
            <h2 className="card-title">AVENGER</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card lg:w-96 w-80 mx-auto glass">
          <figure>
            <img
              src={batmanImage}
              className="h-[500px] lg:w-96 w-80 mx-auto"
              alt="car!"
            />
          </figure>
          <div className="card-body text-gray-200">
            <h2 className="card-title">THE BATMAN</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card lg:w-96 w-80 mx-auto glass">
          <figure>
            <img
              src={robinhoodImage}
              className="h-[500px] lg:w-96 w-80 mx-auto"
              alt="car!"
            />
          </figure>
          <div className="card-body text-gray-200">
            <h2 className="card-title">ROBIN HOOD</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card lg:w-96 w-80 mx-auto glass">
          <figure>
            <img
              src={spidermanImage}
              className="h-[500px] lg:w-96 w-80 mx-auto"
              alt="car!"
            />
          </figure>
          <div className="card-body text-gray-200">
            <h2 className="card-title">SPIDERMAN</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card lg:w-96 w-80 mx-auto glass">
          <figure>
            <img
              src={supermanImage}
              className="h-[500px] lg:w-96 w-80 mx-auto"
              alt="car!"
            />
          </figure>
          <div className="card-body text-gray-200">
            <h2 className="card-title">SUPERMAN</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuperHero;
