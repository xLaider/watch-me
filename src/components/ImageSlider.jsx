import React from "react";

const ImageSlider = (props) => {
  let similars = [];
  let similarsContainer = [];
  if (props.similars !== null) {
    let restFromDiv = props.similars.length % 4;
    let actualLength = props.similars.length - restFromDiv;
    let numberOfSections = actualLength / 4;
    let section = [];
    for (let i = 0; i < numberOfSections; i++) {
      for (let j = 0 + 4 * i; j < 4 + 4 * i; j++) {
        section.push(
          <div
            className="item"
            onClick={(e) => props.handleMovieChange(props.similars[j].id)}
          >
            <img src={props.similars[j].image} />
          </div>
        );
      }
      similars.push(section);
      section = [];
    }
    for (let i = 0; i < numberOfSections; i++) {
      similarsContainer.push(
        <section id={"section" + (i + 1)}>
          <a
            href={i === 0 ? "#section" + numberOfSections : "#section" + i}
            className="arrow__btn"
          >
            ‹
          </a>
          {similars[i]}
          <a
            href={
              i === numberOfSections - 1 ? "#section1" : "#section" + (i + 2)
            }
            className="arrow__btn"
          >
            ›
          </a>
        </section>
      );
    }
  }
  return <div className="wrapper">{similarsContainer}</div>;
};

export default ImageSlider;
