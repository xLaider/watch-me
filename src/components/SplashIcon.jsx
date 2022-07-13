import React from "react";

const SplashIcon = (props) => {


  return (
    <div
      className="test_box box-01 col-sm-6 col-md-4"
      style={{ float: "left" }}
    >
      <div
        className="inner"
        style={{ backgroundImage: `url(${props.movieSeries.image})` }}
      >
        <a href={"/movie/"+props.movieSeries.id} className="test_click">
          <div className="flex_this">
            <h1 className="test_title">{props.movieSeries.title}</h1>
            <span className="test_link">See more</span>
          </div>
          <div className="flex_this">
            {props.movieSeries.rankUpDown.startsWith('+') ? (
              <span className="test_rank_up_down_positive">
                {props.movieSeries.rankUpDown}
              </span>
            ) : (
              <>
                {props.movieSeries.rankUpDown.startsWith('-') ? (
                  <span className="test_rank_up_down_negative">
                    {props.movieSeries.rankUpDown}
                  </span>
                ) : (
                  <span className="test_rank_up_down_neutral">
                    {props.movieSeries.rankUpDown}
                  </span>
                )}
              </>
            )}
          </div>
        </a>
      </div>
    </div>
  );
};

export default SplashIcon;
