import React, { useEffect, useState } from "react";
import axios from "../../services/api-interceptor";
import IMDBApi from "../../services/IMDBApi";
import { toast } from "react-toastify";
import Navbar from "../../components/navbar/NavBar";
import { useParams } from "react-router-dom";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MovieViewPoster from "../../components/MovieViewPoster";
import MovieViewTrailer from "../../components/MovieViewTrailer";
import ImageSlider from "../../components/ImageSlider";
import { TimeOutline, CalendarOutline } from "react-ionicons";

const MovieView = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(IMDBApi.value + "/Title/" + IMDBApi.key + "/" + id + "/Trailer,")
          .then(function (response) {
            console.log(response);
            setMovie(response.data);
          });
      } catch (err) {
        toast.error(err.response.data);
      }
    };
    fetchData();
  }, []);
  const [movie, setMovie] = useState(null);
  const handleMovieChange = async (newId) => {
    navigate("/movie/" + newId);
    try {
      await axios
        .get(
          IMDBApi.value + "/Title/" + IMDBApi.key + "/" + newId + "/Trailer,"
        )
        .then(function (response) {
          console.log(response);
          setMovie(response.data);
        });
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <>
      <Navbar />
      {movie !== null ? (
        <>
          <div className="title">
            <h1>{movie.title}</h1>
          </div>
          <div className="movie-view">
            <div className="poster-details">
              <MovieViewPoster image={movie.image} />
              <div className="icon">
                <TimeOutline color={"#00000"} height="55px" width="55px" />{" "}
                {movie.runtimeStr
                  ? movie.runtimeStr
                  : "We don't have an accurate runtime yet."}
              </div>
              <div className="icon">
                <CalendarOutline color={"#00000"} height="55px" width="55px" />{" "}
                {movie.releaseDate
                  ? movie.releaseDate
                  : "We don't have an accurate release date yet."}
              </div>
            </div>

            <Divider
              orientation="vertical"
              flexItem
              style={{
                marginInline: "1em",
                backgroundColor: "#0D1321",
                borderRadius: "2px",
              }}
              sx={{ borderRightWidth: "5px" }}
            />
            <div className="image-description-container">
              <MovieViewTrailer trailerLink={movie.trailer.linkEmbed} />
              <div className="description">{movie.plot}</div>
              <ImageSlider
                similars={movie.similars}
                handleMovieChange={(value) => handleMovieChange(value)}
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default MovieView;
