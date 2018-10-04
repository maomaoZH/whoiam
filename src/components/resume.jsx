import React from "react";
import "../App.css";
import data from "../data";
import ProgressBar from "./progressBar";

const Resume = () => {
  return (
    <section className="resume">
      <div className="blocker">
        <i className="fa fa-briefcase mgr-24" />
        Employment
      </div>
      {data.jobExperiences.map((job, index) => (
        <div key={index} className="resumeListWrapper employment">
          <div className="big-num border-r">{`0${index + 1}`}</div>
          <div className="rightColumn">
            <p className="title">{job.Title}</p>
            <p className="company">{job.Company}</p>
            <ul className="task">
              {job.Responsibilities.map((res, index) => (
                <li key={index}>{res}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <div className="blocker">
        <i className="fa fa-graduation-cap mgr-24" />
        Education
      </div>
      {data.education.map((education, index) => (
        <div className="resumeListWrapper education" key={index}>
          <div className="leftColumn border-r">
            <p className="title">{education.university}</p>
            <p className="subject">{education.subject}</p>
          </div>
          <div className="big-num">{`0${index + 1}`}</div>
        </div>
      ))}

      <div className="blocker">
        <i className="fa fa-wrench mgr-24" />
        Skills
      </div>
      <div className="skillWrapper">
        {data.skills.map((skill, index) => (
          <div className="block" key={index}>
            <p className="title">{skill.name}</p>
            <p className="subject">{skill.value}%</p>
            <ProgressBar
              startWidth={0}
              endWidth={parseInt(skill.value)}
              duration={2000}
            />
          </div>
        ))}
      </div>

      <div className="blocker">
        <i className="fa fa-certificate mgr-24" />
        Certificated Scrum Master
      </div>
    </section>
  );
};

export default Resume;
