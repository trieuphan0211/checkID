import React from "react";
import "../assets/scss/Test.scss";

export const Test = () => {
  const observer = new IntersectionObserver(
    (intersections) => {
      console.log(intersections);
      intersections.forEach(({ target, isIntersecting }) => {
        console.log(target, isIntersecting);
        target.classList.toggle("animate", isIntersecting);
      });
    }, // callback
    {
      threshold: 0,
    }
  );

  document.querySelectorAll(".bara1").forEach((div) => {
    observer.observe(div);
  });
  return (
    <div>
      <section id="placeholder">This is a placeholder</section>
      <div className="bara1" style={{ width: "92%" }}>
        <div className="textbox">
          <b>text</b>&nbsp;&nbsp;
          <font size="2px" color="#def7fc">
            92%
          </font>
        </div>
      </div>
      <div className="barb1" />
      <div className="bara1" style={{ width: "78%" }}>
        <div className="textbox">
          <b>text</b>&nbsp;&nbsp;
          <font size="2px" color="#def7fc">
            78%
          </font>
        </div>
      </div>
      <div className="barb1" />
      <div className="bara1" style={{ width: "56%" }}>
        <div className="textbox">
          <b>text</b>&nbsp;&nbsp;
          <font size="2px" color="#def7fc">
            56%
          </font>
        </div>
      </div>
      <div className="barb1" />
      <div className="bara1" style={{ width: "40%" }}>
        <div className="textbox">
          <b>text</b>&nbsp;&nbsp;
          <font size="2px" color="#def7fc">
            40%
          </font>
        </div>
      </div>
      <div className="barb1" />
      <div className="bara1" style={{ width: "31%" }}>
        <div className="textbox">
          <b>text</b>&nbsp;&nbsp;
          <font size="2px" color="#def7fc">
            31%
          </font>
        </div>
      </div>
      <div className="barb1" />
    </div>
  );
};
