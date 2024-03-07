import React from "react";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import { useEffect, useState } from "react";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";
import axios from "axios";

function Trending() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

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
        {movies.map((result, index) => {
          return (
            <>
              {/* Card */}
              <div className="card lg:w-96 w-80 mx-auto glass" key={index}>
                <figure>
                  <img
                    src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`}
                    className="h-[500px] lg:w-96 w-80 mx-auto"
                    alt="car!"
                  />
                </figure>
                <div className="card-body text-gray-200">
                  <h2 className="card-title">{result.title}</h2>
                  <p> {result.overview} </p>
                </div>
              </div>
              {/* End Card */}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Trending;
