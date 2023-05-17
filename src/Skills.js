import React from "react";
import Html from "./images/html.svg";
import Css from "./images/css.svg";
import Javascript from "./images/javascript.svg";
import angular from "./images/angular.svg";
import react from "./images/react.svg";
import redux from "./images/redux.svg";
import Api from "./images/api.svg";
import Git from "./images/git.svg";
import Firebase from "./images/firebase.svg";
import Skill from "./Skill";
const Skills = () => {
  return (
    <div className="section" id="skills-page">
      <h2 className="heading">Skills</h2>
      <div className="skills">
        <Skill techno={Html} language="HTML5" />
        <Skill techno={Css} language="CSS3" />
        <Skill techno={Javascript} language="Javascript" />
        <Skill techno={react} language="React" />
        <Skill techno={redux} language="Redux" />
        <Skill techno={angular} language="Angular" />
        <Skill techno={Api} language="Rest Api" />
        <Skill techno={Git} language="Git" />
        <Skill techno={Firebase} language="Firebase" />
      </div>
    </div>
  );
};
export default Skills;
