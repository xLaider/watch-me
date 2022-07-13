import React, { useState, useEffect } from "react";
import IMDBApiAdress from "../../services/IMDBApi";
import { toast } from "react-toastify";
import SplashIcon from "../../components/SplashIcon";
import LazyLoad from "react-lazy-load";
import NavBar from "../../components/navbar/NavBar";

import axios from "../../services/api-interceptor";

const HomePage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(IMDBApiAdress.value + "/MostPopularMovies/" + IMDBApiAdress.key)
          .then(function (response) {
            console.log(response);
            setMovies(response.data.items);
          });
        await axios
          .get(IMDBApiAdress.value + "/MostPopularTVs/" + IMDBApiAdress.key)
          .then(function (response) {
            console.log(response);
            setSeries(response.data.items);
          });
      } catch (err) {
        toast.error(err.response.data);
      }
    };
    fetchData();
  }, []);

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [chosenView, setChosenView] = useState("Movies");

  const handleViewChange = (value) => {
    if (value === chosenView) return;
    console.log(value);
    setChosenView(value);
  };

  console.log(chosenView);
  let splashIcons = [];
  if (chosenView === "Movies") {
    for (let i = 0; i < movies.length; i++) {
      splashIcons.push(
        <LazyLoad>
          <SplashIcon movieSeries={movies[i]} />
        </LazyLoad>
      );
    }
  } else if (chosenView === "Series") {
    for (let i = 0; i < series.length; i++) {
      splashIcons.push(
        <LazyLoad>
          <SplashIcon movieSeries={series[i]} />
        </LazyLoad>
      );
    }
  }
  return (
    <div>
      <NavBar handleViewChange={(value) => handleViewChange(value)} />
      <div className="row">
        <LazyLoad>
          <div className="container">{splashIcons}</div>
        </LazyLoad>
      </div>
    </div>
  );
};

export default HomePage;
