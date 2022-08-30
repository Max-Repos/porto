import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>
            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Bachelor of Technology in Computer Science
                  </h3>
                  <span className="qualification__subtitle">
                    Mathoshri Pratishtan School of Engineering, Nanded
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2018-2022
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    Intermediate (Class XII)
                  </h3>
                  <span className="qualification__subtitle">
                    Kusumtai High-School, Cidco, Nanded
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2013-2015
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    Matriculation (Class X)
                  </h3>
                  <span className="qualification__subtitle">
                    Shivaji Vidyalay, Cidco, Nanded-431603
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2007-2013
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Intern</h3>
                  <span className="qualification__subtitle">
                    Newton School Coding Boot Camp
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2022-present
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
