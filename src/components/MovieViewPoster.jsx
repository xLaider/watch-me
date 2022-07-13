import React from "react";

const MovieViewPoster = (props) => {
    return(
            <div className="img-container">
              <img src={props.image}></img>
            </div>
    );
}

export default MovieViewPoster;