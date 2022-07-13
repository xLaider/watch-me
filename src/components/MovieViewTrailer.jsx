import React from "react";

const MovieViewTrailer = (props) => {
  return (
    <>
      {props.trailerLink !== null ? (
        <iframe
          className="video-responsive"
          src={props.trailerLink}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded IMDB"
          placeholder="We don't have a trailer for this Movie/Show"
        />
      ) : (
        <>We don't have a trailer for this Series/Movie</>
      )}
    </>
  );
};

export default MovieViewTrailer;
