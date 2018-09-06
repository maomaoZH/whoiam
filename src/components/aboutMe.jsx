import React from "react";
import "../App.css";
import data from "../data";

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="profileImage" />
      <div className="profileText">
        <div className="text">
          <h1>Hello there!</h1>
          <p>
            {data.aboutMe.map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </p>
        </div>
        <div className="info">
          {data.personalInfo.map((info, index) => (
            <p key={index}>
              <i className={`fa fa-${info.icon} icon`} />
              {`${info.title}:`} <a href={info.value}>{info.value}</a>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
