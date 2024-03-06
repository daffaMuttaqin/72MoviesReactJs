import React from "react";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

function Trending() {
  return (
    <div>
      <br />
      <div
        id="trending"
        className="text-center lg:text-5xl text-3xl text-gray-200 font-bold"
      >
        TRENDING MOVIES
      </div>
      <div className="lg:w-8/12 w-full mx-auto mt-3 grid lg:grid-cols-3 grid-cols-1 py-4 gap-y-5">
        {/* Card 1 */}
        <div className="card lg:w-96 w-80 mx-auto glass">
          <figure>
            <img
              src={duneImage}
              className="h-[500px] lg:w-96 w-80 mx-auto"
              alt="car!"
            />
          </figure>
          <div className="card-body text-gray-200">
            <h2 className="card-title">DUNE</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card lg:w-96 w-80 mx-auto glass">
          <figure>
            <img
              src={everythingImage}
              className="h-[500px] lg:w-96 w-80 mx-auto"
              alt="car!"
            />
          </figure>
          <div className="card-body text-gray-200">
            <h2 className="card-title">EVERYTHING</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card lg:w-96 w-80 mx-auto glass">
          <figure>
            <img
              src={infiniteImage}
              className="h-[500px] lg:w-96 w-80 mx-auto"
              alt="car!"
            />
          </figure>
          <div className="card-body text-gray-200">
            <h2 className="card-title">INFINITE STORM</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card lg:w-96 w-80 mx-auto glass">
          <figure>
            <img
              src={jokerImage}
              className="h-[500px] lg:w-96 w-80 mx-auto"
              alt="car!"
            />
          </figure>
          <div className="card-body text-gray-200">
            <h2 className="card-title">JOKER</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card lg:w-96 w-80 mx-auto glass">
          <figure>
            <img
              src={lightyearImage}
              className="h-[500px] lg:w-96 w-80 mx-auto"
              alt="car!"
            />
          </figure>
          <div className="card-body text-gray-200">
            <h2 className="card-title">BUZZ LIGHTYEAR</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card lg:w-96 w-80 mx-auto glass">
          <figure>
            <img
              src={morbiusImage}
              className="h-[500px] lg:w-96 w-80 mx-auto"
              alt="car!"
            />
          </figure>
          <div className="card-body text-gray-200">
            <h2 className="card-title">MORBIUS</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
